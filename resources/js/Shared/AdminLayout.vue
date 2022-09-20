<template>
    <app-header/>
    <slot/>
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
