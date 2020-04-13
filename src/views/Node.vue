<template>
    <div class="node" v-if="node">
        <div class="node__content">
            {{ node.content }}
        </div>
        <div class="node__player__name">
            -
            <em>{{ node.player.first_name }} {{ node.player.last_name }}</em>
        </div>
    </div>
</template>

<script>
import axios from "axios"

export default {
    data() {
        return {
            node: null
        }
    },
    mounted() {
        this.getNode()
    },

    methods: {
        getNode() {
            const endpoint = `http://onsets.test/api/v1/node/${this.$route.params.id}`
            axios
                .get(endpoint)
                .then(result => {
                    this.node = result.data
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