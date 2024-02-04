<template>
    <div>
        <h1>User Listing Page</h1>
        <DataTable :value="userData" showGridlines paginator :rows="5" :rowsPerPageOptions="[5, 10, 20, 50]" tableStyle="min-width: 50rem">
            <Column v-for="col of columns" :key="col.field" :field="col.field" :header="col.header"></Column>
        </DataTable>
    </div>
</template>

<script>
import DataTable from 'primevue/datatable';
import Column from 'primevue/column';

export default {
    name: 'UserListing',
    components: {
        DataTable,
        Column
    },
    data() {
        return {
            userData: [],
            columns: null
        };
    },
    async created() {
        this.columns = [
            { field: 'name', header: 'Name' },
            { field: 'email', header: 'Email' },
            { field: 'createdDate', header: 'Created Date' },
            { field: 'updatedDate', header: 'Updated Date' }
        ];
        await this.fetchData();
    },
    methods: {
        async fetchData() {
            this.userData = await this.$store.dispatch('user/fetchUserData');
        },
    }
};
</script>