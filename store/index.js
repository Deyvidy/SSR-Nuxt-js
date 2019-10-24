export const state = () => ({
    counter: 0,
    titulo: "",
})

export const mutations = {
    increment (state) {
        state.counter++
    },
    alterarTitulo ( state, titulo) {
        state.titulo = titulo;
    }

}


export const actions = {
    async nuxtServerInit ( store , { req } ) {        
        console.log('nuxtServerInit')
    }
}