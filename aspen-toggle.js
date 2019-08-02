import { html, PolymerElement } from '@polymer/polymer/polymer-element.js';
import { afterNextRender } from '@polymer/polymer/lib/utils/render-status.js';

import '@polymer/iron-icons';
import '@polymer/iron-icon/iron-icon.js';
import '@aspen-elements/aspen-icons';
import '@polymer/iron-icon';
import '@polymer/iron-icons';
/**
 * `aspen-toggle` This component toggles between two  icons whenever the user taps on it.
 *
 * @summary ShortDescription.
 * @customElement
 * @polymer
 * @extends {Polymer.Element}
 */
class AspenToggle extends PolymerElement {
  static get template() {
    return html`
      <style>
        :host {
          display: block;
          margin: 0px;
        }
        iron-icon {
          --iron-icon-height: 15px;
          --iron-icon-width: 15px;
          color: #505050;
          vertical-align: top;
        }
      </style>
      <iron-icon icon="[[icon]]" on-click="_handleClick"></iron-icon>
    `;
  }

  /**
   * String providing the tag name to register the element under.
   */
  static get is() {
    return 'aspen-toggle';
  }

  /**
   * Object describing property-related metadata used by Polymer features
   */
  static get properties() {
    return {
      /** This flag determines which of the icons selected/deselected are shown"*/
      isSelected: {
        type: Boolean,
        value: false
      },

      /**
       * This string contains the icon to be displayed and is computed
       * based on the isSelected state.
       */
      icon: {
        type: String,
        computed: '_computeIcon(isSelected, selectedIcon, deselectedIcon)'
      },

      /** The icon to be displayed whenever the toggle is selected. */
      selectedIcon: {
        type: String,
        value: ''
      },

      /** The icon to be displayed whenever the toggle is deselected. */
      deselectedIcon: {
        type: String,
        value: ''
      }
    };
  }

  /**
   * Instance of the element is created/upgraded. Use: initializing state,
   * set up event listeners, create shadow dom.
   * @constructor
   */
  constructor() {
    super();
  }

  /**
   * Use for one-time configuration of your component after local DOM is initialized.
   */
  ready() {
    super.ready();

    afterNextRender(this, function() {});
  }

  /**
   * This method determines which icon will be displayed.
   * @param isSelected a flag that indicates whether the toggle is selected or not.
   * @return the icon to be displayed
   */
  _computeIcon(isSelected, selectedIcon, deselectedIcon) {
    return isSelected != null && isSelected == true
      ? selectedIcon
      : deselectedIcon;
  }

  /**
   * This method toggles the icon.
   */
  _handleClick() {
    this.isSelected = !this.isSelected;
  }
}

window.customElements.define('aspen-toggle', AspenToggle);
