export function ImageGalleryItem({ image, handleModal }) {
  const { webformatURL, tags, largeImageURL } = image;
  return (
    <li>
      <img
        src={webformatURL}
        alt={tags}
        onClick={() => handleModal(largeImageURL)}
      />
    </li>
  );
}
