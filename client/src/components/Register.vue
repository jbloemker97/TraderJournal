<template>
    <div>
        <NavBar />

        <div class="background-image">
            <div class="container">
                <!-- Ready to sign up? -->
                <div class="row">
                    REgister
                </div>

                <!-- Login Form -->
                <div class="row">

                </div>
            </div>
        </div>

        <Footer />
    </div>
</template>

<script>
    import NavBar from './global/NavBar';
    import Footer from './global/Footer';

export default {
    name: 'Register',
    components: {
        NavBar,
        Footer
    }
}
</script>

<style scoped>

</style>