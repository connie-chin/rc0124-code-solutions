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
  // function forQuoteDisplay() {
  //   if (filteredQuotes.length = 0) {
  //     return 'No items match the filter';
  //   }
  //     else {
  //       return filteredQuotes;
  //     }
  // };
  // const quoteDisplay = forQuoteDisplay();

  return (
    <>
      <div>
        <SearchBar
          onSearchBarChange={(event: ChangeEvent<HTMLInputElement>) =>
            setUserInput(event.target.value)
          }
          value={userInput}
        />
        {/* this where the filtering need to happen, but also it needs to be in communication w the list of items*/}
      </div>
      <div>
        <ListOfItems quotes={filteredQuotes} />
      </div>
    </>
  );
}
