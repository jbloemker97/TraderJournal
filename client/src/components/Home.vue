<template>
    <div>
        <!-- Home Banner -->
        <header class="home">
            <div class="overlay">
                <div class="container pt-5">
                    <div class="row">
                        <div class="col-lg-8 col-md-8 col-sm-12">
                            <h4 class="title twhite">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas ut quam consectetur</h4>
                            <ul class="mt-4">
                                <div class="d-flex flex-row">
                                    <i class="fa fa-check"></i>
                                    <li class="twhite">Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore aspernatur, aper</li>
                                </div>
                                <div class="d-flex flex-row">
                                    <i class="fa fa-check"></i>
                                    <li class="twhite">Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore aspernatur, aper</li>
                                </div>
                                <div class="d-flex flex-row">
                                    <i class="fa fa-check"></i>
                                    <li class="twhite">Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore aspernatur, aper</li>
                                </div>
                            </ul>
                        </div>
                        <div class="col-lg-4 col-md-8 col-sm-12 pb-5">
                            <SignUp />
                        </div>
                    </div>
                </div>
            </div>
        </header>

        <!-- Product Description 1 -->
        <section id="explore-head-section">
            <div class="container">
                <div class="row">
                    <div class="col text-center">
                    <div class="py-5">
                        <h1 class="display-4">Explore</h1>
                        <p class="lead">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                        <a href="#" class="btn btn-outline-secondary">Find Out More</a>
                    </div>
                    </div>
                </div>
            </div>
        </section>

        <ProductImages />

    </div>
    
</template>

<script>
    import SignUp from './global/SignUp';
    import ProductImages from './global/ProductImages';

    export default {
        name: 'Home',
        components: {
            SignUp,
            ProductImages
        }
    }
</script>

<style>
    .home {
        background: linear-gradient( rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5) ), url('~@/assets/img/home.jpg');
        background-position: center;
        background-size: cover;
        padding-top: 56px;
        width: 100%;
    }

    .overlay {
        min-height: 400px;
    }

    .twhite {
        color: #fff;
    }

    .title {
        font-size: 36px;
    }

    .flex-row {
        font-size: 20px;
        min-height: 50px;
    }

    form {
        color: #fff;
    }

    .register-title {
        color: #fff;
    }

    /*****
    Explore Section
    ******/

    #explore-head-section {
        background-color: #e6e6e6;
    }

    .imgcol {
        text-align: center;
    }
</style>