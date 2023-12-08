import api from "../services/api"

type Request = {
    id: number,
    types: PokemonType
}

export async function getAllPokemon(): Promise<Pokemon[]> {

    const response = await api.get('pokemon')
    const { results } = response.data;

    const payloadPokemons: Array<Pokemon> = await Promise.all(
        results.map(async (pokemon: Pokemon) =>  {

            return {
                name: pokemon.name,
                url: pokemon.url
            }
        })
    );

    return payloadPokemons;

}