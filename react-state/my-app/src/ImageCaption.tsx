import { useState } from 'react';

type Props = {
  imageText: string[];
};
export function ImageCap({ imageText }: Props) {
  const [captionIndex, setCaptionIndex] = useState(0);
  function handleClick() {
    if (captionIndex >= imageText.length - 1) {
      setCaptionIndex(0);
    } else {
      setCaptionIndex(captionIndex + 1);
    }
  }
  return (
    <div>
      <h3 onClick={handleClick}>{imageText[captionIndex]}</h3>
    </div>
  );
}
