<template>
    <div class="home">
        <img
            alt="SoundEye leaping fish emblem"
            src="../assets/soundeye_leaping_fish.png"
        />
        <Players></Players>
    </div>
</template>

<script>
// @ is an alias to /src
import Players from "@/components/Players.vue";

export default {
    name: "Home",
    components: {
        Players
    }
};
</script>
