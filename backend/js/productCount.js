document.addEventListener('DOMContentLoaded', function() {
    const checkbox = document.getElementById('count-product');
    const content = document.getElementById('content');

    function toggleContent() {
        if (checkbox.checked) {
            content.classList.remove('hidden');
        } else {
            content.classList.add('hidden')
        }
    }

    toggleContent();

    checkbox.addEventListener('change', toggleContent);
});
