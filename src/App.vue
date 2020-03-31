<template>
    <div id="app">
        <div id="nav">
            <router-link to="/">Nodes</router-link> |
            <router-link to="/players">Players</router-link>
        </div>
        <router-view />
    </div>
</template>


<style lang="scss">
@import "@/scss/core/_00-resets.scss";
@import "@/scss/core/_01-base.scss";
@import "@/scss/core/_02-headings.scss";
</style>
