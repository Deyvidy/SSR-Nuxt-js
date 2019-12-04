<template>
    <v-card
        class="mx-auto"
        width="400"
        outlined
        elevation="6"
    >
        <q-no-ssr>
            <q-list separator>

                <q-slide-item @left="onLeft" @right="onRight">
                    <template v-slot:left>
                        <v-icon> mdi-check </v-icon>
                    </template>
                    <template v-slot:right>
                        <v-icon>mdi-alarm</v-icon>
                    </template>

                    <q-item>
                        <q-item-section avatar  class="ml-2">
                            <v-btn :color="!click ? 'primary': 'warning'" @click="click = !click" fab small dark>
                                <v-icon>mdi-alpha-a</v-icon>
                            </v-btn>
                        </q-item-section>
                        <q-item-section>
                            QIcon “name” property is same as “class” attribute value in Fontawesome docs examples (where they show tags)
                        </q-item-section>
                    </q-item>
                </q-slide-item>

            </q-list>            
        </q-no-ssr>
    </v-card>
</template>

<script src="./index.vue.js">

</script>
<style scoped>
    .swipe-event{
        cursor: grab
    }
    .alternativa {
        width: 100%;
        height: 50px;
        border-radius: 50px;
        background: red;
        padding: 20px 50px
    }
</style>
