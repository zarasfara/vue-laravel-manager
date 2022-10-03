<template>
    <Layout>
        <section class=" w-4/5 mr-2 bg-white rounded-md p-2 px-3 border border-gray-200">
            <div class="breadcrumb-container rounded mb-4">
                <ol class="list-none flex">
                    <li class="text-slate-500 breadcrumb-item">
                        <a href="#">Главная</a>
                        <span class="mx-1">/</span>
                    </li>
                    <li class="text-slate-500 breadcrumb-item">
                        <a href="#">Проекты</a>
                    </li>
                </ol>
            </div>
            <div>
                <button class="text-white p-1 px-2 bg-emerald-400 rounded mb-3">Создать проект</button>
            </div>
            <hr>
            <div class="project-list py-4 bg-white">
                <div class="project-item flex flex-col justify-between my-4">
                    <div class="project-item__heading">
                        <h2 class="text-lg text-emerald-500 cursor-pointer">Название проекта</h2>
                    </div>
                    <div class="project-item__text">
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has
                        been the industry's standard dummy text ever since the 1500s, when an unknown printer took a
                        galley of type and scrambled it to make a type specimen book. It has survived not only five
                        centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
                    </div>
                    <div class="flex">
                        <div class="project-item__bottom mt-2.5 mx-1 ml-0">
                            <a class="text-slate-400 p-2 py-1 text-sm border border-emerald-300 hover:border-emerald-500 hover:text-slate-800 delay-75 transition-all rounded"
                               href="">Ссылки</a>
                        </div>
                        <div class="project-item__bottom mt-2.5 mx-1">
                            <a class="text-slate-400 p-2 py-1 text-sm border border-emerald-300 hover:border-emerald-500 hover:text-slate-800 delay-75 transition-all rounded"
                               href="">Ссылки</a>
                        </div>
                        <div class="project-item__bottom mt-2.5 mx-1">
                            <a class="text-slate-400 p-2 py-1 text-sm border border-emerald-300 hover:border-emerald-500 hover:text-slate-800 delay-75 transition-all rounded"
                               href="">Ссылки</a>
                        </div>
                    </div>
                </div>
                <hr>
                <div class="project-item flex flex-col justify-between my-4">
                    <div class="project-item__heading">
                        <h2 class="text-lg text-emerald-500 cursor-pointer">Название проекта</h2>
                    </div>
                    <div class="project-item__text">
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has
                        been the industry's standard dummy text ever since the 1500s, when an unknown printer took a
                        galley of type and scrambled it to make a type specimen book. It has survived not only five
                        centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
                    </div>
                    <div class="flex">
                        <div class="project-item__bottom mt-2.5 mx-1 ml-0">
                            <a class="text-slate-400 p-2 py-1 text-sm border border-emerald-300 hover:border-emerald-500 hover:text-slate-800 delay-75 transition-all rounded"
                               href="">Ссылки</a>
                        </div>
                        <div class="project-item__bottom mt-2.5 mx-1">
                            <a class="text-slate-400 p-2 py-1 text-sm border border-emerald-300 hover:border-emerald-500 hover:text-slate-800 delay-75 transition-all rounded"
                               href="">Ссылки</a>
                        </div>
                        <div class="project-item__bottom mt-2.5 mx-1">
                            <a class="text-slate-400 p-2 py-1 text-sm border border-emerald-300 hover:border-emerald-500 hover:text-slate-800 delay-75 transition-all rounded"
                               href="">Ссылки</a>
                        </div>
                    </div>
                </div>
                <hr>
                <div class="project-item flex flex-col justify-between my-4">
                    <div class="project-item__heading">
                        <h2 class="text-lg text-emerald-500 cursor-pointer">Название проекта</h2>
                    </div>
                    <div class="project-item__text">
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has
                        been the industry's standard dummy text ever since the 1500s, when an unknown printer took a
                        galley of type and scrambled it to make a type specimen book. It has survived not only five
                        centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
                    </div>
                    <div class="flex">
                        <div class="project-item__bottom mt-2.5 mx-1 ml-0">
                            <a class="text-slate-400 p-2 py-1 text-sm border border-emerald-300 hover:border-emerald-500 hover:text-slate-800 delay-75 transition-all rounded"
                               href="">Ссылки</a>
                        </div>
                        <div class="project-item__bottom mt-2.5 mx-1">
                            <a class="text-slate-400 p-2 py-1 text-sm border border-emerald-300 hover:border-emerald-500 hover:text-slate-800 delay-75 transition-all rounded"
                               href="">Ссылки</a>
                        </div>
                        <div class="project-item__bottom mt-2.5 mx-1">
                            <a class="text-slate-400 p-2 py-1 text-sm border border-emerald-300 hover:border-emerald-500 hover:text-slate-800 delay-75 transition-all rounded"
                               href="">Ссылки</a>
                        </div>
                    </div>
                </div>
            </div>
            <div class="breadcrumbs">
                breadcrumbs
                <!-- TODO Сверстать пагинацию -->
            </div>
        </section>
    </Layout>
</template>

<script>
import Layout from "@/Shared/Layout.vue";
import SideBar from "@/Shared/SideBar.vue";

export default {
    name: "Projects",
    components: {
        Layout,
        SideBar
    }
}
</script>

<style scoped>

</style>
