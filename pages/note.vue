<template>
    <v-card max-width="100%" color="#20202a" class="mx-auto">
        <v-list-item>
            <v-list-item-content>
                <v-list-item-title class="headline">Our Changing Planet</v-list-item-title>
            </v-list-item-content>
        </v-list-item>

        <div class="card-body">
            <div class="quill-editor" :content="content" @change="onEditorChange($event)" @blur="onEditorBlur($event)"
                @focus="onEditorFocus($event)" @ready="onEditorReady($event)" v-quill:myQuillEditor="editorOption"></div>
        </div>

        <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn icon>
                <v-icon>mdi-heart</v-icon>
            </v-btn>
            <v-btn icon>
                <v-icon>mdi-share-variant</v-icon>
            </v-btn>
        </v-card-actions>
    </v-card>
</template>

<script>
    export default {
        created: function () {
            this.$store.commit('alterarTitulo',"Notas")
        },
        data() {
            return {
                content: "<p>I am Example</p>",
                editorOption: {
                    // some quill options
                    modules: {
                        toolbar: [
                            ["bold", "italic", "underline", "strike"],
                            ["blockquote", "code-block"],
                            [{ header: 1 }, { header: 2 }],
                            [{ list: "ordered" }, { list: "bullet" }],
                            [{ script: "sub" }, { script: "super" }],
                            [{ indent: "-1" }, { indent: "+1" }],
                            [{ direction: "rtl" }],
                            [{ size: ["small", false, "large", "huge"] }],
                            [{ header: [1, 2, 3, 4, 5, 6, false] }],
                            [{ font: [] }],
                            [{ color: [] }, { background: [] }],
                            [{ align: [] }],
                            ["clean"],
                            ["link", "image", "video"]
                        ]
                    }
                }
            };
        },
        mounted() {
            console.log("app init, my quill insrance object is:", this.myQuillEditor);
            setTimeout(() => {
                this.content = "i am changed";
            }, 3000);
        },
        methods: {
            onEditorBlur(editor) {
                console.log("editor blur!", editor);
            },
            onEditorFocus(editor) {
                console.log("editor focus!", editor);
            },
            onEditorReady(editor) {
                console.log("editor ready!", editor);
            },
            onEditorChange({ editor, html, text }) {
                console.log("editor change!", editor, html, text);
                this.content = html;
            }
        }
    };
</script>

<style scoped>
    .card-body {
        padding: 1.25rem;
        background-color: #23242d;
    }

    .quill-editor,
    .content {
        min-height: 200px;
        max-height: 350px;
        overflow-y: auto;
        background-color: #23242d;
        border: 1px solid #ccc;
        color: #fff;
    }
</style>