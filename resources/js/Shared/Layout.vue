<template>
    <app-header/>
    <div class="lg:container mx-auto flex mt-4">
        <slot/>
        <side-bar/>
    </div>
</template>

<script>
import AppHeader from "@/Shared/AppHeader.vue";
import SideBar from "@/Shared/SideBar.vue";

export default {
    name: "Layout",
    components: {
        AppHeader,
        SideBar
    }
}
</script>

<style scoped>

</style>
