type Props = {
  quotes: string[];
};

export function ListOfItems({ quotes }: Props) {
  const listedItems = quotes.map((singleQuote, index) => (
    <li key={singleQuote + index}>{singleQuote}</li>
  ));
  return <ul>{listedItems}</ul>;
}
