<template>
    <div :class="`grid grid--${shade} `">
        <!-- <div :class="`grid__overlay grid__overlay_${overlay}`"></div> -->
        <div
            :class="`grid__column grid__column_${shade}`"
            v-for="(column, index) in columns"
            :key="index"
        ></div>
    </div>
</template>

<script>
export default {
    props: {
        shade: {
            type: String,
            default: "light"
        },
        overlay: {
            type: String,
            default: "transparent"
        }
    },
    computed: {
        columns() {
            return new Array(23)
        }
    }
}
</script>

<style lang="scss" scoped>
.grid {
    display: grid;
    grid-template-columns: repeat(24, 1fr);
    position: fixed;
    height: 100%;
    width: 100%;
    pointer-events: none;
    top: 0;
    left: 0;
    z-index: 3;
    mix-blend-mode: exclusion;

    &__overlay {
        content: "";
        position: absolute;
        top: 0;
        right: 0;
        bottom: 0;
        left: 0;
        display: block;
        background: linear-gradient(
            to bottom,
            hsl(150, 4%, 16%),
            hsl(150, 4%, 16%) 1px,
            transparent 1px,
            transparent
        );
        background-size: 100% baseLine(1);
    }

    &__overlay_secondary {
        background-color: var(--secondary_colour);
        opacity: 0.8;
        mix-blend-mode: multiply;
    }

    &__column {
        border-right: 1px solid #333333;
        opacity: 1;
        pointer-events: none;
        z-index: 1;
    }

    &__column_light {
        border-right: 0.056rem solid var(--quaternary_colour);
        opacity: 0.05;
    }
}
</style>