import { component, html } from 'https://cdn.skypack.dev/haunted';

/**
 * This is the first component which will initially serve as a test component to refine an approach
 * to building web components (with tests and React wrappers included).
 * It'll be used to test accessibility and SSR/IE11 support for haunted (https://github.com/matthewp/haunted).
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

customElements.define('ptr-button', component(button, { useShadowDOM: true));
