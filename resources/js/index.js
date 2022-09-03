document.addEventListener('DOMContentLoaded', function () {
    const filterModal = document.getElementById('filter-more');

    const filterSwitcher = document.getElementById('filter-switcher');

    filterSwitcher.addEventListener('click', function () {
        filterModal.classList.toggle('hidden')
        filterModal.classList.toggle('scale-up-center')
    })
});
