<template>
    <div class="container">
        <div v-if="data">
            <ul>
                <CardPokemon 
                    v-for="pokemon in data"
                    :key="pokemon.id"
                    :pokemon="pokemon"
                />
            </ul>
        </div>
        <div v-else>
            <h1 class="loding"> Carregando... </h1>
        </div>

        <div class="paginacao">            
            <nuxt-link v-if="previous" :to="'/pokemon/?offset=' + previous">Previous</nuxt-link>
            <nuxt-link v-if="next" :to="'/pokemon/?offset=' + next">Next</nuxt-link>           
        </div>        

    </div>
</template>

<script>
    import CardPokemon from '~/components/Pokemon/CardPokemon.vue'
    import { getAllPokemon, getPokemon, loadPokemon } from '~/services/pokemon'
    import { splitUrl } from '~/utils/pokemon'
    export default {
        components: {
            CardPokemon
        },
        created: function () {
            this.$store.commit('alterarTitulo',"Pokemons")
        },
        //  computed: {
        //     data () {
        //         return this.$store.state.pokemon.pokemons
        //     },
        //     next () {
        //         return this.$store.state.pokemon.next
        //     },
        //     previous () {
        //         return this.$store.state.pokemon.previous
        //     }
        // },
        // middleware: 'teste',
        watchQuery: true,
        async asyncData ( context ) { 
            const url = context.query;          
            const baseUrl = `https://pokeapi.co/api/v2/pokemon?${url.offset}&limit=20`;
            const response = await getAllPokemon(baseUrl)
            const result = await loadPokemon(response.results);

            // context.store.commit('pokemon/add', {
            //     result,
            //     next: splitUrl( response.next ),
            //     previous: splitUrl( response.previous ),                
            // } )
           
            return {
                data: result,
                next: splitUrl( response.next ),
                previous: splitUrl( response.previous ),
            };
        },
    }
</script>

<style scoped>
    .container {
        padding: 45px 0;
    }
    h1 {
        color: #000;
        font-size: 3rem;
        text-align: center;
    }
    .loding  {
        color: red;
    }
    ul {
        list-style-type: none;
        display: flex;
        justify-content: center;
        flex-direction: row;
        flex-flow: wrap;
    }
    .paginacao {
        display: flex;
        justify-content: center;
        align-items: center;
    }
    .paginacao a {
        margin: 0 15px;
        text-decoration: none;
        padding: 5px 30px;
        border-radius: 50px;
        background: #000;
        color: #fff;
    } 
</style>