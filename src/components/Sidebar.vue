<template>
    <aside class="sidebar">
        <div class="soundeye-image">
            <img alt="SoundEye leaping fish emblem" src="@/assets/soundeye_leaping_fish.png" />
        </div>
        <nav id="nav">
            <router-link to="/">Nodes</router-link>
            <router-link to="/players">Players</router-link>
        </nav>
    </aside>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
.sidebar {
    margin-left: columnWidths(1);
}
.soundeye-image {
    img {
        width: columnWidths(2);
    }
}
</style>