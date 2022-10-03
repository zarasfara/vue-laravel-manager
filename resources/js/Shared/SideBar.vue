<template>
    <aside class="md:w-auto sm:order-1 lg:w-1/4 sm:mt-3 md:mt-0">
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
            <div class="lg:flex ">
                <form class="flex items-center sm:flex-wrap lg:flex-nowrap" action="">
                    <input placeholder="Название задачи"
                           class="rounded border border-gray-300 h-8 md:mr-3 placeholder:text-base sm:w-full md:w-auto" type="text">
                    <button class="bg-emerald-400 rounded text-white p-1 px-2 h-8 focus:bg-emerald-500 md:w-auto sm:w-full md:mt-0 sm:mt-1"
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
</template>

<script>
import {computed} from 'vue'
import {usePage} from '@inertiajs/inertia-vue3'

export default {
    name: "side-bar",
    setup() {
        const user = computed(() => usePage().props.value.user)
        return {user}
    },
}
</script>

<style scoped>

</style>
