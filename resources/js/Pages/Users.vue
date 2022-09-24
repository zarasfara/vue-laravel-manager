<template>
    <layout>
        <section class="main-block w-full mr-2 bg-white rounded-md p-2 px-3 border border-gray-200">
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
                    <div class="user-card flex my-3">
                        <div class="rounded-lg overflow-hidden w-28 h-auto">
                            <img src="/images/no-image.png" alt="">
                        </div>
                        <div class="user-data ml-2 inline-block">
                            <h3 class="user_name">Ф.И.О: Осипов Евгений Вадимович</h3>
                            <a class="user_email " href="oev2001@gmail.com">Почта: <span class="text-emerald-500">oev2001@gmail.com</span></a>
                            <p class="user_role">Роль: huesos</p>
                            <p href="#">Профиль: <a class="text-emerald-500" href="#">zarasfara</a></p>
                        </div>
                    </div>
                    <div class="user-card flex my-3">
                        <div class="rounded-lg overflow-hidden w-28 h-auto">
                            <img src="/images/no-image.png" alt="">
                        </div>
                        <div class="user-data ml-2">
                            <h3 class="user_name">Ф.И.О: Осипов Евгений Вадимович</h3>
                            <a class="user_email " href="oev2001@gmail.com">Почта: <span class="text-emerald-500">oev2001@gmail.com</span></a>
                            <p class="user_role">Роль: huesos</p>
                            <p href="#">Профиль: <a class="text-emerald-500" href="#">zarasfara</a></p>
                        </div>
                    </div>
                    <div class="user-card flex my-3">
                        <div class="rounded-lg overflow-hidden w-28 h-auto">
                            <img src="/images/no-image.png" alt="">
                        </div>
                        <div class="user-data ml-2">
                            <h3 class="user_name">Ф.И.О: Осипов Евгений Вадимович</h3>
                            <a class="user_email " href="oev2001@gmail.com">Почта: <span class="text-emerald-500">oev2001@gmail.com</span></a>
                            <p class="user_role">Роль: huesos</p>
                            <p href="#">Профиль: <a class="text-emerald-500" href="#">zarasfara</a></p>
                        </div>
                    </div>
                </div>
            </div>
        </section>

    </layout>
</template>

<script>
import Layout from "@/Shared/Layout.vue";
export default {
    name: "Users",
    components: {
        Layout
    }
}
</script>

<style scoped>

</style>
