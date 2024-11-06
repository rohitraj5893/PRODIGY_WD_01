// Adding scroll event to change navbar background color
window.addEventListener('scroll', function() {
    const navbar = document.querySelector('header');
    
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
       
    } else {
        navbar.classList.remove('scrolled');
    }
});
