<template>
    <nuxt-link :to="'post/'+ id">
        <v-col>
            <v-card
                class="mx-auto"
                max-width="300"
            >
                <v-img
                    class="white--text align-end"
                    height="200px"
                    :src="image" :alt="title"
                >
                </v-img>
                
                <v-card-title>{{title}}</v-card-title>

            </v-card>
        </v-col>
    </nuxt-link>
</template>

<script>
    export default {
        props: {
            title: {
                type: String,
                required: true,                
            },
            image: {
                type: String,
                required: true,                
            },
            excerpt: {
                type: String,
                required: true,                
            },
            id: {
                type: String,
                required: true,                
            }

        }
    }
</script>

<style>
    a {
        text-decoration: none;
        color: #fff;
    }

   
</style>