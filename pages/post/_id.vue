<template>
    <v-container
       class="full-height"
    >
        <v-row
            justify="center"
            class="height-100"
            align="center"
        >
            <v-col>
                <v-card
                    max-width="500"
                    class="mx-auto"
                >
                    <v-list-item>
                        <v-list-item-avatar color="grey"></v-list-item-avatar>
                        <v-list-item-content>
                            <v-list-item-title class="headline">{{post.title}}</v-list-item-title>
                            <nuxt-link :to="'/users/'+ post.userId">
                                <v-list-item-subtitle>Autor</v-list-item-subtitle>
                            </nuxt-link>
                        </v-list-item-content>
                    </v-list-item>

                    <v-img
                        src="https://cdn.vuetifyjs.com/images/cards/mountain.jpg"
                        height="194"
                    ></v-img>

                    <v-card-text>
                        {{post.body}}
                    </v-card-text>
                </v-card>
            </v-col>
         </v-row>
    </v-container>

</template>

<script>
import axios from 'axios'
export default {
    data () {
        return {
            id: this.$route.params.id
        }
    },
    async asyncData (context) {
        try {
            const {data} = await axios.get(`https://jsonplaceholder.typicode.com/posts/${context.params.id}`)
            return {post:data}                
        } catch (error) {
            console.log(error)
        }
    }
}
</script>

<style scoped>
    a {
        margin-top: 1rem;
        font-size: 12px;
        text-decoration: underline;
    }
    .full-height {
        height:100vh;
    }
    .mx-auto {
        margin: 0 auto;
    }
    .height-100 {
       height:100%; 
       justify-content: center;
       align-items: center;
    }
</style>