<template>
    <v-card color="#f3f3fd">
        <v-tabs
            background-color="#f3f3fd"
            center-active
            class="elevation-2"
            v-model="tab"
            hide-slider
        >

            <!-- <v-tabs-slider></v-tabs-slider> -->

                <v-tab
                    v-for="i in tabs"
                    :key="i"
                    :href="`#tab-${i}`"
                >
                    {{ i }} Day
                </v-tab>

                <v-tab-item
                    v-for="(i, index) in tabs"
                    :key="i"
                    :value="'tab-' + i"
                >
                    <v-card
                        flat
                        tile
                        color="#f3f3fd"
                    >
                        <Teste :index="index" />
                        
                    </v-card>
                </v-tab-item>
        </v-tabs>
  </v-card>
  
</template>

<script>
import Header from "~/components/Home/Header.vue";
import Footer from "~/components/Home/Footer.vue";
// import Teste from '~/components/Teste/Teste.vue';

export default {
    components: {
        Header,
        Footer,
        // Teste
        'Teste': () => import('~/components/Teste/Teste.vue')
    },
    data () {
        return {
            tab: `tab-${this.$moment().date()}`,
            tabs: this.$moment().daysInMonth(),
        }
    },
};
</script>
<style scoped>   
    a.v-tab {
        background: #eaecff !important;
        color: #3e45cd !important;
        border-radius: 30%;
        min-width: 50px !important;
        max-width: 50px !important;
        margin-right: 30px;
        font-weight: bold;
    }
    .v-tab.v-tab--active {
        background: #3e45cd !important;
        color: #fff !important;
    }
    .v-slide-group__next, .v-slide-group__prev{
        display: none !important;
    }

</style>
