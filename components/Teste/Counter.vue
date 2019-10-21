<template>
    <v-btn class="counter" @click="$store.commit('increment')" small color="primary">
        <p>{{ $store.state.counter }}</p> 
    </v-btn>
</template>

<script>
export default {

}
</script>

<style scoped>
    p {
        color: #000 !important;
        font-size: 24px;
        font-weight: bold;
    }
</style>