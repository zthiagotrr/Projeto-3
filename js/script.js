document.getElementById('ajuda-toggle').addEventListener('click', function() {
    var dropdown = this.nextElementSibling;
    if (dropdown.style.display === 'block') {
        dropdown.style.display = 'none';
    } else {
        dropdown.style.display = 'block';
    }
});
