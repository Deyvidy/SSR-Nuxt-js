<template>
    <div>
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
    },
    created: function () {
        this.$store.commit('alterarTitulo',"Autores")
    }
}
</script>

<style scoped>
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
        color: #000;
    }
</style>