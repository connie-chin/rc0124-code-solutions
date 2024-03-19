import { useState } from 'react';
type Props = {
  imageDescription: string[];
};
export function ImageDescription({ imageDescription }: Props) {
  const [descriptionIndex, setDescriptionIndex] = useState(0);
  function handleClick() {
    if (descriptionIndex >= imageDescription.length - 1) {
      setDescriptionIndex(0);
    } else {
      setDescriptionIndex(descriptionIndex + 1);
    }
  }
  return (
    <div>
      <p onClick={handleClick}>{imageDescription[descriptionIndex]}</p>
    </div>
  );
}
