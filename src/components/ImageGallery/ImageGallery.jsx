import { Component } from 'react';
import { ImageGalleryItem } from 'components/ImageGalleryItem/ImageGalleryItem';
import { ImageGalleryStyled, ModalImgStyled } from './ImageGalleryStyled';
import { Modal } from 'components/Modal/Modal';

export class ImageGallery extends Component {
  state = {
    // showModal: false,
    image: null,
  };

  toggleModal = image => {
    // this.setState(prev => ({
    //   showModal: !prev.showModal,
    //   image,
    // }));
    this.setState({ image });
  };

  render() {
    const { image } = this.state;
    return (
      <div>
        <ImageGalleryStyled>
          {this.props.images.map(img => (
            <ImageGalleryItem
              image={img}
              key={img.id}
              onClick={this.toggleModal}
            />
          ))}
        </ImageGalleryStyled>

        {!!image && (
          <Modal onClose={this.toggleModal}>
            <ModalImgStyled src={image.largeImageURL} alt={image.tag} />
          </Modal>
        )}
      </div>
    );
  }
}
