document.addEventListener('DOMContentLoaded', function() {
    const checkbox = document.getElementById('checkboxOil');
    const oilsContent = document.getElementById('oils');
    const lubricantsContent = document.getElementById('lubricants');

    function toggleContent() {
        if (checkbox.checked) {
            oilsContent.classList.add('hidden');
            lubricantsContent.classList.remove('hidden');
            lubricantsContent.classList.add('gridLubricants');
            oilsContent.classList.remove('gridOil');
        } else {
            oilsContent.classList.remove('hidden');
            lubricantsContent.classList.add('hidden');
            oilsContent.classList.add('gridOil');
            lubricantsContent.classList.remove('gridLubricants');
        }
    }

    toggleContent();

    checkbox.addEventListener('change', toggleContent);
});