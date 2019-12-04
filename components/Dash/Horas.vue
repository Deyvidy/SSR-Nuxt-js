<template>
    <v-card
        class="ml-5 d-none d-sm-flex"
        max-width="60px"
    >
        <v-list>
            <v-list-item-group v-model="model" mandatory color="indigo">
                <v-list-item
                    v-for="(item, i) in items"
                    :key="i"
                >
                    <v-list-item-icon>
                        <v-icon v-text="item.icon"></v-icon>
                    </v-list-item-icon>

                </v-list-item>
            </v-list-item-group>
        </v-list>
    </v-card>

</template>

<script>
export default {
    props: {
        horas: {
            type: Number,
            required: true,                
        }
    },
    data () {
        return {
            items: [
                {
                    icon: 'mdi-wifi',
                    text: 'Wifi',
                },
                {
                    icon: 'mdi-bluetooth',
                    text: 'Bluetooth',
                },
                {
                    icon: 'mdi-chart-donut',
                    text: 'Data Usage',
                },
            ],
            model: 1,
        }
    },
}
</script>

<style scoped>
    #dash-horas {
    
    }

    .display-none {
        display: none
    }

    #dash-horas-iten {
        width: 45px;
        padding: 0 10px;
    }
</style>