import { pokeApi } from '@/api';
import { Layout } from '@/components';
import { GetListPokemons, GetPokemon } from '@/interfaces';
import { existFavotire, getPokemonInfo, toggleFavotire } from '@/utils';
import { Grid, Card, Button, Container, Text } from '@nextui-org/react';
import confetti from 'canvas-confetti';
import { GetStaticPaths, GetStaticProps } from 'next';
import Image from 'next/image';
import { FC, useState } from 'react';

interface props {
    pokemon: GetPokemon
}

const PokemonByNamePage: FC<props> = ({ pokemon }) => {

    const { name, sprites, id } = pokemon;

    const [isInFavorites, setIsInFavorites] = useState( existFavotire( id ) )

    const onToggleFavorite = () => {
      toggleFavotire( id );
      setIsInFavorites( !isInFavorites );

      if ( isInFavorites ) return;

      confetti({
        zIndex: 999,
        particleCount: 100,
        spread: 160,
        angle: -100,
        origin: {
          x: 0.5,
          y: 0
        }
      })
    }


  return (
    <Layout title={ name }>
      <Grid.Container css={{ marginTop: '5px' }} gap={ 2 }>
        <Grid xs={ 12 } sm={ 4 }>
          <Card isHoverable css={{ padding: '30px' }}>
              <Card.Body>
                <Card.Image 
                  src={ sprites.other?.dream_world.front_default || './no-image.png' }
                  alt={ name }
                  width={'100%'}
                  height={200}
                />
              </Card.Body>
          </Card>

        </Grid>
        <Grid  xs={ 12 } sm={ 8 }>
          <Card>
            <Card.Header css={{ display: 'flex', justifyContent: 'space-between' }}>
              <Text h1 transform='capitalize'> { name } </Text>
              <Button color={'gradient'} ghost={ !isInFavorites } onPress={ onToggleFavorite }> { isInFavorites ? 'In Favorite' : 'Save of Favorite' }  </Button>

            </Card.Header>
            <Card.Body>
              <Text size={ 30 }> Sprites: </Text>
              <Container direction='row' css={{ display: 'flex', justifyContent: 'space-between' }} gap={ 2 }>
                <Image
                  src={ sprites.front_default }
                  alt={ name }
                  width={ 100 }
                  height={ 100 }
                />
                 <Image
                  src={ sprites.back_default }
                  alt={ name }
                  width={ 100 }
                  height={ 100 }
                />
                 <Image
                  src={ sprites.front_shiny }
                  alt={ name }
                  width={ 100 }
                  height={ 100 }
                />
                 <Image
                  src={ sprites.back_shiny }
                  alt={ name }
                  width={ 100 }
                  height={ 100 }
                />
              </Container>
            </Card.Body>
          </Card>
        </Grid>
      </Grid.Container>
    </Layout>
  )
}


export const getStaticPaths: GetStaticPaths = async ( ctx ) => {

  const { data } = await pokeApi.get<GetListPokemons>(`/pokemon?limit=151`);

  return {
    paths: data.results.map(({ name }) => ({ params: { name } })),
    fallback: false
  }
}

export const getStaticProps: GetStaticProps = async ( { params } ) => {

  const { name } = params as { name: string };

  const pokemon =  await getPokemonInfo( name );

  if ( !pokemon ) {
    return {
      redirect: {
        destination: '/',
        permanent: false
      }
    }
  }


  return {
    props: {
      pokemon
    },
    revalidate: 86400,
  }
}


export default PokemonByNamePage;