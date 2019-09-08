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
                        <SignUp />
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>

import SignUp from './global/SignUp';

export default {
    name: 'Register',
    components: {
        SignUp
    }
}
</script>

<style scoped>

</style>