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
        }
    }
</script>

<style>
    * {
        padding: 0px;
        margin: 0px;   
    }
    
    html, body {
        /* background: linear-gradient(to bottom right,#024,#402); */
        font-family: Cinzel Decorative, sans-serif !important;
    } 

    .button--green {
        display: inline-block;
        border-radius: 4px;
        border: 1px solid #3b8070;
        color: #3b8070;
        text-decoration: none;
        padding: 10px 30px;
    }

    .button--green:hover {
        color: #fff;
        background-color: #3b8070;
    }

    .button--grey {
        display: inline-block;
        border-radius: 4px;
        border: 1px solid #35495e;
        color: #35495e;
        text-decoration: none;
        padding: 10px 30px;
        margin-left: 15px;
    }

    .button--grey:hover {
        color: #fff;
        background-color: #35495e;
    }

    .title {
        margin-top: 45px;
        display: block;
        font-weight: 300;
        font-size: 100px;
        color: #35495e;
        letter-spacing: 1px;
    }

    .subtitle {
        font-weight: 300;
        font-size: 42px;
        color: #526488;
        word-spacing: 5px;
        padding-bottom: 15px;
    }

    .links {
        padding-top: 15px;
    }

</style>
