

export const state = () => ({
    pokemons: [],
    isLoad: false,
    next: "",
    previous: "",
})
  
export const mutations = {
    add (state, pokemon ) {
        state.pokemons = pokemon.result
        state.isLoad = true
        state.next = pokemon.next
        state.previous = pokemon.previous
    }
}
