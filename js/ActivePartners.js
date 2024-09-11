document.addEventListener('DOMContentLoaded', function() {
    const checkbox = document.getElementById('info_partners');
    const content = document.getElementById('company');
    const arrow = document.getElementById('arrow')

    function toggleContent() {
        if (checkbox.checked) {
            content.classList.remove('hidden');
            arrow.classList.remove('rotateBottom');
            arrow.classList.add('rotateTop')
        } else {

            content.classList.add('hidden')
            arrow.classList.add('rotateBottom');
            arrow.classList.remove('rotateTop')
        }
    }

    toggleContent();

    checkbox.addEventListener('change', toggleContent);
});