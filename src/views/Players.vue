<template>
    <section class="players">
        <h2>Players</h2>
        <div class="players__players">
            <div v-for="(player, index) in players" :key="index">
                <div>{{ player.first_name }} {{ player.last_name }}</div>
            </div>
        </div>
    </section>
</template>

<script>
import axios from "axios"
export default {
    data() {
        return {
            players: null
        }
    },
    mounted() {
        this.getPlayers()
    },

    methods: {
        getPlayers() {
            axios
                .get("http://onsets.test/api/v1/players")
                .then(result => {
                    this.players = result.data
                })
                .catch(err => {
                    console.log(err)
                })
        }
    }
}
</script>

<style lang="scss" scoped>
.players {
    &__players {
        @include gridBlock(4);
        grid-gap: 0;
    }
}
</style>