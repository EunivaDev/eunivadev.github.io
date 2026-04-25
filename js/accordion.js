document.querySelectorAll('[data-accordion]').forEach(item => {
    const header = item.querySelector('.accordion-header');
    header.addEventListener('click', () => {
        const isOpen = item.classList.contains('active');

        // Close all other open accordions
        document.querySelectorAll('[data-accordion]').forEach(i => {
            i.classList.remove('active');
            i.querySelector('.accordion-header').setAttribute('aria-expanded', 'false');
        });

        // Open the clicked one if it was closed
        if (!isOpen) {
            item.classList.add('active');
            header.setAttribute('aria-expanded', 'true');
        }
    });
});