<template>
    <Layout>
        <div class="container mx-auto flex mt-4">
            <section class=" w-4/5 mr-2 bg-white rounded-md p-2 px-3 border border-gray-200">
                <div class="breadcrumb-container rounded mb-4">
                    <ol class="list-none flex">
                        <li class="text-slate-500 breadcrumb-item">
                            <a href="#">Задачи</a>
                            <span class="mx-1">/</span>
                        </li>
                        <li class="text-slate-500 breadcrumb-item">
                            <a href="#">Проекты</a>
                            <span class="mx-1">/</span>
                        </li>
                    </ol>
                </div>
                <div>
                    <button class="text-white p-1 px-2 bg-emerald-400 rounded mb-3">create project</button>
                </div>
                <hr>
                <div class="project-list mt-8">
                    <div class="project w-100 p-2 flex items-center text-lg">
                        <div class="project__left-side mr-2">
                            <a class="text-emerald-500" href="#">Проект №1</a>
                        </div>
                        <div class="project__right-side">
                            info block
                        </div>
                    </div>
                </div>
            </section>
            <aside class="w-1/4">
                <div
                    class="bg-white mb-3 rounded-md p-2 px-4 flex justify-center flex-col text-base border border-gray-200">
                    <p>Привет, <span class="font-bold">{{ user ? user.name : 'anonymous' }}</span></p>
                    <div class="flex mt-3 w-80">
                        <p>Сессия: Не начата</p>
                        <form class="ml-2 flex items-center" action="">
                            <button type="submit" class="p-0.5 px-2 bg-emerald-400 text-white rounded">Начать</button>
                        </form>
                    </div>
                </div>
                <div class="bg-white rounded-md p-2 pb-8 border border-gray-200">
                    <div class="flex ">
                        <form class="flex items-center" action="">
                            <input placeholder="Название задачи"
                                   class="rounded border border-gray-300 h-8 mr-3 placeholder:text-base" type="text">
                            <button class="bg-emerald-400 rounded text-white p-1 px-2 h-8 focus:bg-emerald-500"
                                    type="submit">
                                Поиск
                            </button>
                        </form>
                    </div>
                    <div>
                        <div class="text-center mt-4">
                            <h3 class="text-lg">Комментарии</h3>
                        </div>
                        <div class="comments-list mt-3">
                            <div class="comments-item">
                                <div class="comments-header">
                                    <div class="text-sm comment-message mr-2 font-bold">
                                        <span class="mr-3">Evgeniy Osipov</span>
                                        <span class="text-gray-400 font-thin">10.23.2233</span>
                                    </div>
                                    <div class="text-sm mt-3 border-b border-gray-300 break-words pb-3">
                                        <p>Can you send this over to the marketing department qwe qwe query / <a
                                            href="#"
                                            class="text-emerald-500 font-bold">task
                                            project</a></p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </aside>
        </div>
    </Layout>
</template>

<script>
import Layout from "../Shared/Layout";
export default {
    name: "Projects",
    props: {
        user:Object
    },
    components:{
        Layout
    }
}
</script>

<style scoped>

</style>
