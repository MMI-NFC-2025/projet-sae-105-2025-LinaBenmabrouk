document.addEventListener('DOMContentLoaded', () => {
    const toggleButton = document.querySelector('.menu-toggle');
    const nav = document.querySelector('.nav');
    const navLinks = document.querySelectorAll('.nav-link');

    if (!toggleButton || !nav) return;

    toggleButton.addEventListener('click', (e) => {
        e.stopPropagation();
        const isExpanded = toggleButton.getAttribute('aria-expanded') === 'true';
        toggleButton.setAttribute('aria-expanded', String(!isExpanded));
        nav.classList.toggle('active');
    });

    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            nav.classList.remove('active');
            toggleButton.setAttribute('aria-expanded', 'false');
        });
    });

    document.addEventListener('click', (e) => {
        const isClickInsideMenu = nav.contains(e.target);
        const isClickOnButton = toggleButton.contains(e.target);

        if (!isClickInsideMenu && !isClickOnButton) {
            nav.classList.remove('active');
            toggleButton.setAttribute('aria-expanded', 'false');
        }
    });
});
