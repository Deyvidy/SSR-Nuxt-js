<template>
    <div class="container">
        <h1>{{usuario.name}}</h1>
    </div>
</template>

<script>
import axios from 'axios'
export default {
    async asyncData (context) {
        try {
            const {data} = await axios.get(`https://jsonplaceholder.typicode.com/users/${context.params.id}`)
            return {usuario:data}                
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
</style>