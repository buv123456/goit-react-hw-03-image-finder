import { Component } from 'react';
import { nanoid } from 'nanoid';
import { ImageGalleryItem } from 'components/ImageGalleryItem/ImageGalleryItem';
import { ImageGalleryStyled } from './ImageGalleryStyled';
import { Modal } from 'components/Modal/Modal';

export class ImageGallery extends Component {
  state = {
    imageURL: null,
    imageTag: '',
  };

  handleModalOpen = (imageURL, imageTag) => {
    this.setState({ imageURL, imageTag });
    document.body.style.overflow = 'hidden';
  };

  handleModalClose = e => {
    e.stopPropagation();
    if (e.target.name === 'img') return;
    this.setState({ imageURL: null, imageTag: '' });
    document.body.style.overflow = 'auto';
  };

  render() {
    const { images } = this.props;
    const { imageURL, imageTag } = this.state;

    return (
      <div>
        <ImageGalleryStyled>
          {images.map(image => (
            <ImageGalleryItem
              image={image}
              key={nanoid()}
              handleModalOpen={this.handleModalOpen}
            />
          ))}
        </ImageGalleryStyled>

        {imageURL && (
          <Modal
            imageURL={imageURL}
            tag={imageTag}
            onClose={this.handleModalClose}
          />
        )}
      </div>
    );
  }
}
