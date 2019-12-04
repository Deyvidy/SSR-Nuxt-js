import Header from "~/components/Home/Header.vue";
import Footer from "~/components/Home/Footer.vue";

export default {
    components: {
        Header,
        Footer,
    },
    data() {
        return {
            tab: `tab-${this.$moment().date()}`,
            tabs: this.$moment().daysInMonth(),
            click: false
        }
    },
    methods: {
        onLeft({ reset }) {
            this.$q.notify('Left action triggered. Resetting in 1 second.')
            this.finalize(reset)
        },

        onRight({ reset }) {
            this.$q.notify('Right action triggered. Resetting in 1 second.')
            this.finalize(reset)
        },

        finalize(reset) {
            this.timer = setTimeout(() => {
                reset()
            }, 1000)
        }
    },

    beforeDestroy() {
        clearTimeout(this.timer)
    }
}