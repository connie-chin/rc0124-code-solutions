type Props = {
  imageText: string;
};

export function ImageCaption({ imageText }: Props) {
  return (
    <div>
      <h3>{imageText}</h3>
    </div>
  );
}
