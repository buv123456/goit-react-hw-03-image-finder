import { ImgItemStyled, ItemStyled } from './ImageGalleryItemStyled';

export function ImageGalleryItem({ image, handleModalOpen }) {
  const { webformatURL, tags, largeImageURL } = image;
  return (
    <ItemStyled>
      <ImgItemStyled
        src={webformatURL}
        alt={tags}
        onClick={() => handleModalOpen(largeImageURL, tags)}
      />
    </ItemStyled>
  );
}
