<template>
    <!-- <v-card-text>{{ index }}</v-card-text> -->

    <v-card
        color="#f3f3fd"
    >
        <v-tabs vertical
            v-model="horas"
            background-color="#36d6d0"
            hide-slider
        >
             <v-tab
                v-for="i in tabs"
                :key="i"
                :href="`#tab-${i}`"
            >
                {{ i }}H
            </v-tab>


                <v-tab-item
                    v-for="(i) in tabs"
                    :key="i"
                    :value="'tab-' + i"
                >
                    <v-card
                        flat
                        tile
                    >
                        <v-card-text>
                            <p>
                            Sed aliquam ultrices mauris. Donec posuere vulputate arcu. Morbi ac felis. Etiam feugiat lorem non metus. Sed a libero.
                            </p>

                            <p>
                            Nam ipsum risus, rutrum vitae, vestibulum eu, molestie vel, lacus. Aenean tellus metus, bibendum sed, posuere ac, mattis non, nunc. Aliquam lobortis. Aliquam lobortis. Suspendisse non nisl sit amet velit hendrerit rutrum.
                            </p>

                            <p class="mb-0">
                            Phasellus dolor. Fusce neque. Fusce fermentum odio nec arcu. Pellentesque libero tortor, tincidunt et, tincidunt eget, semper nec, quam. Phasellus blandit leo ut odio.
                            </p>
                        </v-card-text>
                        
                    </v-card>
                </v-tab-item>

        </v-tabs>
    </v-card>
</template>

<script>
export default {
    props: {
        index: {
            type: Number,
            required: false,                
        }
    },
    data () {
        return {
            horas: `tab-${this.$moment().hour()}`,
            tabs: 24,
        }
    },
}
</script>

<style scoped>
    .v-slide-group__wrapper {
        width: 90px !important;
    }
    .v-slide-group__content {
        min-width: 90px !important;
    }
    a.v-tab {
        min-width: 85px;
        max-width: 100px;
        font-weight: bold;
        color: #fff !important;
    }
    .v-tab.v-tab--active {
        color: #000 !important;
        background: #fff !important;
        opacity: 1;
        max-width: 60px !important;
        border-radius: 100%;
        min-width: 40px;
        height: 50px;
        display: flex;
        align-self: center;
    }
</style>