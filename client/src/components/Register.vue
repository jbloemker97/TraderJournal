<template>
    <div>
        <div class="background-image">
            <div class="container">
                
                <div class="row mt-5">
                    <div class="col-lg-6">
                        <!-- Ready to sign up? -->
                        <div class="card">
                            <h3 class="card-title">Lorem Ipsum is simply dummy text of the printing and typesetting industr</h3>
                        </div>
                        <div class="card-body">
                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries</p>
                            <p>nchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including ver</p>
                        </div>
                    </div>

                    <div class="col-lg-6">
                        <!-- Login Form -->
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

                            <button type="submit" class="btn btn-primary">Login</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>

export default {
    name: 'Register',
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