<template>
	<link rel="stylesheet" href="https://unpkg.com/primeflex@latest/primeflex.css">   
	<div id="app">
		<NavBar />
		<router-view />
	</div>
</template>

<script>
import NavBar from './components/Navbar.vue';

export default {
	name: 'App',
	components: {
		NavBar
	}
};
</script>
<style scoped></style>
