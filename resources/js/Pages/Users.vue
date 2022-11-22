<template>
    <layout>
        <div class="breadcrumb-container rounded mb-4">
            <ol class="list-none flex">
                <li class="text-slate-500 breadcrumb-item">
                    <a href="#">Главная</a>
                    <span class="mx-1">/</span>
                </li>
                <li class="text-slate-500 breadcrumb-item">
                    <a href="#">Пользователи</a>
                    <span class="mx-1">/</span>
                </li>
            </ol>
        </div>
        <hr>
        <div class="users py-2.5">
            <div class="users-list">
                <div class="user-card flex justify-between" :class="{ 'mt-4': index !== 0 }" v-if="users.length !== 0"
                     v-for="(user,index) in users">
                    <div class="flex">
                        <div class="rounded-lg overflow-hidden w-28 h-fit">
                            <img :src="user.avatar" alt="image">
                        </div>
                        <div class="user-data ml-2 inline-block">
                            <h3 class="user_name">{{ user.name }} {{ user.surname }}</h3>
                            <p class="user_email">Почта: <span class="text-emerald-500">{{ user.email }}</span></p>
<!--                            <p class="user_role">Роль: {{ user.roles[0].alias_name }}</p>-->
                            <p>Профиль:
                                <span class="text-emerald-500">
                                    {{ user.nickname }}
                                </span>
                            </p>
                        </div>
                    </div>
                    <div id="user-more-btn" :data-id="user.id" @click="testFnc(user.id)" class="relative h-fit">
                        <i class="material-icons more_vert"></i>

                        <div id="user-more-modal"
                             class="absolute top-0 right-5 rounded bg-gray-50 px-2 border border-emerald-300">
                            <ol>
                                <li class="my-0.5">
                                    action
                                </li>
                                <li>
                                    action2
                                </li>
                            </ol>
                        </div>
                    </div>
                </div>
                <div class="text-red-500" v-else>
                    Нет пользователей
                </div>
            </div>
        </div>
    </layout>
</template>

<script>
import Layout from "@/Shared/Layout.vue";
import { Link } from "@inertiajs/inertia-vue3";

export default {
    name: "Users",
    components: {
        Layout,
        Link,
    },
    methods: {
        testFnc(userId) {
            console.log(userId)
        }
    },
    props: {
        users: Array,
    },

}
</script>

<style scoped>

</style>
