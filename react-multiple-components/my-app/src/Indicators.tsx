type Props = {
  items: string[];
  onIndicatorClick: () => void;
  currentIndex: number;
};
//highlight which its on
//send info of state to parent so it knows which was clicked
export function Indicators({ items, onIndicatorClick, currentIndex }: Props) {
  const map1 = items.map((num, index) => {
    //generate a button for each item in array, when each button is clicked on, it will send its index value to callback function in the parent container
    return (
      <button
        key={index}
        className={currentIndex === index ? 'highlight' : ''}
        onClick={() => onIndicatorClick(index)}>
        {index}
      </button>
    ); //storing value of the individual button we clicked in that function call, closure
  });
  return <>{map1}</>;
}
