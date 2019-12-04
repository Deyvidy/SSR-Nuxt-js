<template>
    <v-card
        max-width="500"
        class="mx-auto"
    >
        <v-toolbar
            color="indigo"
            dark
        >
            <v-toolbar-title>Autores</v-toolbar-title>
            <v-spacer></v-spacer>

        </v-toolbar>

        <v-list>
            <v-list-item
                v-for=" (usuario, index) in usuarios"
                :key="usuario.id"
                :to="'/users/'+ usuario.id"
            >
                <v-list-item-content>
                    <v-list-item-title v-text="usuario.name"></v-list-item-title>
                </v-list-item-content>

                <v-list-item-avatar>
                    <v-img :src="items[index].avatar"></v-img>
                </v-list-item-avatar>
            </v-list-item>
        </v-list>
    </v-card>
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
    },
    data () {
        return {
            items: [
                { avatar: 'https://cdn.vuetifyjs.com/images/lists/1.jpg' },
                { avatar: 'https://cdn.vuetifyjs.com/images/lists/2.jpg' },
                { avatar: 'https://cdn.vuetifyjs.com/images/lists/3.jpg' },
                { avatar: 'https://cdn.vuetifyjs.com/images/lists/4.jpg' },
                { avatar: 'https://cdn.vuetifyjs.com/images/lists/1.jpg' },
                { avatar: 'https://cdn.vuetifyjs.com/images/lists/2.jpg' },
                { avatar: 'https://cdn.vuetifyjs.com/images/lists/3.jpg' },
                { avatar: 'https://cdn.vuetifyjs.com/images/lists/4.jpg' },
                { avatar: 'https://cdn.vuetifyjs.com/images/lists/1.jpg' },
                { avatar: 'https://cdn.vuetifyjs.com/images/lists/2.jpg' },
                { avatar: 'https://cdn.vuetifyjs.com/images/lists/3.jpg' },
                { avatar: 'https://cdn.vuetifyjs.com/images/lists/4.jpg' },
            ],
        }
    },
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