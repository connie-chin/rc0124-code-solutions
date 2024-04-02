import { FaRegCircle, FaCircle } from 'react-icons/fa';

type Props = {
  onIndicatorDotClick: (index: number) => void;
  currentIndex: number;
  items: string[];
};

export function IndicatorDots({
  onIndicatorDotClick,
  currentIndex,
  items,
}: Props) {
  const map1 = items.map((num, index) => {
    return (
      <button
        key={num + index}
        className={currentIndex === index ? 'highlight' : ''}
        onClick={() => onIndicatorDotClick(index)}>
        {currentIndex === index ? <FaCircle /> : <FaRegCircle />}
      </button>
    );
  });

  return <>{map1}</>;
}
