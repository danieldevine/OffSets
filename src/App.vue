<template>
    <div id="app" class="app">
        <div class="app__inner">
            <sidebar></sidebar>
            <main class="main">
                <div class="main__inner">
                    <router-view />
                </div>
            </main>
            <div></div>
        </div>
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
        min-height: 100vh;
        @include gridBlock();
        grid-template-columns: columnWidths(4) columnWidths(16) columnWidths(4);

        @include mobile {
            grid-template-columns: 1fr;
        }
    }
}

.main {
    min-height: 90vh;
    &__inner {
        margin-left: columnWidths(2);
        padding-top: baseLine(2);
        max-width: columnWidths(12);

        @include mobile {
            max-width: columnWidths(20);
        }
    }
}

header {
    background: var(--secondary_colour);
    font-weight: 300;
    font-size: typeScale(0);
    padding: columnWidths(0.25) columnWidths(1);
}

.masthead {
    &__title {
        color: var(--quinary_colour);
    }
}
</style>
