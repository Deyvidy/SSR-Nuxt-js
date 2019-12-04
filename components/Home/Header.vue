<template>
    <div>

        <v-app-bar
            :collapse="collapseOnScroll"
            absolute
            color="#03cbc2"
            dark
            id="menu-dash"
            elevation="3"
            @click.stop="drawer = !drawer"
        >
            <v-app-bar-nav-icon></v-app-bar-nav-icon>

            <!-- <v-spacer></v-spacer> -->
        </v-app-bar>


        <v-navigation-drawer
            v-model="drawer"
            app
            temporary
        >
            <v-list-item>
                <v-list-item-avatar>
                    <v-img src="https://randomuser.me/api/portraits/men/78.jpg"></v-img>
                </v-list-item-avatar>

                <v-list-item-content>
                    <v-list-item-title>John Leider</v-list-item-title>
                </v-list-item-content>
            </v-list-item>

            <v-divider></v-divider>

            <!-- <v-list dense>

                <v-list-item
                    v-for="item in items"
                    :key="item.title"
                    link
                >
                    <v-list-item-icon>
                        <v-icon>{{ item.icon }}</v-icon>
                    </v-list-item-icon>

                    <v-list-item-content>
                        <nuxt-link :to="item.link">{{ item.title }}</nuxt-link>
                    </v-list-item-content>

                </v-list-item>
            </v-list> -->

            <v-list>
                <template v-for="(item, i) in items">
                    <v-divider v-if="item.divider" :key="i"></v-divider>
                    <v-list-item v-else :key="item.title" :to="item.link">
                        <v-list-item-action>
                        <v-icon>{{ item.icon }}</v-icon>
                        </v-list-item-action>
                        <v-list-item-title>{{ item.title }}</v-list-item-title>
                    </v-list-item>
                </template>
            </v-list>


        </v-navigation-drawer>       

    </div>
</template>

<script> 
    export default {
        data () {
            return {
                drawer: null,
                width: 300,
                items: [
                    { icon: 'mdi-post', title: 'Home', link: '/' },
                    { icon: 'mdi-information-variant', title: 'About', link: '/about' },
                    { icon: 'mdi-account', title: 'Usuarios', link: '/users' },
                    { icon: 'mdi-xbox-controller', title: 'Pokemon', link: '/pokemon' },
                    { icon: 'mdi-calendar-check', title: 'Calendario', link: '/controle'  },
                    { divider: true },
                    { icon: 'mdi-note-multiple-outline', title: 'Notas', link: '/note' },
                    { icon: 'mdi-clipboard-list-outline', title: 'To do', link: '/todo' },
                    { title: 'Teste', icon: 'mdi-test-tube-empty', link: '/teste' },
                ],
                collapseOnScroll: true
            }
        },
        methods:{
            goTo(){
                console.log("aqui")
            }
        }
    }
</script>

<style scoped>
    .v-navigation-drawer {
        transition: none !important;
    }
    #menu-dash i{
        color: #fff !important;
    }

    #menu-dash{
        width: 100px
    }

    .v-toolbar.v-toolbar--collapsed {
        border-bottom-right-radius: 50px !important;
    }

    .lightbox {
        box-shadow: 0 0 20px inset rgba(0, 0, 0, 0.2);
        background-image: linear-gradient(to top, rgba(0, 0, 0, 0.4) 0%, transparent 72px);
    }
    .v-btn--fab.v-size--small.v-btn--absolute.v-btn--top  {
        top:10px
    }
</style>