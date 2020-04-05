<template>
    <div :class="`grid grid--${shade} `">
        <div :class="`grid__overlay grid__overlay_${overlay}`"></div>
        <div
            :class="`grid__column grid__column_${shade}`"
            v-for="column in columns"
            :key="column.id"
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
    data() {
        return {
            columns: [
                "0",
                "1",
                "2",
                "3",
                "4",
                "5",
                "6",
                "7",
                "8",
                "9",
                "10",
                "11",
                "12",
                "13",
                "14",
                "15",
                "16",
                "17",
                "18",
                "19",
                "20",
                "21",
                "22",
                "23"
            ]
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
        position: absolute;
        left: 0;
        top: 0;
        width: 100%;
        height: 100%;
        z-index: 1;
    }

    &__overlay_primary {
        background: rgb(0, 0, 0);
        opacity: 0.3;
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