<template>
    <Layout>
        <section class="main-block w-4/5 mr-2 bg-white rounded-md p-2 px-3 border border-gray-200">
            <div class="breadcrumb-container rounded mb-4">
                <ol class="list-none flex">
                    <li class="text-slate-500 breadcrumb-item">
                        <a href="#">Главная</a>
                        <span class="mx-1">/</span>
                    </li>
                    <li class="text-slate-500 breadcrumb-item">
                        <a href="#">Задачи</a>
                    </li>
                </ol>
            </div>
            <div class="statuses-list flex mb-3">
                <div class="p-1 px-2 rounded-md flex items-center cursor-pointer border border-gray-300 relative">
                    <div id="filter-switcher" class="flex items-center" @click="filterSwitch()">
                        <span class="mr-2 select-none">Фильтрация</span>
                        <svg xmlns="http://www.w3.org/2000/svg" height="20" width="20">
                            <path
                                d="M9.5 16q-.208 0-.354-.146T9 15.5v-4.729L4.104 4.812q-.187-.25-.052-.531Q4.188 4 4.5 4h11q.312 0 .448.281.135.281-.052.531L11 10.771V15.5q0 .208-.146.354T10.5 16Zm.5-6.375L13.375 5.5H6.604Zm0 0Z"/>
                        </svg>
                    </div>
                    <form id="filter-more"
                          class="bg-white rounded-md w-fit border border-gray-300 p-2 absolute top-10 scale-up-center w-200px hidden left-0 select-none">
                        <label class="block">
                            <span class="text-gray-700">Статусы</span>
                            <select class="block mt-1 rounded cursor-pointer">
                                <option>Все</option>
                                <option>Новые</option>
                                <option>Birthday</option>
                                <option>Other</option>
                            </select>
                        </label>
                    </form>
                </div>
            </div>
            <hr>
            <div class="projects-list mt-4">
                <div class="projects-item p-2 border-l-2 mt-8 border-gray-300 rounded-l">
                    <div class="projects-item__header flex justify-between">
                        <div class="w-2/5">
                            <p class="font-bold">Название задачи / <a class="text-emerald-500" href="#">Название
                                проекта</a>
                            </p>
                            <div class="task-item__description mt-1.5 flex items-center text-sm">
                                <p class="expiration-date">выполнить до: 20.08.2002</p>
                                <p class="ml-3">Статус: Active</p>
                            </div>
                        </div>
                        <div class="w-2/5">
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eaque ex, excepturi
                            exercitationem, fugiat id molestiae nulla reiciendis sed soluta, tenetur vel vero
                            voluptas voluptates! Debitis error et maiores molestiae veniam.
                        </div>
                    </div>
                    <div id="project-task" class="mt-3">
                        <button id="switcher-active-tasks" class="text-emerald-500 cursor-pointer"
                                @click="switcherActiveTask">Активные задачи -
                            1
                        </button>
                        <div class="projects-tasks__list hidden scale-up-hor-left h-0">

                            <div
                                class="active-task mt-1 ml-1.5 p-1.5 rounded border border-dashed border-rose-300 flex items-center justify-between max-h-7">
                                <div class="flex">
                                    <form class="mr-2" action="">
                                        <input id="default-checkbox" type="checkbox" value=""
                                               class="w-4 h-4 rounded border-gray-300">
                                    </form>
                                    <p>Доделать задачу связаную с чем то</p>
                                </div>
                                <form id="task-change-status" action="">
                                    <select id="underline_select"
                                            class="cursor-pointer w-40 block py-2.5 px-0 w-100 text-sm text-black bg-transparent border-0 appearance-none dark:text-gray-400 dark:border-gray-700 focus:outline-none focus:ring-0 focus:border-gray-200 peer">
                                        <option selected>Choose a country</option>
                                        <option value="US">United States</option>
                                        <option value="CA">Canada</option>
                                        <option value="FR">France</option>
                                        <option value="DE">Germany</option>
                                    </select>
                                </form>
                            </div>
                            <div
                                class="active-task mt-1 ml-1.5 p-1.5 rounded border border-dashed border-rose-300 flex items-center justify-between max-h-7">
                                <div class="flex">
                                    <form class="mr-2" action="">
                                        <input id="default-checkbox" type="checkbox" value=""
                                               class="w-4 h-4 rounded border-gray-300">
                                    </form>
                                    <p>Доделать задачу связаную с чем то</p>
                                </div>
                                <form id="task-change-status" action="">
                                    <select id="underline_select"
                                            class="cursor-pointer w-40 block py-2.5 px-0 w-100 text-sm text-black bg-transparent border-0 appearance-none dark:text-gray-400 dark:border-gray-700 focus:outline-none focus:ring-0 focus:border-gray-200 peer">
                                        <option selected>Choose a country</option>
                                        <option value="US">United States</option>
                                        <option value="CA">Canada</option>
                                        <option value="FR">France</option>
                                        <option value="DE">Germany</option>
                                    </select>
                                </form>
                            </div>
                        </div>
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
                                    <p>!!!Can you send this over to the marketing department qwe qwe query / <a
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
    </Layout>
</template>

<script>
import Layout from "@/Shared/Layout.vue";
import methods from '@/index'

export default {
    name: "Index",
    props: {
        user: Object
    },
    methods: {
        filterSwitch() {
            methods.filterSwitch()
        },
        switcherActiveTask() {
            methods.switcherActiveTask()
        }
    },
    components: {
        Layout,
    }
}
</script>

<style scoped>

</style>
