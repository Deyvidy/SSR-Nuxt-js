<template>
    <div>
        <v-app-bar
            color="deep-purple accent-4"
            dark
            :fixed="true"
        >
            <v-app-bar-nav-icon @click.stop="drawer = !drawer"></v-app-bar-nav-icon>

            <v-toolbar-title>Page teste</v-toolbar-title>

            <v-spacer></v-spacer>

            <v-btn icon>
                <v-icon>mdi-magnify</v-icon>
            </v-btn>

            <v-menu
                left
                bottom
            >
                <template v-slot:activator="{ on }">
                    <v-btn icon v-on="on">
                        <v-icon>mdi-dots-vertical</v-icon>
                    </v-btn>
                </template>

                 <v-list>
                    <v-list-item
                        v-for="(item, index) in items"
                        :key="index"
                    >
                        <nuxt-link :to="item.link"> {{ item.title }} </nuxt-link>
                    </v-list-item>
                </v-list>

            </v-menu>
        </v-app-bar>    

        <v-navigation-drawer
            v-model="drawer"
            app                           
            dark
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

            <v-list dense>

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
            </v-list>
        </v-navigation-drawer>       

    </div>
</template>

<script> 
    export default {
        data () {
            return {
                drawer: null,
                items: [
                    { title: 'Home', icon: 'monitor-dashboard ', link: '/' },
                    { title: 'About', icon: 'question-mark-circle-outline', link: '/about' },
                    { title: 'Pokemon', icon: 'monitor-dashboard ', link: '/pokemon' },
                    { title: 'Usuarios', icon: 'question-mark-circle-outline', link: '/users' },
                    { title: 'To do', icon: 'question-mark-circle-outline', link: '/todo' },
                    { title: 'Teste', icon: 'question-mark-circle-outline', link: '/teste' },
                ],
            }
        },
    }
</script>

<style scoped>
a {
    text-decoration: none;
    color: #000;
}
</style>