/**
 * First we will load all of this project's JavaScript dependencies which
 * includes Vue and other libraries. It is a great starting point when
 * building robust, powerful web applications using Vue and Laravel.
 */

import './bootstrap';

import {createApp, h} from 'vue';
import {createInertiaApp} from '@inertiajs/inertia-vue3';
import {resolvePageComponent} from 'laravel-vite-plugin/inertia-helpers';
import 'material-design-icons-iconfont';
import { InertiaProgress } from '@inertiajs/progress'

const cleanApp = () => {
    document.getElementById('app').removeAttribute('data-page')
}

createInertiaApp({
    resolve: name => resolvePageComponent(`./Pages/${name}.vue`, import.meta.glob('./Pages/**/*.vue')),
    setup({el, App, props, plugin}) {
        createApp({render: () => h(App, props)})
            .use(plugin)
            .mixin({methods: {route: window.route}})
            .mount(el)
    },
}).then(cleanApp)

InertiaProgress.init({
    color:'#34d399'
})

document.addEventListener('inertia:finish', cleanApp)
