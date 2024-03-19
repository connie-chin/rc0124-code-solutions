import { useState } from 'react';
import './ImageContainer.css';
type Props = {
  imageSource: string[];
};
export function ImageContainer({ imageSource }: Props) {
  const [photoIndex, setPhotoIndex] = useState(0); //useState is a function that returns 2 items of an array.
  function handleClick() {
    //checks to see if the index exists,
    if (photoIndex >= imageSource.length - 1) {
      //last image, goes to 0
      setPhotoIndex(0);
    } else {
      //else, it increments by 1
      setPhotoIndex(photoIndex + 1);
    }
  }
  return (
    <div className="d-flex justify-content-center">
      <div className="width-50 ">
        <img
          className="image-fill"
          onClick={handleClick} //attached event handler to the image, ^^
          src={imageSource[photoIndex]}
          alt="space-image"
        />
      </div>
    </div>
  );
}
