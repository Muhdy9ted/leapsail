<template>
    <div>
        <v-app-bar class="navbar">
            <div class="content">
                <img src="../assets/images/leapsail-logo.svg" alt="Leapsail Logo" class="logo">
                <v-app-bar-nav-icon class="hidden-lg-and-up" @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
                <div class="hidden-md-and-down menu">
                    <div class="left">
                        <v-list class="list">
                            <v-list-item v-for="item in items.slice(0,4)" :key="item.title" link class="list-item">
                                <v-list-item-title v-if="item.dropdown">
                                    <v-menu bottom :offset-y="offset">
                                        <template v-slot:activator="{ on, attrs }">
                                            <v-btn v-bind="attrs" v-on="on" class="dropdown">{{item.text}} <v-icon>mdi-chevron-down</v-icon></v-btn>
                                        </template>

                                        <v-list>
                                            <v-list-item v-for="(dropdownItem, index) in item.dropdown" :key="index" >
                                                <v-list-item-title>{{ dropdownItem.title }}</v-list-item-title>
                                            </v-list-item>
                                        </v-list>
                                    </v-menu>
                                </v-list-item-title>
                                <v-list-item-title v-else>
                                    <router-link :to="item.link">{{item.text}}</router-link>
                                </v-list-item-title>
                            </v-list-item>
                        </v-list>
                    </div>
                    <div class="right">
                        <v-list class="list">
                            <v-list-item v-for="item in items.slice(4,7)" :key="item.title" link class="list-item">
                                <v-list-item-title v-if="item.dropdown">
                                    <v-menu bottom :offset-y="offset">
                                        <template v-slot:activator="{ on, attrs }">
                                            <v-btn v-bind="attrs" v-on="on" class="dropdown">{{item.text}} <v-icon>mdi-chevron-down</v-icon></v-btn>
                                        </template>

                                        <v-list>
                                            <v-list-item v-for="(dropdownItem, index) in item.dropdown" :key="index" >
                                                <v-list-item-title>{{ dropdownItem.title }}</v-list-item-title>
                                            </v-list-item>
                                        </v-list>
                                    </v-menu>
                                </v-list-item-title>
                                <v-list-item-title v-else>
                                    <router-link :to="item.link">{{item.text}}</router-link>
                                </v-list-item-title>
                            </v-list-item>
                            <v-btn rounded small class="signup"> Create Account <v-icon>mdi-chevron-right</v-icon></v-btn>
                        </v-list>
                    </div>
                </div>
            </div>
        </v-app-bar>

        <v-navigation-drawer absolute v-model="drawer" temporary class="drawer">
            <img src="../assets/images/leapsail-logo.svg" alt="Leapsail Logo" class="logo">

            <v-divider></v-divider>

            <v-list>
                <v-list-item v-for="item in items" :key="item.title" link>
                    <v-list-item-icon>
                        <v-icon>{{ item.icon }}</v-icon>
                    </v-list-item-icon>
                    <v-list-item-title>
                        <router-link :to="item.link">{{item.text}}</router-link>
                    </v-list-item-title>
                </v-list-item>
                <v-btn rounded small class="signup"> Create Account <v-icon>mdi-chevron-right</v-icon></v-btn>

            </v-list>
        </v-navigation-drawer>
    </div>
</template>

<script>

    export default {
        data(){
            return {
                drawer: null,
                offset: true,
                items: [
                    {
                        text: 'Why Leapsail',
                        icon: 'mdi-home',
                        link: '/',
                        dropdown: [
                            { title: 'Click Me 1' },
                            { title: 'Click Me 2' },
                            { title: 'Click Me 3' },
                            { title: 'Click Me 4' },
                        ],                    },
                    {
                        text: 'Products',
                        icon: 'mdi-cart-variant',
                        link: '/about'
                    },
                    {
                        text: 'Pricing',
                        icon: 'mdi-cash-multiple',
                        link: '/contact'
                    },
                    {
                        text: 'Learn',
                        icon: 'mdi-chair-school',
                        link: '/contact',
                        dropdown: [
                            { title: 'Click Me 1' },
                            { title: 'Click Me 2' },
                            { title: 'Click Me 3' },
                            { title: 'Click Me 4' },
                        ],
                    },
                    {
                        text: 'Contract',
                        icon: 'mdi-file-document-edit',
                        link: '/contact',
                        dropdown: [
                            { title: 'Click Me 1' },
                            { title: 'Click Me 2' },
                            { title: 'Click Me 3' },
                            { title: 'Click Me 4' },
                        ],                    
                    },                    
                    {
                        text: 'Support',
                        icon: 'mdi-email',
                        link: '/contact',
                        dropdown: [
                            { title: 'Support 1' },
                            { title: 'Click Me 2' },
                            { title: 'Click Me 3' },
                            { title: 'Click Me 4' },
                        ],                    },                    
                    {
                        text: 'Login',
                        icon: 'mdi-login',
                        link: '/contact'
                    }
                ],
            }
        }
    }
</script>

<style scoped lang="scss">
    @import '../assets/styles/variables.scss';

    .navbar{
        background-color: $white !important;
        flex: 0 0 0 !important;

        .content{
            display: flex;
            justify-content: space-between;
            align-items: center;
            width: 100%;

            .logo{
                width: 5.562rem;
                height: 2.0625rem;
            }

            .menu{
                display: flex;
                justify-content: space-between;
                width: 90%;

                .right{
                    .list{
                        display: flex;
                    }

                }
                .left{
                    .list{
                        display: flex;
                    }

                }

                .list-item {
                    a {
                        font-weight: 300;
                        font-size: 0.9375rem;
                        line-height: 1.375rem;
                        color: $font-color !important;
                        letter-spacing: 0.0625rem;
                    }

                    .dropdown{
                        background: transparent !important;
                        color: $font-color !important;
                        font-weight: 300;
                        font-size: 0.9375rem;
                        line-height: 1.375rem;
                        text-decoration: none;
                        text-transform: none;
                        border: none !important;
                        outline: none !important;
                        box-shadow: none !important;
                        letter-spacing:  0.0625rem !important;

                        i{
                            color: lighten($color: $font-color, $amount: 50);
                            vertical-align: baseline !important;
                            margin-top: 0.1875rem;
                            margin-left: 0.1875rem;                        
                        }
                    }
                }
            }
        }

        @media (min-width: 960px){

            .content .logo{
                width: 9.162rem;
                height: 2.0625rem;
                margin-left: 5%;

            }

            .content .menu{
                width: 80% !important;
            }
        }
    }

    .drawer{
        a{
            color: $font-color !important;
        }

        i{
            color: $primary-color !important;
        }
        .logo{
            width: 6.562rem;
            height: 2.0625rem;
            margin-left: 1.3125rem;
            margin-top: 2.3125rem;
            margin-bottom: 1rem;
        }

        hr{
            margin-bottom: 2rem;
        }

        .signup{
            margin: 1.65rem;
        }
    }

    .signup{
        background: $primary-color !important;
        border-radius: 1.875rem;
        color: $white;
        font-weight: 500;
        font-size: 0.9375rem;
        line-height: 1.375rem;
        padding: 1rem !important;
        text-transform: none;
        margin: auto;
        margin-left: 1rem;
        margin-right: 0.625rem;

        i{
            color: $white !important;
        }
    }

    @media (min-width: 600px){

    }

    @media (min-width: 960px){

    }

    @media (min-width: 1264px){
        .logo{
            width: 5.562rem;
            height: 2.0625rem;
        }
    }

    @media (min-width: 1904px){

    }
</style>