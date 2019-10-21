<template>
    <nuxt-link :to="'post/'+ id">
        <article class="post-preview">
            <div class="post-preview-image">
                <img :src="image" :alt="title">
            </div>
            <div class="post-preview-content">
                <h1>{{title}}</h1>
                <p>{{excerpt}}</p>
            </div>
        </article>
    </nuxt-link>
</template>

<script>
    export default {
        props: {
            title: {
                type: String,
                required: true,                
            },
            image: {
                type: String,
                required: true,                
            },
            excerpt: {
                type: String,
                required: true,                
            },
            id: {
                type: String,
                required: true,                
            }

        }
    }
</script>

<style>
    a {
        text-decoration: none;
        color: #fff;
    }

    .post-preview {
        width: 235px;
        padding: 20px;
        border: 1px solid;
        border-radius: 10px;
        margin: 5px;
        position: relative;
        box-shadow: 0 1px 6px 0 rgb(0, 255, 45);
    }

    .post-preview-image img {
        width: 100%;
        height: auto;
        object-fit: cover;
    }

    .post-preview-content  {
        flex: 1;
        position: absolute;
    background: #0000009e;
    top: calc(50%/2);
    }

    .post-preview h1{
        font-size: 14px;
        text-align: center
    }

    .post-preview p {
        font-size: 10px;
        text-align: justify;
        
    }

</style>