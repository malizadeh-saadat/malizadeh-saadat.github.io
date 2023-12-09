document.addEventListener('DOMContentLoaded', function() {
    const hiringInput = document.getElementById('hiring');
    const rateSection = document.getElementById('rate-section');

    document.querySelectorAll('input[name="inquiry"]').forEach(input => {
        input.addEventListener('change', function() {
            if (hiringInput.checked) {
                rateSection.style.display = 'block';
            } else {
                rateSection.style.display = 'none';
            }
        });
    });
});
