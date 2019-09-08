<template>
    <div class="body">
        <div class="container">
            <div class="row mt-5">
                <div class="col-lg-6 col-md-6 col-sm-12 m-auto">
                    <h4>Login</h4>
                    <form action="" method="POST" @submit="login">
                        <div class="form-group">
                            <label for="">Email *</label>
                            <input type="text" name="email" id="email" class="form-control" placeholder="Enter your email.." required>
                        </div>

                        <div class="form-group">
                            <label for="">Password *</label>
                            <input type="password" name="password" id="password" class="form-control" placeholder="Enter your password" required>
                        </div>

                        <button type="submit" class="btn btn-primary">Login</button>
                    </form>
                </div>
            </div>
        </div>
    </div>
    
</template>

<script>

export default {
    name: 'Login',
    methods: {
        login (event) {
            event.preventDefault();

            const email = document.querySelector('#email');
            const password = document.querySelector('#password');

            this.$store.dispatch('login', { email: email.value, password: password.value });

            email.value = "";
            password.value = "";
        }
    }
}
</script>

<style scoped>
    .body {
        height: 100vh;
    }
</style>