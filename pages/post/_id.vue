<template>
    <div class="container">
        <h1>{{post.title}}</h1>
        <p>{{post.body}}</p>
        <nuxt-link :to="'/users/'+ post.userId"><span>Autor</span></nuxt-link>
    </div>
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
    .container  {
       display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        height: 100vh;
    }
    h1 {
        color: #fff;
        font-size: 1.3rem;
        margin-bottom: 20px;
    }

    p {
        color: #fff;
    }

    a {
        margin-top: 1rem;
        font-size: 12px;
        text-decoration: underline;
    }
</style>