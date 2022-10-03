<template>
    <layout>
        <section class="main-block w-4/5 mr-2 bg-white rounded-md p-2 px-3 border border-gray-200">
            <div class="breadcrumb-container rounded mb-4">
                <ol class="list-none flex">
                    <li class="text-slate-500 breadcrumb-item">
                        <a href="#">Пользователи</a>
                        <span class="mx-1">/</span>
                    </li>
                    <li class="text-slate-500 breadcrumb-item">
                        <a href="#">Задачи</a>
                        <span class="mx-1">/</span>
                    </li>
                </ol>
            </div>
            <hr>
            <div class="users py-2.5">
                <div class="users-list">
                    <div class="user-card flex my-3" v-if="users.length !== 0" v-for="user in users">
                        <div class="rounded-lg overflow-hidden w-28 h-auto">
                            <img src="/images/no-image.png" alt="">
                        </div>
                        <div class="user-data ml-2 inline-block">
                            <h3 class="user_name">{{ user.name }} {{ user.surname }}</h3>
                            <p class="user_email">Почта: <span class="text-emerald-500">{{ user.email }}</span></p>
                            <p class="user_role">Роль: {{ user.role.title }}</p>
                            <p>Профиль:
                                <Link class="text-emerald-500" :href="route('user.profile',{user:user})">{{ user.nickname }}</Link>
                            </p>
                        </div>
                    </div>
                    <div class="text-red-500" v-else>
                        Нет пользователей
                    </div>

                </div>
            </div>
        </section>
    </layout>
</template>

<script>
import Layout from "@/Shared/Layout.vue";
import {Link} from "@inertiajs/inertia-vue3";

export default {
    name: "Users",
    components: {
        Layout,
        Link
    },
    props: {
        users: Array,
    },

}
</script>

<style scoped>

</style>
