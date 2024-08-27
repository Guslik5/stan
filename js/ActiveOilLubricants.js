document.addEventListener('DOMContentLoaded', function() {
    const checkbox = document.getElementById('checkboxOil');
    const oilsContent = document.getElementById('oils');
    const lubricantsContent = document.getElementById('lubricants');

    function toggleContent() {
        if (checkbox.checked) {
            oilsContent.classList.add('hidden');
            lubricantsContent.classList.remove('hidden');
            lubricantsContent.classList.add('grid');
            oilsContent.classList.remove('grid');
        } else {
            oilsContent.classList.remove('hidden');
            lubricantsContent.classList.add('hidden');
            oilsContent.classList.add('grid');
            lubricantsContent.classList.remove('grid');
        }
    }

    toggleContent();

    checkbox.addEventListener('change', toggleContent);
});