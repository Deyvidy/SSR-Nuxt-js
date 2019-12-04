<template>
    <v-app>
        <Header />
        <v-content>
            <v-container>
                <nuxt />
            </v-container>
        </v-content>
        <Footer />
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
    }

    .container {
        margin: 0px !important;
        padding: 0px !important;
        max-width: 100vw !important;
    }
</style>
