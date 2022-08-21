<template>
    <v-container fluid class="hero-section">
        <v-row class="content">
            <v-col cols="12" sm="6" class="left">
                <h1 class="title">
                    We are revolutionising your concept of comfort.
                </h1>
                <h2 class="subtitle">
                    Created with a can do and achievers mindset. A self-onboarding 
                    application with features that open you to a new way.
                </h2>
                <v-btn rounded small class="signup"> Get Started </v-btn>
                <div class="btn-section">
                    <img src="../assets/images/appstore.jpg" alt="appstore" class="img"/>
                    <img src="../assets/images/googleplay.jpg" alt="googleplay" class="img"/>
                </div>
            </v-col>
            <v-col cols="12" sm="6" class="d-none d-md-flex">
                <h1 class="display-1 font-weight-bold">
                    title2
                </h1>
                <h2 class="font-weight-light">
                    suntittiit2
                </h2>
            </v-col>
        </v-row>
    </v-container>
</template>

<script>

</script>

<style scoped lang="scss">
    @import '../assets/styles/variables.scss';

    .hero-section {
        height: 80vh;

        &::before {
            content: "";
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 90vh;
            background-image: url("../assets/images/background-image.png");
            opacity: 0.2;
            display: block;
        }

        .content{
            position: relative;
            // z-index: 10;
            .left{

                .title{
                    font-weight: 700;
                    font-size: 2rem !important;
                    line-height: 2.5rem;
                    color: $font-color;
                }

                .subtitle{
                    margin-top: 1rem;
                    font-size: 1rem !important;
                    line-height: 2.187rem;
                    color: $font-color2;
                    font-weight: 400;
                }

                .signup{
                    background: $primary-color !important;
                    border-radius: 1.875rem;
                    color: $white;
                    font-weight: 500;
                    font-size: 0.7375rem;
                    line-height: 1.375rem;
                    padding: 1rem !important;
                    text-transform: none;
                    margin: auto;
                    margin-right: 0.625rem;
                }

                .btn-section{
                    display: flex;
                    justify-content: flex-start;
                    align-items: center;
                    margin-top: 1rem;
                    margin-bottom: 1rem;

                    .img{
                        width: 5.9375rem;
                        height: 2.8rem;
                        margin-right: 0.625rem;
                    }
                }
            }
        }
    }
</style>