<template>
    <div class="d-flex justify-content-end">
        <Menubar :model="items" />
    </div>
</template>
  
<script>
import Menubar from 'primevue/menubar';
import UserListing from '@/pages/user/userListing.vue';

export default {
    name: "Navbar",
    components: {
        Menubar,
        UserListing
    },
    data() {
        return {
            items: [
                {
                    label: 'Home',
                    icon: 'pi pi-home',
                    url: '/'
                },
                {
                    label: 'User',
                    icon: 'pi pi-user',
                    url: '/user'
                },
            ]
        };
    }
};
</script>
<style scoped></style>
  