type Props = {
  quotes: string[];
};

export function ListOfItems({ quotes }: Props) {
  const listedItems = quotes.map((singleQuote, index) => (
    <li key={index}>{singleQuote}</li>
  ));
  return <ul>{listedItems}</ul>;
}
