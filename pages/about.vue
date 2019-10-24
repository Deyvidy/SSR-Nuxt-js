<template>
    <div>
        <h2 class="subtitle">
            Um simples teste de SSR com Veu e Nuxt 
        </h2>
        <Counter />
    </div>
</template>

<script>
    import Counter from '~/components/Teste/Counter.vue'
    export default {
        components: {
            Counter
        },
        created: function () {
            this.$store.commit('alterarTitulo',"Sobre")
        }
    }
</script>