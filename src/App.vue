<template>
    <div id="app" class="app">
        <header class="masthead">
            <div class="masthead__title">SoundEye</div>
        </header>
        <div class="app__inner">
            <sidebar></sidebar>
            <main class="main">
                <div class="main__inner">
                    <router-view />
                </div>
            </main>
        </div>
        <footer>
            <a href="https://github.com/danieldevine">Site by @coderjerk</a>
        </footer>
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
    min-height: 90vh;
    &__inner {
        margin-right: columnWidths(3);
        padding-top: columnWidths(0.5);
    }
}

header {
    background: var(--secondary_colour);
    font-family: var(--title_font);
    font-weight: 300;
    font-size: typeScale(0);
    padding: columnWidths(0.25) columnWidths(1);
}

.masthead {
    &__title {
        color: var(--quinary_colour);
    }
}

footer {
    font-size: typeScale(-1);
    padding: columnWidths(2) columnWidths(1) columnWidths(0.5);
    display: flex;
    justify-content: flex-end;

    a {
        text-decoration-color: var(--primary_colour);
    }
}
</style>
