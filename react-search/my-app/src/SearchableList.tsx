import { SearchBar } from './SearchBar';
import { ListOfItems } from './ListOfItems';
type Props = {
  quotes: string[];
};

export function SearchableList({ quotes }: Props) {
  return (
    <>
      <div>
        <SearchBar />{' '}
        {/* this where the filtering need to happen, but also it needs to be in communication w the list of items*/}
      </div>
      <div>
        <ListOfItems quotes={quotes} />
      </div>
    </>
  );
}
