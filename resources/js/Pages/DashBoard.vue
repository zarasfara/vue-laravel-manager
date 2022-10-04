<template>
    <Layout>
        <form id="user-profile" class="flex">
            <div class="rounded-md overflow-hidden w-fit">
                <img :src="user.avatar" alt="user_image" width="300">
            </div>
            <div class="desktop:ml-4 w-2/5">
                <div class="flex items-center justify-between w-full">
                    <label class="text-slate-600" for="user-name">Имя</label>
                    <input id="user-name"
                           class="h-8 font-sans block py-1 px-3 ring-1 ring-slate-900/10
                            text-slate-500 rounded shadow-sm focus:ring-2 focus:ring-emerald-300"

                           :value="user.name"
                    />
                </div>
                <div class="flex items-center justify-between w-full mt-2">
                    <label class="text-slate-600" for="user-name">Фамилия</label>
                    <input id="user-name"
                           class="h-8 font-sans block py-1 px-3 ring-1 ring-slate-900/10
                            text-slate-500 rounded shadow-sm focus:ring-2 focus:ring-emerald-300"

                           :value="user.surname"
                    />
                </div>
                <div class="flex items-center justify-between w-full mt-2">
                    <label class="text-slate-600" for="user-name">Ник</label>
                    <input id="user-name"
                           class="h-8 font-sans block py-1 px-3 ring-1 ring-slate-900/10
                            text-slate-500 rounded shadow-sm focus:ring-2 focus:ring-emerald-300"

                           :value="user.nickname"
                    />
                </div>

                <div class="flex items-center justify-between w-full mt-2">
                    <label class="text-slate-600" for="user-name">Почта</label>
                    <input id="user-name"
                           class="h-8 font-sans block py-1 px-3 ring-1 ring-slate-900/10
                            text-slate-500 rounded shadow-sm focus:ring-2 focus:ring-emerald-300"

                           :value="user.email"
                    />
                </div>
                <!--                <input type="file" class="block w-full text-sm text-white-->
                <!--                  file:cursor-pointer-->
                <!--                  file:mr-4 file:py-2 file:px-4-->
                <!--                  file:rounded file:border-0-->
                <!--                  file:text-sm file:font-semibold-->
                <!--                  file:bg-emerald-400 file:text-white-->
                <!--                  hover:file:bg-emerald-500-->

                <!--                "/>-->
            </div>
        </form>
    </Layout>
</template>

<script>
import Layout from "@/Shared/Layout.vue";
import {computed} from "vue";
import {usePage} from "@inertiajs/inertia-vue3";

export default {
    name: "DashBoard",
    components: {
        Layout
    },
    setup() {
        const user = computed(() => usePage().props.value.auth.user)
        return {user}
    },

}
</script>

<style scoped>

</style>
