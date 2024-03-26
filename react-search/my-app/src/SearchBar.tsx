type Props = {
  value: string;
  onSearchBarChange: () => void;
};

export function SearchBar({ value, onSearchBarChange }: Props) {
  return (
    <>
      <input
        type="text"
        name="userInput"
        placeholder="search"
        value={value}
        onChange={onSearchBarChange}
      />
    </>
  );
}
