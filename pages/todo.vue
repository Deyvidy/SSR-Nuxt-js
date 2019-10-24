<template>
    <div class="container">
        <v-text-field
            label="To Do"
                :outlined="true"
            :rounded="true"
            :solo="true"
            @keyup.enter="addTodo"
            placeholder="O que deseja fazer"
        ></v-text-field>
        <ul>
            <li :class="{ done: todo.done } + ' item-to-do'"  v-for="(todo, index) in todos" :key="index">
                <input type="checkbox" :checked="todo.done" @change="toggle(todo)">
                <span :class="{ done: todo.done }">{{ todo.text }}</span>
                <button class="remove-to-do" @click="removeTodo(todo)">Remover</button>
            </li>
        </ul>
    </div>
</template>

<script>
import { mapMutations } from 'vuex'

export default {
    computed: {
        todos () {
            return this.$store.state.todos.list
        }
    },
    methods: {
        addTodo (e) {
            this.$store.commit('todos/add', e.target.value)
            e.target.value = ''
        },
        ...mapMutations({
            toggle: 'todos/toggle'
        }),
        removeTodo(todo) {
            this.$store.commit('todos/remove', todo)
        }
    },
    created: function () {
        this.$store.commit('alterarTitulo',"To do")
    },
}
</script>

<style scoped>
  
    .input-to-do {
        border: 1px solid #fff;
        height: 39px;
        border-radius: 50px;
        padding: 0 15px;
        box-shadow: 0 1px 6px 0 rgba(32,33,36,.28);
    }
    .item-to-do {
        background: #fff;
        margin: 15px 0;
        height: 30px;
        display: flex;
        justify-content: space-between;
        align-items: center;
        border: 1px solid #d3d3d3;
        border-radius: 50px;
        padding: 5px 0 5px 15px;
        box-shadow: 0 1px 6px 0 rgba(32,33,36,.28);
    }
    .container span {
        margin: 0 15px;
    }
    .remove-to-do {
       background: red;
        color: #fff;
        padding: 2px 15px;
        border-radius: 50px;
    }
    ul{
        list-style: none;
    }   
    .done {
        text-decoration: line-through;
    }
    h1 {
        margin: 45px 0;
    }
</style>