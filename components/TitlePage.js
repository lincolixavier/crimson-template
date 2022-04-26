class TitlePage extends HTMLElement {
  constructor() {
    super();
  }
  get text() {
    return this.getAttribute('text');
  }

  connectedCallback() {
    this.innerHTML = `<aside>${this.text}</aside>`;
  }
}

customElements.define('title-page', TitlePage);


