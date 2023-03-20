import { pokeApi } from "@/api";
import { GetPokemon } from "@/interfaces";


export const getPokemonInfo = async ( value: string ) => {

   try {

    const { data } = await pokeApi.get<GetPokemon>(`/pokemon/${ value }`);

    const { id, name, sprites } = data;

    const pokemon = {
        id,
        name,
        sprites,
      }

    return pokemon;
   } catch ( err ) {
     return null;
   }
}