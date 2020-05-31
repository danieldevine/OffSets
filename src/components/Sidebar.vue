<template>
    <aside class="sidebar">
        <div class="sidebar__inner">
            <h1>
                <span>off</span>
                <span>sets</span>
            </h1>
            <div class="soundeye-image">
                <img
                    alt="SoundEye leaping fish emblem"
                    src="@/assets/soundeye_leaping_fish_inverse.png"
                />
            </div>
            <nav id="nav">
                <ul>
                    <li>
                        <router-link to="/">Nodes</router-link>
                    </li>
                    <li>
                        <router-link to="/rules">The Rules</router-link>
                    </li>
                    <li>
                        <router-link to="/players">Players</router-link>
                    </li>
                </ul>
            </nav>
        </div>
    </aside>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
.sidebar {
    padding-top: baseLine(1);
    // background-color: #182333;
    box-shadow: -12px 0px 20px 6px #000000cf;

    @include mobile {
        box-shadow: 1px 9px 20px 0px rgba(2, 2, 2, 0.55);
        padding-top: 0;
    }

    &__inner {
        margin-left: columnWidths(1);
        max-width: columnWidths(2);
        @include mobile {
            display: grid;
            grid-template-columns: 3fr 3fr;
            width: 100%;
            max-width: columnWidths(20);
            margin-left: columnWidths(2);
        }
    }
}
$imageSize: 110px;

.soundeye-image {
    overflow: hidden;
    border-radius: 100px;
    width: $imageSize;
    height: $imageSize;
    img {
        width: 100%;
        height: 100%;
        object-fit: cover;
    }

    @include mobile {
        display: none;
    }
}

nav {
    margin-top: baseLine(1);

    ul {
        @include mobile {
            margin-top: 0.5rem;
            display: grid;
            grid-template-columns: repeat(2, 1fr);
        }
    }
    li {
        margin-bottom: 0.5rem;

        a {
            @include titleText;
            text-transform: uppercase;
            @include setFont(0);
        }
    }
}

h1 {
    display: flex;
    color: var(--quinary_colour);
    margin: baseLine(1) 0;
    font-weight: 300;
    span {
        border: 0.026rem var(--quinary_colour) solid;

        &:first-of-type {
            border-right-color: transparent;
            padding: 0 0 0 0.35rem;
        }

        &:last-of-type {
            margin-top: -0.5rem;
            margin-bottom: 0.5rem;
            margin-left: -0.15rem;
            border-left-color: transparent;
            padding: 0 0.25rem 0 0;
        }
    }
}
</style>