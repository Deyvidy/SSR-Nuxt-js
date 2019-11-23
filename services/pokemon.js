import axios from 'axios'

export function getAllPokemon(url) {
    console.log('aqui')
    return new Promise((resolve, reject) => {
        axios.get(url).then(res => res.data)
            .then(data => {
                resolve(data)
            })
    });
}

export function getPokemon({ url }) {
    return new Promise((resolve, reject) => {
        axios.get(url).then(res => res.data)
            .then(data => {
                resolve(data)
            })
    });
}

export async function loadPokemon (data) {
    let _pokemonData = await Promise.all(data.map(async pokemon => {
        let pokemonRecord = await getPokemon(pokemon)
        return pokemonRecord
    }))
    return _pokemonData;
}