import { FaRegArrowAltCircleRight } from 'react-icons/fa';

type Props = {
  onNextClick: () => void;
};

export function NextButton({ onNextClick }: Props) {
  return (
    <button onClick={onNextClick}>
      <FaRegArrowAltCircleRight />
    </button>
  );
}
