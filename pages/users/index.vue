<template>
    <div class="container">
        <h1>Usuarios</h1>
        <ul>
            <li
                v-for="usuario in usuarios" 
                :key="usuario.id"
            >
                <nuxt-link :to="'/users/'+ usuario.id">{{usuario.name}}</nuxt-link>
            </li>
        </ul>
    </div>
</template>

<script>
import axios from 'axios'
export default {
    async asyncData (context) {
        try {
            const {data} = await axios.get(`https://jsonplaceholder.typicode.com/users/`)
            return {usuarios:data}                
        } catch (error) {
            console.log(error)
        }
    }
}
</script>

<style scoped>
    .container  {
        text-align: center;
        display: flex;
        flex-direction: column;
        align-items: center;
        /* margin: 45px auto; */
        justify-content: center;
        margin-bottom: 4rem;
        height: 100vh;
    }
    h1 {
        margin: 15px 0;
    }
    ul {
        list-style-type: none;
    }
    ul li {
        margin: 15px 0;
    }
    ul li a {
        text-decoration: none;
        color: #ffff;
    }
</style>