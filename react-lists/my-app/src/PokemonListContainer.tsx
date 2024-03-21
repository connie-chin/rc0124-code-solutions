export type Pokemon = {
  number: string;
  name: string;
};

type Props = {
  pokedex: Pokemon[];
};

export function PokemonList({ pokedex }: Props) {
  const listedItems = pokedex.map((pokemon) => <li>{pokemon.name}</li>);
  return <ul>{listedItems}</ul>;
}
