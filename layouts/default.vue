<template>
    <v-app>
        <Header />
        <v-content>
            <v-container
                fill-height
                class="py-12"
            >               
                <nuxt />
            </v-container>
        </v-content>
        <!-- <Footer /> -->
    </v-app>
</template>

<script>
    import Header from '~/components/Home/Header.vue'
    import Footer from '~/components/Home/Footer.vue'
    export default {
        components: {
             Header,
            Footer
        },
        computed:{
            theme(){
                return 'light'
            }
        }
    }
</script>

<style>
    * {
        padding: 0px;
        margin: 0px;   
        /* font-family: Cinzel Decorative, sans-serif !important; */
    }
    
    /* .v-content {
        background-color: #03cbc2;
    } */
</style>
