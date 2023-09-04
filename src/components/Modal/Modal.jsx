import basicLightbox from 'basiclightbox';
import { Component } from 'react';

export class Modal extends Component {
  instance = null;

  open(imageURL) {
    if (this.instance) {
      this.instance.close();
    }

    this.instance = basicLightbox.create(`
   	<div class="overlay">
      <div class="modal">
        <img src="" alt="" />
      </div>
    </div>
    `);

    this.instance.show();
  }

  close() {
    if (this.instance) {
      this.instance.close();
    }
  }
}
