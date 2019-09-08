<template>
    <div>
        <h4 class="register-title">Ready To Get Started?</h4>

        <form action="" method="POST" @submit="register">
            <div class="form-group">
                <label for="email">Name</label>
                <input type="text" name="name" id="name" class="form-control" placeholder="Enter your name..">
            </div>

            <div class="form-group">
                <label for="email">Email *</label>
                <input type="text" name="email" id="email" class="form-control" placeholder="Enter your email.." required>
            </div>

            <div class="form-group">
                <label for="password">Password *</label>
                <input type="password" name="password" id="password" class="form-control" placeholder="Enter a password.." required>
            </div>

            <div class="form-group">
                <label for="confirmPassword">Confirm Password *</label>
                <input type="password" name="confirmPassword" id="confirmPassword" class="form-control" placeholder="Confirm password.." required>
            </div>

            <button type="submit" class="btn btn-primary w-100">Register</button>
        </form>
    </div>
</template>

<script>
export default {
    name: 'Signup',
    methods: {
        register (event) {
            event.preventDefault();

            const name = document.querySelector('#name');
            const email = document.querySelector('#email');
            const password = document.querySelector('#password');
            const confirmPassword = document.querySelector('#confirmPassword');

            if (password.value !== confirmPassword.value) return; // Handle Error

            this.$store.dispatch('register', { name: name.value, email: email.value, password: password.value });
        }
    }
}
</script>

<style scoped>

</style>