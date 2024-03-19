import './ImageContainer.css';
type Props = {
  imageSource: string;
};

export function ImageContainer({ imageSource }: Props) {
  return (
    <div className="d-flex justify-content-center">
      <div className="width-50 ">
        <img className="image-fill" src={imageSource} alt="space-image" />
      </div>
    </div>
  );
}
