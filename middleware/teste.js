import { getAllPokemon, getPokemon, loadPokemon } from '~/services/pokemon'
import { splitUrl } from '~/utils/pokemon'
export default async function ({ isServer ,route, store }) {
    // console.log(route.query.offset)
    // console.log(process)

    const url = route.query ? route.query.offset : " ";          
    const baseUrl = `https://pokeapi.co/api/v2/pokemon?${url}&limit=20`;
    
    const response = await getAllPokemon(baseUrl)
    const result = await loadPokemon(response.results);
    
    store.commit('pokemon/add', {
        result,
        next: splitUrl( response.next ),
        previous: splitUrl( response.previous ),                
    } )
}