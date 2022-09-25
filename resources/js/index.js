const methods = {
    filterSwitch() {
        document.getElementById('filter-more').classList.toggle('hidden')
    },
    switcherActiveTask() {
        document.querySelector('.projects-tasks__list').classList.toggle('hidden')
        document.querySelector('.projects-tasks__list').classList.toggle('h-0')
    }
}

export default methods
