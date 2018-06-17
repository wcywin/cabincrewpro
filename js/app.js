const support = document.getElementsByClassName('offerings');

document.addEventListener('resize', function() {

    if (window.width <= 1000) {
        support.classList.remove('offerings__icon-box');
    }


});