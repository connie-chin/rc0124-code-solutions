import { Banner } from './Banner';
import { PrevButton } from './PrevButton';
import { NextButton } from './NextButton';
import { Indicators } from './Indicators';
import { useState } from 'react';
type Props = {
  items: string[];
};

export function RotatingBanner({ items }: Props) {
  const [currentIndex, setCurrentIndex] = useState(0);

  function handleIndicatorClick(index: number) {
    setCurrentIndex(index); //updating state with what was clicked.
  }

  function handlePrevClick() {
    console.log('wuz clicked');
  }

  return (
    <>
      <Banner item={items[currentIndex]} />
      <div>
        <PrevButton onPrevClick={handlePrevClick} />
      </div>
      <div className="numberButtons">
        <Indicators
          items={items}
          onIndicatorClick={handleIndicatorClick} //get the index value from the button value that was clicked, so it knows what to set the state value to
          currentIndex={currentIndex} //which will be highlighted
        />
      </div>
      <div>
        <NextButton />
      </div>
    </>
  );
}
