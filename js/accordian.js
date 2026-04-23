class AccordionItem extends HTMLElement {
  connectedCallback() {
    const title    = this.getAttribute('title') || '';
    const subtitle = this.getAttribute('subtitle') || '';
    const badge    = this.getAttribute('badge') || '';
    const dim      = this.hasAttribute('dim');

    // Grab slotted progress steps before we overwrite innerHTML
    const stepsHTML  = this.querySelector('[slot="steps"]')?.innerHTML  || '';
    const linksHTML  = this.querySelector('[slot="links"]')?.innerHTML  || '';

    const badgePlanned = badge.toLowerCase() === 'planned';

    this.classList.add('accordion-item');
    if (dim) this.style.opacity = '0.5';

    this.innerHTML = `
      <div class="accordion-header" role="button" aria-expanded="false">
        <span class="accordion-arrow">›</span>
        <div class="accordion-title-wrap">
          <div class="accordion-title">${title}</div>
          <div class="accordion-subtitle">${subtitle}</div>
        </div>
        <span class="accordion-badge${badgePlanned ? ' planned' : ''}">${badge}</span>
      </div>
      <div class="accordion-body">
        <div class="accordion-inner">
          <div class="accordion-content">
            <div class="progress-timeline">${stepsHTML}</div>
            ${linksHTML ? `<div class="accordion-links">${linksHTML}</div>` : ''}
          </div>
        </div>
      </div>
    `;

    this.querySelector('.accordion-header').addEventListener('click', () => {
      const isOpen = this.classList.contains('active');

      // Close all siblings in the same accordion-group
      const group = this.closest('[data-accordion-group]');
      if (group) {
        group.querySelectorAll('accordion-item').forEach(i => {
          i.classList.remove('active');
          i.querySelector('.accordion-header')?.setAttribute('aria-expanded', 'false');
        });
      }

      if (!isOpen) {
        this.classList.add('active');
        this.querySelector('.accordion-header').setAttribute('aria-expanded', 'true');
      }
    });
  }
}

customElements.define('accordion-item', AccordionItem);
