

import { Container, Text } from '@nextui-org/react';
import Image from 'next/image';

export const  NotFavorites = () => {
  return (
    <Container css={{
        display: 'flex',
        flexDirection: 'column',
        height: 'calc( 100vh - 100px )',
        justifyContent: 'center',
        alignItems: 'center'
      }}>
        <Text h1> { 'No Hay Favoritos' } </Text>
        <Image
          src={'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/1.svg'}
          alt={''}
          width={ 250 }
          height={ 250 }
          style={{ opacity: 0.9 }}
        />
     </Container>
  )
}
