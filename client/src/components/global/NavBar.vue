<template>
    <div>
        <nav class="navbar navbar-expand-sm navbar-light bg-faded">

            <div class="container">
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#nav-content" aria-controls="nav-content" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
                </button>

                <!-- Brand -->
                <a class="navbar-brand" href="#">Logo</a>

                <!-- Links -->
                <div class="collapse navbar-collapse justify-content-end" id="nav-content">   
                    <ul class="navbar-nav">
                        <li class="nav-item">
                        <a @click="call" class="nav-link" href="javasript::void()">Link 1</a>
                        </li>
                        <li class="nav-item">
                        <a class="nav-link" href="#">Link 2</a>
                        </li>
                        <li class="nav-item" v-if="isLoggedIn">
                        <router-link to="home" class="nav-link">Logout</router-link>
                        </li>
                        <li class="nav-item" v-else>
                        <router-link to="login" class="nav-link">Login</router-link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    </div>
</template>

<script>
export default {
    name: 'NavBar',
    methods: {
        call () {
            this.$store.dispatch('login');
        }
    },
    computed: {
        isLoggedIn () {
            return Boolean(this.$store.getters.getJwt);
        }
    }
}
</script>

<style scoped>
    nav {
        background-color: #0377fc;
    }

    a {
        color: #fff !important;
    }
</style>