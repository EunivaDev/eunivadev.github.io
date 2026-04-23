document.querySelectorAll('[data-accordion]').forEach(item => {
    const header = item.querySelector('.accordion-header');
    header.addEventListener('click', () => {
        const isOpen = item.classList.contains('active');
        // close all
        document.querySelectorAll('[data-accordion]').forEach(i => {
            i.classList.remove('active');
            i.querySelector('.accordion-header').setAttribute('aria-expanded', 'false');
        });
        // open clicked if it was closed
        if (!isOpen) {
            item.classList.add('active');
            header.setAttribute('aria-expanded', 'true');
        }
    });
});
