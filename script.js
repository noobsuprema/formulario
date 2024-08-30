document.getElementById('formulario').addEventListener('submit', function(event) {
    const requiredFields = document.querySelectorAll('[required]');
    let valid = true;

    requiredFields.forEach(field => {
        if (!field.value.trim()) {
            valid = false;
        }
    });

    if (!valid) {
        event.preventDefault();
        document.getElementById('error-message').style.display = 'block';
    } else {
        document.getElementById('error-message').style.display = 'none';
    }
});
