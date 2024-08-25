
document.addEventListener('scroll', function() {
    const header = document.querySelector('header');
    if (window.scrollY > 50) { // Cambia el valor según cuando quieras que el fondo cambie
        header.classList.remove('header-transparent');
        header.classList.add('header-black');
    } else {
        header.classList.remove('header-black');
        header.classList.add('header-transparent');
    }
});

