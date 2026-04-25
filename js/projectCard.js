class ProjectCard extends HTMLElement {
  connectedCallback() {
    const icon    = this.getAttribute('icon')  || '📁';
    const title   = this.getAttribute('title') || 'Project';
    const link    = this.getAttribute('link')  || '#';
    const label   = this.getAttribute('label') || 'View on GitHub →';
    const dim     = this.hasAttribute('dim');
    const dashed  = this.hasAttribute('dashed');
    const desc    = this.textContent.trim();

    this.classList.add('card');
    if (dim)    this.style.opacity     = '0.5';
    if (dashed) this.style.borderStyle = 'dashed';

    this.innerHTML = `
      <div class="card-icon">${icon}</div>
      <h3>${title}</h3>
      <p>${desc}</p>
      <a href="${link}" class="card-arrow"${link !== '#' ? ' target="_blank"' : ''}>${label}</a>
    `;
  }
}

customElements.define('project-card', ProjectCard);
