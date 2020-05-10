<template>
    <div class="node" v-if="node">
        <h5>Node {{ node.id }}</h5>
        <p v-if="isEditing == false" class="node__content" v-html="node.content"></p>
        <TextEditor v-if="isEditing == true"></TextEditor>
        <div v-if="isEditing == true">
            <a class="button" @click.prevent="submitNode" href="#">Save</a>
        </div>
        <div class="node__player__name">
            -
            <em>{{ node.player.first_name }} {{ node.player.last_name }}</em>
        </div>
        <div v-if="node.parent && node.parent != node.id" class="node__link">
            <h6>Parent Node</h6>
            <router-link :to="`/node/${node.parent}`">Node {{ node.parent }}</router-link>
        </div>
        <div v-if="children.length >= 1" class="node__link">
            <h6>Child Nodes</h6>
            <div v-for="(child, index) in children" :key="index">
                <router-link :to="`/node/${child.id}`">Node {{ child.id }}</router-link>
            </div>
        </div>
    </div>
</template>

<script>
import axios from "axios"
import TextEditor from "@/components/TextEditor.vue"

export default {
    components: {
        TextEditor
    },
    data() {
        return {
            node: null,
            children: null,
            isEditing: true
        }
    },
    mounted() {
        this.getNode()
    },

    watch: {
        $route() {
            this.getNode()
        }
    },

    methods: {
        getNode() {
            const endpoint = `http://onsets.test/api/v1/node/${this.$route.params.id}`
            axios
                .get(endpoint)
                .then(result => {
                    this.node = result.data
                    this.getChildren()
                })
                .catch(err => {
                    console.log(err)
                })
        },

        getChildren() {
            axios
                .get("http://onsets.test/api/v1/nodes")
                .then(result => {
                    this.nodes = result.data

                    this.children = this.nodes.filter(
                        node => node.parent == this.$route.params.id
                    )
                })
                .catch(err => {
                    console.log(err)
                })
        }
    }
}
</script>

<style lang="scss" scoped>
.node {
    &__player__name {
        margin-top: baseLine(1);
    }

    &__link {
        background: var(--secondary_colour);
        padding: baseLine(1);
        margin-top: baseLine(2);
        @include titleText;
        @include setFont(-1);
    }
}
</style>