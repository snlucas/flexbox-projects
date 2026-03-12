export class ColorBar extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: "open" });
    }

    static get observedAttributes() {
        return ['height', 'color'];
    }

    attributeChangedCallback(name, oldValue, newValue) {
        if (oldValue === newValue) return;
        this.render();
    }

    connectedCallback() {
        this.render();
    }

    render() {
        const height = this.getAttribute('height') || 50;
        const color = this.getAttribute('color') || 'gray';

        this.shadowRoot.innerHTML = `
            <style>
                :host {
                    display: block;
                    flex: 1;
                    width: clamp(30px, 10vh, 100px);
                    height: ${height}px;
                    transition: all 0.3 ease;
                    border: 1px solid black;
                    border-bottom-left-radius: 30px;
                    border-bottom-right-radius: 30px;
                }
            </style>
        `;
    }
}

customElements.define('color-bar', ColorBar);