import { Banner } from './Banner';
import { PrevButton } from './PrevButton';
import { NextButton } from './NextButton';
import { Indicators } from './Indicators';
type Props = {
  items: string[];
};

export function RotatingBanner({ items }: Props) {
  return (
    <>
      <Banner item={items[0]} />
      <div>
        <PrevButton />
      </div>
      <div className="numberButtons">
        <Indicators />
      </div>
      <div>
        <NextButton />
      </div>
    </>
  );
}
