<template>
    <li>
        <div class="container-pokemon">
            <div class="container-imagem">
                <img :src="pokemon.sprites.front_default" :alt="pokemon.name" v-on:load="setLoad(true)"/>                 
                <img v-if="!isLoad"  class="loading-img" src="/img/loading.gif" :alt="pokemon.name"/>
               
                <p>{{pokemon.name}}</p>
            </div>
            <hr />
            <div class="container-detalhes">
                <ul>
                    <li v-for=" stat in pokemon.stats" :key="stat.stat.name">{{stat.stat.name}}: {{stat.base_stat}}</li>
                </ul>
            </div>
            <div class="container-footer">
                <span v-for=" type in pokemon.types" :key="type.type.name">{{type.type.name}}</span>
            </div>
        </div>
    </li>
</template>

<script>
 export default {
    props: {
        pokemon: {
            type: Object,
            required: true,                
        }
    },
    data: function () {
        return {
           isLoad: false
        }
    },
    methods: {
        setLoad (value) {
            this.isLoad = value;
        }
    }
}
</script>

<style scoped>
    .container-pokemon {
        width: 225px;
        display: flex;
        flex-direction: column;
        border: 1px solid  #ffdd56;
        border-radius: 1rem;
        position: relative;
        height: auto;
        margin: 45px 15px;
    }

    .container-imagem {
        height: 5rem;
    }

    .container-imagem img {
        position: absolute;
        border: 1px solid  #ffdd56;
        border-radius: 100%;
        top: -3rem;
        left: 4.1rem;
        background: #ffff;
    }

    .loading-img {
        width: 42%;
    }

    .container-detalhes {
        flex: 1;
    }

    .container-pokemon p {
        margin-top: 3.5rem;
        font-size: 24px;
        font-weight: 700;
        text-transform: capitalize;
        text-align: center;
        color: #fff
    }

    .container-pokemon span {
        text-align: center;
        background: #ffdd57;
        padding: 2px 10px;
        border-radius: 50px;
        color: #4a4a4a;
        margin: 5px 0;
        font-size: 12px;
    }

    hr {
        background: linear-gradient(to right,#a86e3c,#f5ae67);
        width: 70%;
        height: 2px;
        border: none;
        border-radius: 30%;
        margin: 10px auto;
    }

    ul {
        list-style-type: none;
        padding: 0 2rem;
        color: #fff;
        text-transform: capitalize;
        font-size: 14px;
    }

    .container-footer {
        padding: .5rem 2rem;
        border-top: 1px solid #d3d3d3;
        margin-top: 15px;
        display: flex;
        justify-content: space-around;
        flex-wrap: wrap;
    }

</style>