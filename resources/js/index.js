document.addEventListener('DOMContentLoaded', function () {
    const filterModal = document.getElementById('filter-more');
    const filterSwitcher = document.getElementById('filter-switcher');
    const switcherActiveTask = document.getElementById('switcher-active-tasks');

    filterSwitcher.addEventListener('click', function () {
        filterModal.classList.toggle('hidden')
        filterModal.classList.toggle('scale-up-center')
    })

    switcherActiveTask.addEventListener('click', () => {
        document.querySelector('.projects-tasks__list').classList.toggle('hidden')
    })
});
