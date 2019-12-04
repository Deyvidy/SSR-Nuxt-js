<template>  
    <v-card
        class="ml-2"
        width="100%"
        height="100vh"
        color="#fff"
        elevation="6"
        id="card-dash"
    >
        <v-slide-group show-arrows center-active class="pt-12">
            <v-slide-item
                v-for="n in tabs"
                :key="n"
                v-slot:default="{ active, toggle }"
            >
                <v-btn
                    class="mx-3"
                    :input-value="active"
                    :color="active ? '#3e45cd' : '#eaecff'"
                    depressed
                    rounded
                    @click="toggle"
                    to="/dash/#4"
                >
                    {{n}}
                    <br/>
                    {{ $moment().date(n).format('ddd') }}
                </v-btn>
            </v-slide-item>
        </v-slide-group>        
        
    </v-card>
</template>

<script>
export default {
    props: {
        tabs: {
            type: Number,
            required: false,                
        }
    },
     data () {
        return {
            drawer: true,
        }
    },
}
</script>

<style>

</style>