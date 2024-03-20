// import { useState } from 'react';

type Props = {
  imageCap: string;
};

export function ImageCaption({ imageCap }: Props) {
  return (
    <div>
      <h3>{imageCap}</h3>
    </div>
  );
}
