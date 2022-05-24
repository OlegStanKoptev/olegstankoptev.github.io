document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    console.log('found a with href to id...');
    anchor.addEventListener('click', function (e) {
        console.log('intercepting default action...');
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
})