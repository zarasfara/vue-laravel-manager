<template>
    <header>
        <nav class="bg-white/70 border-gray-200 px-4 lg:px-6 sm:py-2.5 md:py-2.5">
            <div class="flex flex-wrap justify-between items-center mx-auto max-w-screen-2xl">
                <a href="https://flowbite.com" class="flex items-center">
                    <img src="https://flowbite.com/docs/images/logo.svg" class="mr-3 h-6 sm:h-9" alt="Flowbite Logo"/>
                    <span class="self-center text-xl font-semibold whitespace-nowrap">CRM</span>
                </a>
                <!--modal start-->
                <div class="modal">
                    <button data-collapse-toggle="mobile-menu-2" type="button"
                            class="inline-flex items-center p-2 ml-1 text-sm text-gray-500 rounded-lg desktop:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200"
                            aria-controls="mobile-menu-2" aria-expanded="false">
                        <span class="sr-only">Open main menu</span>
                        <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                            <path fill-rule="evenodd"
                                  d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                                  clip-rule="evenodd"></path>
                        </svg>
                        <svg class="hidden w-6 h-6" fill="currentColor" viewBox="0 0 20 20"
                             xmlns="http://www.w3.org/2000/svg">
                            <path fill-rule="evenodd"
                                  d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                                  clip-rule="evenodd"></path>
                        </svg>
                    </button>
                </div>
                <!--modal end-->
                <div class="hidden justify-between items-center w-full desktop:flex desktop:w-auto lg:order-1"
                     id="mobile-menu-2">
                    <ul class="flex flex-col mt-4 font-medium desktop:flex-row lg:space-x-8 lg:mt-0">
                        <li>
                            <Link :href="route('home')" :class="{'desktop:text-primary-500': $page.url==='/'}"
                                  class="text-gray-400 block py-2 pr-4 pl-3 rounded desktop:bg-transparent lg:p-0 hover:text-primary-600">
                                Главная
                            </Link>
                        </li>
                        <li>
                            <Link :href="route('projects')"
                                  :class="{'desktop:text-primary-500': $page.component==='Projects'}"
                                  class="block py-2 pr-4 pl-3 text-gray-400 border-gray-100 desktop:hover:bg-transparent desktop:border-0 hover:text-primary-600 lg:p-0">
                                Проекты
                            </Link>
                        </li>
                        <li>
                            <Link :class="{'desktop:text-primary-500': $page.component==='Users'}"
                                  class="block py-2 pr-4 pl-3 text-gray-400 border-gray-100 lg:hover:bg-transparent lg:border-0 hover:text-primary-600 lg:p-0"
                                  :href="route('users')">
                                Пользователи
                            </Link>
                        </li>

                        <li>
                            <Link :class="{'desktop:text-primary-500': $page.component==='DashBoard'}"
                                  class="block py-2 pr-4 pl-3 text-gray-400 border-gray-100 lg:hover:bg-transparent lg:border-0 hover:text-primary-600 lg:p-0"
                                  :href="route('dashboard')">
                                Личный кабинет
                            </Link>
                        </li>

                        <li v-if="user && user.role_id === 1">
                            <Link :class="{'desktop:text-primary-500': $page.url.startsWith('/admin')}"
                                  :href="route('admin.home')"
                                  class="block py-2 pr-4 pl-3 text-gray-400 border-gray-100 lg:hover:bg-transparent lg:border-0 desktop:hover:text-primary-600 lg:p-0">
                                Панель администратора
                            </Link>
                        </li>
                        <li v-if="user">
                            <Link method="get" as="button" type="button" :href="route('logout')"
                                  class="block py-2 pr-4 pl-3 rounded bg-primary-700 desktop:bg-transparent text-gray-400 lg:p-0 desktop:hover:text-primary-600"
                                  aria-current="page">Выход
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    </header>
</template>

<script>
import {computed} from 'vue'
import {usePage} from '@inertiajs/inertia-vue3'
import {Link} from '@inertiajs/inertia-vue3'

export default {
    name: "AppHeader",
    setup() {
        const user = computed(() => usePage().props.value.auth.user)
        return {user}
    },
    components: {
        Link
    }
}


</script>

<style scoped>

</style>
