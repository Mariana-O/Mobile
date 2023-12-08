export { };

declare global {
  module "*.png";
  module "*.jpg";


type PokemonType = {
  type: {
    name: string;
    url: string;
  };
};

type Pokemon = {
    id?: number;
    name: string;
    url: string;
    types?: PokemonType[];

};

}
