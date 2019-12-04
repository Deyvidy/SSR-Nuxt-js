<template>
    <v-card color="#f3f3fd">
        <v-tabs
            background-color="#f3f3fd"
            center-active
            class="elevation-2"
            v-model="tab"
            hide-slider
        >
    <span v-touch:tap="touchHandler">Tap Me</span>
           
  </v-card>
  
</template>

<script>
import Header from "~/components/Home/Header.vue";
import Footer from "~/components/Home/Footer.vue";

export default {
    components: {
        Header,
        Footer,
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
