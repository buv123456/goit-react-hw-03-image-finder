import { ImgItemStyled, ItemStyled } from './ImageGalleryItemStyled';

export function ImageGalleryItem({ image, onClick }) {
  return (
    <ItemStyled>
      <ImgItemStyled
        src={image.webformatURL}
        alt={image.tags}
        onClick={() => onClick(image)}
      />
    </ItemStyled>
  );
}
