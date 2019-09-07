<template>
    <div class="body">
        <NavBar />

        <div class="container">
            <div class="row mt-5">
                <div class="col-lg-6 col-md-6 col-sm-12 m-auto">
                    <form action="" method="POST" @submit="login">
                        <div class="form-group">
                            <label for="">Email *</label>
                            <input type="text" name="email" id="email" class="form-control" required>
                        </div>

                        <div class="form-group">
                            <label for="">Password *</label>
                            <input type="password" name="password" id="password" class="form-control" required>
                        </div>

                        <button type="submit" class="btn btn-primary">Login</button>
                    </form>
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
    name: 'Login',
    components: {
        NavBar,
        Footer
    },
    methods: {
        login (event) {
            const email = document.querySelector('#email');
            const password = document.querySelector('#password');

            this.$store.dispatch('login', { email: email.value, password: password.value });

            email.value = "";
            password.value = "";

            event.preventDefault();
        }
    }
}
</script>

<style scoped>
    .body {
        height: 100vh;
    }
</style>