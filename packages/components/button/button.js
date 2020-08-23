import { component, html } from 'https://cdn.skypack.dev/haunted';

/**
 * This is the first component which will initially serve as a test component to play 
 * around with approaches to building a web component with tests and a React wrapper.
 * It'll also be used to test accessibility, SSR and IE11 support with haunted.
 */
export const button = () => {
  return html`
    <style>
      :host {
        display: block;
      }
    </style>
    <button type="button">
      <slot></slot>
    </button>
  `;
};

customElements.define('x-button', component(button, { useShadowDOM: true));
