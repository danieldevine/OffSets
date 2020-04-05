<template>
    <div id="app" class="app">
        <header>This is a header</header>
        <div class="app__inner">
            <sidebar></sidebar>
            <main class="main">
                <div class="main__inner">
                    <router-view />
                </div>
            </main>
        </div>
        <footer>This is the footer</footer>
        <grid></grid>
    </div>
</template>

<script>
import grid from "@/components/Grid.vue"
import sidebar from "@/components/Sidebar.vue"

export default {
    components: {
        grid,
        sidebar
    }
}
</script>

<style lang="scss">
@import "@/scss/core/_00-resets.scss";
@import "@/scss/core/_01-base.scss";
@import "@/scss/core/_02-headings.scss";

.app {
    &__inner {
        @include gridBlock();
        grid-template-columns: 5fr 19fr;
    }
}

.main {
    &__inner {
        margin-right: columnWidths(2);
    }
}

header {
    background: var(--primary_colour);
    font-family: var(--title_font);
    font-weight: 300;
    font-size: typeScale(-1);
    text-transform: uppercase;
}
</style>
