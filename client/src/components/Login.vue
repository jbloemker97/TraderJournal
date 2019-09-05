<template>
    <div>
        <NavBar />

        <h1>Login</h1>

        <Footer />
    </div>
    
</template>

<script>
import NavBar from './global/NavBar';
import Footer from './global/Footer';

export default {
    name: 'Login',
    components: {
        NavBar,
        Footer
    }
}
</script>

<style scoped>

</style>