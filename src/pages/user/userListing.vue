<template>
    <div>
        <div class="flex justify-content-between">
            <h1>User Listing Page</h1>
            <div class="p-5">
                <Button label="Create" severity="info" @click="$router.push('/user/create')" />
            </div>
        </div>
        <DataTable :value="userList" showGridlines paginator :rows="5" :rowsPerPageOptions="[5, 10, 20, 50]"
            tableStyle="min-width: 50rem">
            <Column v-for="col of columns" :key="col.field" :field="col.field" :header="col.header"></Column>
            <Column :exportable="false" style="min-width:8rem">
                <template #body="slotProps">
                    <Button icon="pi pi-pencil" outlined rounded class="mr-2" @click="editUser(slotProps.data)" />
                    <Button icon="pi pi-trash" outlined rounded severity="danger"
                        @click="confirmDeleteProduct(slotProps.data)" />
                </template>
            </Column>
        </DataTable>
    </div>
</template>

<script>
import DataTable from 'primevue/datatable';
import Column from 'primevue/column';
import Button from 'primevue/button';

export default {
    name: 'UserListing',
    components: {
        DataTable,
        Column,
        Button
    },
    data() {
        return {
            userList: [],
            columns: null
        };
    },
    async created() {
        this.columns = [
            { field: 'name', header: 'Name' },
            { field: 'email', header: 'Email' },
            { field: 'dateOfBirth', header: 'Date of birth' },
            { field: 'updatedDate', header: 'Updated Date' }
        ];
        await this.fetchData();
    },
    methods: {
        async fetchData() {
            this.userList = await this.$store.dispatch('user/fetchUserList');
        },
        editUser(user) {
            this.$router.push(`/user/${user.id}`);
        },
        async confirmDeleteProduct(user) {
            await this.$store.dispatch('user/deleteUser', user.id);
        },
    }
};
</script>