
import { Favotires, Layout, NotFavorites } from './../../components';
import { useEffect, useState } from 'react';
import { getLisFavorites } from './../../utils';

const  FavoritesPage = () => {

  const [favoritesPokemons, setFavoritesPokemons] = useState<number[]>([]);

  useEffect(() => {
    setFavoritesPokemons( getLisFavorites() );
  }, []);



  return (
    <Layout title={'Pokemons - Favorites'}>
      {
       favoritesPokemons.length === 0 
        ? <NotFavorites />
        : <Favotires pokemons={ favoritesPokemons } />
      }
    </Layout>
  )
}


export default FavoritesPage;