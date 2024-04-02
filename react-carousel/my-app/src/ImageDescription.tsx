// import { useState } from 'react';

type Props = {
  imageDescrip: string;
};

export function ImageDescription({ imageDescrip }: Props) {
  return (
    <div>
      <p>{imageDescrip}</p>
    </div>
  );
}
