<template>
    <aside class="sidebar">
        <div class="soundeye-image">
            <img
                alt="SoundEye leaping fish emblem"
                src="@/assets/soundeye_leaping_fish_inverse.png"
            />
        </div>
        <h1>
            <span>off</span>
            <span>sets</span>
        </h1>
        <nav id="nav">
            <ul>
                <li>
                    <router-link to="/">Nodes</router-link>
                </li>
                <li>
                    <router-link to="/players">Players</router-link>
                </li>
            </ul>
        </nav>
    </aside>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
.sidebar {
    margin-left: columnWidths(1);
    padding-top: columnWidths(0.5);
    font-family: var(--title_font);
}
.soundeye-image {
    img {
        width: columnWidths(2);
        mix-blend-mode: multiply;
    }
}

nav {
    li {
        a {
            text-transform: uppercase;
            font-size: typeScale(-1);
        }
    }
}

h1 {
    display: flex;
    color: var(--quinary_colour);
    span {
        &:last-of-type {
            margin-top: -0.5rem;
            margin-left: 0.5rem;
        }
    }
}
</style>