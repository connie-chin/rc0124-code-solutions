import { FaRegArrowAltCircleLeft } from 'react-icons/fa';

type Props = {
  onPrevClick: () => void;
};

export function PrevButton({ onPrevClick }: Props) {
  return (
    <button onClick={onPrevClick}>
      <FaRegArrowAltCircleLeft />
    </button>
  );
}
