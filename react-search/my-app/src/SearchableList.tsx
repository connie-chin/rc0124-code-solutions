import { SearchBar } from './SearchBar';
import { ListOfItems } from './ListOfItems';
import { ChangeEvent, useState } from 'react';
type Props = {
  quotes: string[];
};

export function SearchableList({ quotes }: Props) {
  const [userInput, setUserInput] = useState('');

  const filteredQuotes = quotes.filter((quote) =>
    quote.toLowerCase().includes(userInput.toLowerCase())
  );
  function forQuoteDisplay() {
    if (filteredQuotes.length === 0) {
      return ['No items match'];
    } else {
      return filteredQuotes;
    }
  }
  const quoteDisplay = forQuoteDisplay();

  return (
    <>
      <div>
        <SearchBar
          onSearchBarChange={(event: ChangeEvent<HTMLInputElement>) =>
            setUserInput(event.target.value)
          }
          value={userInput}
        />
      </div>
      <div>
        <ListOfItems quotes={quoteDisplay} />
      </div>
    </>
  );
}
