<template>
    <div>
        <h1 class="title"> teste </h1>
        <h2 class="subtitle"> My impressive Nuxt.js project </h2>
        <v-lazy
            v-model="isActive"
            :options="{
                threshold: .5
            }"
            min-height="200"
            transition="fade-transition"
        >
            <v-container fluid>
                <v-row dense>                
                    <Preview 
                        v-for="article in articles"
                        :key="article.id"
                        :title="article.title"
                        :image="image"
                        :excerpt="article.body"
                        :id="article.id.toString()"
                    />
                </v-row>
            </v-container>

        </v-lazy>
    </div>
</template>

<script>
    import axios from 'axios'
    import Preview from '~/components/Post/Preview.vue'
    export default {
        data: () => ({
            image: 'https://cdn.vuetifyjs.com/images/cards/docks.jpg',
            isActive: false,
        }),
        components: {
            Preview
        },
        created: function () {
            this.$store.commit('alterarTitulo',"Blog")
        },
        async asyncData () {
            const {data} = await axios.get('https://jsonplaceholder.typicode.com/posts')
            return {articles:data}    
        }
    }
</script>