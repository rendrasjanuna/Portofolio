const hamburger = document.querySelector('.hamburger');
const navlinks = document.querySelector('.nav-links');

hamburger.addEventListener('click', () => {
  navlinks.classList.toggle('active');
});

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function(e) {
                if (this.getAttribute('href') !== '#') {
                    e.preventDefault();
                    document.querySelector(this.getAttribute('href')).scrollIntoView({
                        behavior: 'smooth'
                    });
                }
            });
        });