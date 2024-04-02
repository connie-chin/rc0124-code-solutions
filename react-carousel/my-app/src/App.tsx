import { Header } from './Header';
import { ImageContainer } from './ImageContainer';
import { ImageCaption } from './ImageCaption';
import { ImageDescription } from './ImageDescription';
import './App.css';
import { useState } from 'react';
import { PrevButton } from './PrevButton';
import { NextButton } from './NextButton';
import { IndicatorDots } from './IndicatorDots';
import { useEffect } from 'react';

const headerText = [
  'React Guy',
  'React Animal',
  'React Girl',
  'React Girl with Mop',
];
const imageSrc = [
  '/itadori.webp',
  '/panda.webp',
  '/kugisaki.webp',
  '/zen-in.webp',
];

const imageCap = [
  'A Beautiful Image of A Guy in Blue',
  'A Cool Panda',
  'A Cool Girl with an Axe',
  'A Cool Girl with Glasses and a Mop',
];

const imageDescrip = [
  'This is a wonderful jumpsuit that is very blue!',
  'This is a picture of a very cool panda, with bracelets of himself!',
  'This is a picture of a very cool girl with attitude and an axe!',
  'This is a picture of a mop with a girl',
];

export function App() {
  const [activeIndex, setActiveIndex] = useState(0);

  function handlePrevClick() {
    setActiveIndex((activeIndex - 1 + imageSrc.length) % imageSrc.length);
  }

  function handleNextClick() {
    setActiveIndex((activeIndex + 1) % imageSrc.length);
  }

  function handleIndicatorDotClick(index: number) {
    setActiveIndex(index);
  }

  useEffect(() => {
    //on page render, this automatically runs
    const time = setTimeout(handleNextClick, 3000); //sets autotimer on page load
    console.log(time);
    return () => clearTimeout(time);
  }, [handleNextClick]); //w this as a dependency, it automatically uses cleartimeout. we dont want it to add onto the timer, want to reset. everytime this changes, it calls line 42
  return (
    <>
      <Header headerText={headerText[activeIndex]} />
      <ImageContainer imageSrc={imageSrc[activeIndex]} />
      <ImageCaption imageCap={imageCap[activeIndex]} />
      <ImageDescription imageDescrip={imageDescrip[activeIndex]} />
      <div className="button-container">
        <PrevButton onPrevClick={handlePrevClick} />
        <IndicatorDots
          items={imageSrc}
          onIndicatorDotClick={handleIndicatorDotClick}
          currentIndex={activeIndex}
        />
        <NextButton onNextClick={handleNextClick} />
      </div>
    </>
  );
}
