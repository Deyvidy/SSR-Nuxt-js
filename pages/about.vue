<template>
    <div class="container">
        <div>
            <h1 class="title"> Sobre </h1>
            <h2 class="subtitle">
                Um simples teste de SSR com Veu e Nuxt 
            </h2>
            <Counter />
        </div>
    </div>
</template>

<script>
    import Counter from '~/components/Teste/Counter.vue'
    export default {
        components: {
            Counter
        },
    }
</script>

<style scoped>
    .container  {
        text-align: center;
        display: flex;
        flex-direction: column;
        align-items: center;
        margin: 45px auto;
        margin-bottom: 4rem;
        /* height: 100vh; */
    }
</style>