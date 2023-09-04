import { ImageGalleryItem } from 'components/ImageGalleryItem/ImageGalleryItem';

export function ImageGallery({ images, handleModal }) {
  return (
    <ul>
      {images.map(i => (
        <ImageGalleryItem
          image={i}
          key={i.id}
          //   onClick={e => handleModal(e)}
          handleModal={handleModal}
        />
      ))}
    </ul>
  );
}
