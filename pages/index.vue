<template>
    <div class="container">
        <h1 class="title"> teste </h1>
        <h2 class="subtitle"> My impressive Nuxt.js project </h2>
        <div class="post-container">
            <Preview 
                v-for="article in articles"
                :key="article.id"
                :title="article.title"
                :image="image"
                :excerpt="article.body"
                :id="article.id.toString()"
            />           
        </div>
    </div>
</template>

<script>
    import axios from 'axios'
    import Preview from '~/components/Post/Preview.vue'
    export default {
        data: function () {
            return {
                image: 'https://via.placeholder.com/150/24f355'
            }
        },
        components: {
            Preview
        },
        async asyncData () {
            const {data} = await axios.get('https://jsonplaceholder.typicode.com/posts')
            return {articles:data}    
        }
    }
</script>

<style scoped>
    .container  {
        display: flex;
        flex-direction: column;
        margin: 45px auto;
        margin-bottom: 4rem;
    }
    
   .post-container {
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;    
        width: 100%;
        justify-content: space-between;
    }
</style>