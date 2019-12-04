import Horas from '~/components/Dash/Horas.vue'
import Dias from '~/components/Dash/Dias.vue';
export default {
    layout: 'dash',
    components: {
        Horas,
        Dias
    },
    data(){
        return{
            tab: `tab-${this.$moment().date()}`,
            tabs: this.$moment().daysInMonth(),
            horas: `tab-${this.$moment().hour()}`,
            times: 24,
            drawer: true,
        }
    },
}