<template>
    <div>
        <nav class="navbar navbar-expand-sm navbar-light bg-faded">

            <div class="container">
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#nav-content" aria-controls="nav-content" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
                </button>

                <!-- Brand -->
                <router-link :to="{ name: 'Home' }" class="navbar-brand">Logo</router-link>

                <!-- Links -->
                <div class="collapse navbar-collapse justify-content-end" id="nav-content">   
                    <ul class="navbar-nav">

                        <!-- Product -->
                        <li class="nav-item">
                            <router-link :to="{ name: 'Product' }" class="nav-link">Product</router-link>
                        </li>

                        <!-- My Strategies - If Logged in -->
                        <li class="nav-item" v-if="isLoggedIn">
                            <router-link :to="{ name: 'Strategy' }" class="nav-link">My Strategies</router-link>
                        </li>
                        
                        <!-- Logout -->
                        <li class="nav-item" v-if="isLoggedIn">
                            <router-link :to="{ name: 'Home' }" class="nav-link" @click.native="logout">Logout</router-link>
                        </li>

                        <!-- Login -->
                        <li class="nav-item" v-else>
                            <router-link :to="{ name: 'Login' }" class="nav-link">Login</router-link>
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
        logout () {
            this.$store.dispatch('logout', null);
        }
    },
    computed: {
        isLoggedIn () {
            return Boolean(this.$store.getters.getUser);
        }
    }
}
</script>

<style scoped>
    nav {
        background-color: #006DB0;
        position: fixed;
        width: 100%;
        z-index: 2;
    }

    .nav-item {
        padding: 15px;
    }

    a {
        color: #fff !important;
    }

    a:hover {
        opacity: 0.8;
    }
</style>