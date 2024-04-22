document.addEventListener('DOMContentLoaded', function() {
    const catLink = document.getElementById('catLink');
    const heartLink = document.getElementById('heartLink');

    catLink.addEventListener('click', function(e) {
        e.preventDefault();
        window.location.href = 'heartbreak.html';
    });

    heartLink.addEventListener('click', function(e) {
        e.preventDefault();
        window.location.href = 'heartbreak.html';
    });
});
