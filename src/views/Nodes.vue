<template>
    <div>
        <h2>Nodes</h2>
        <tree
            v-if="tree && tree.children.length > 0"
            class="treetest"
            :data="tree"
            node-text="name"
            layoutType="vertical"
            type="tree"
            nodeTextDisplay="all"
        >
        </tree>
        <ul class="nodes">
            <li v-for="(node, index) in nodes" :key="index">
                <router-link :to="`/node/${node.id}`"
                    >Node {{ node.id }}</router-link
                >
            </li>
        </ul>
    </div>
</template>

<script>
import axios from "axios"
import { tree } from "vued3tree"

export default {
    components: {
        tree
    },

    data() {
        return {
            nodes: null,
            tree: {
                name: "#1 Lorem Ipsum Dolor Sit Amet",
                children: []
            }
        }
    },
    mounted() {
        this.getNodes()
    },

    methods: {
        getNodes() {
            axios
                .get("http://onsets.test/api/v1/nodes")
                .then(result => {
                    this.nodes = result.data
                    this.tree.children = this.sortNodes(this.nodes, 1)
                })
                .catch(err => {
                    console.log(err)
                })
        },

        sortNodes(nodes, parent) {
            const children = nodes.filter(element => element.parent == parent)
            const product = []
            children.forEach(element => {
                let child = {}
                child.name =
                    `#${element.id} ` +
                    element.content.replace(/<[^>]*>?/gm, "").substring(0, 20)
                child.children = this.sortNodes(nodes, element.id)
                product.push(child)
            })

            return product
        }
    }
}
</script>

<style lang="scss" scoped>
.treetest {
    min-width: 100%;
    height: 100vh;
    color: white;
    fill: white;
    stroke: none;
}

::v-deep .treeclass .node--internal text {
    text-shadow: none;
    font-family: var(--key_font);
    font-size: typeScale(0);
}

::v-deep .treeclass .nodetree text {
    font-family: var(--key_font);
    font-size: typeScale(0);
}
</style>