<template>
    <div>
        <editor-menu-bar :editor="editor">
            <div class="menubar" slot-scope="{ commands, isActive }">
                <button
                    class="menubar__button"
                    :class="{ 'is-active': isActive.bold() }"
                    @click="commands.bold"
                >
                    <i class="material-icons">format_bold</i>
                </button>

                <button
                    class="menubar__button"
                    :class="{ 'is-active': isActive.italic() }"
                    @click="commands.italic"
                >
                    <i class="material-icons">format_italic</i>
                </button>

                <button
                    class="menubar__button"
                    :class="{ 'is-active': isActive.strike() }"
                    @click="commands.strike"
                >
                    <i class="material-icons">strikethrough_s</i>
                </button>

                <button
                    class="menubar__button"
                    :class="{ 'is-active': isActive.underline() }"
                    @click="commands.underline"
                >
                    <i class="material-icons">format_underline</i>
                </button>

                <button
                    class="menubar__button"
                    :class="{ 'is-active': isActive.heading({ level: 5 }) }"
                    @click="commands.heading({ level: 5 })"
                >
                    <i class="material-icons">title</i>
                </button>

                <button
                    class="menubar__button"
                    :class="{ 'is-active': isActive.paragraph() }"
                    @click="commands.paragraph"
                >
                    <i class="material-icons">text_fields</i>
                </button>

                <button class="menubar__button" @click="commands.undo">
                    <i class="material-icons">undo</i>
                </button>

                <button class="menubar__button" @click="commands.redo">
                    <i class="material-icons">redo</i>
                </button>
            </div>
        </editor-menu-bar>
        <editor-content class="editor" :editor="editor" />
        <div>
            <a class="button" @click.prevent="submitNode" href="#">Save</a>
        </div>
    </div>
</template>

<script>
import axios from "axios"

// Import the editor
import { Editor, EditorContent, EditorMenuBar } from "tiptap"
import {
    Blockquote,
    Heading,
    Bold,
    Italic,
    Strike,
    Underline,
    History
} from "tiptap-extensions"

export default {
    props: {
        nodeContent: {
            type: String,
            default: "<p>This is just a boring paragraph</p>"
        }
    },
    components: {
        EditorContent,
        EditorMenuBar
    },
    data() {
        return {
            editor: new Editor({
                extensions: [
                    new Blockquote(),
                    new Heading({ levels: [1, 2, 3] }),
                    new Bold(),
                    new Italic(),
                    new Strike(),
                    new Underline(),
                    new History()
                ],
                content: this.nodeContent,
                onUpdate: ({ getHTML }) => {
                    this.html = getHTML()
                }
            }),
            html: ""
        }
    },

    beforeDestroy() {
        this.editor.destroy()
    },

    methods: {
        submitNode() {
            axios
                .post(`http://onsets.test/api/v1/node/`, {
                    content: this.html,
                    parent: this.$route.params.id
                })
                .then(result => {
                    console.log(result.data)
                    this.$emit("reset-node", result.data.id)
                    this.$router.push({
                        name: "Node",
                        params: { id: result.data.id }
                    })
                })
                .catch(err => {
                    console.error(err)
                })
        }
    }
}
</script>
<style lang="scss" scoped>
button.is-active {
    background: var(--primary_colour);
}

.menubar {
    margin-bottom: baseLine(1);
}

.editor {
    background: var(--quaternary_colour);
    padding: 1rem;
    min-height: baseLine(12);
    color: var(--secondary_colour);
}
</style>