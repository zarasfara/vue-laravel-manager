<template>
    <app-header/>
    <div class="lg:container mx-auto flex mt-4">
        <slot/>
    </div>
</template>

<script>
import AppHeader from "../Components/AppHeader";
export default {
    name: "AdminLayout",
    components: {
        AppHeader
    }
}
</script>

<style scoped>

</style>
