<template>
    <div>
        <h2>Nodes</h2>
        <div class="nodes">
            <div class="node">
                <div v-for="(node, index) in nodes" :key="index">
                    <p v-html="node.content"></p>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import axios from "axios"

export default {
    data() {
        return {
            nodes: null
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
                })
                .catch(err => {
                    console.log(err)
                })
        }
    }
}
</script>

<style lang="scss" scoped>
</style>