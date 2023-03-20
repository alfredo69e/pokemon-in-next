import { Card, Grid, Row, Text } from '@nextui-org/react';
import { useRouter } from 'next/router';
import { FC } from 'react';
import { SmallPokemon } from './../../interfaces';

interface props {
    pokemon: SmallPokemon
}

export const PokemonCard: FC<props> = ({ pokemon }) => {

  const { id, name, img } = pokemon;

    const router = useRouter();

    const onClickId = () => router.push(`/pokemon/${ id }`);

    const onClickName = () => router.push(`/name/${ name }`);

  return (
    <Grid xs={ 6 } sm={ 3 } md ={ 2 } xl={ 1 } key={ id } >
    <Card isHoverable isPressable >
      <Card.Body css={{ p: 1 }} onClick={ onClickId }>
        <Card.Image
          src={ img }
          width='100%'
          height={140}
          alt={`img ${name}`}
          loading='lazy'
        />
      </Card.Body>
      <Card.Footer onClick={ onClickName }>
        <Row justify='space-between'>
          <Text transform='capitalize'>{ name }</Text>
          <Text> #{ id }</Text>
        </Row>
      </Card.Footer>
    </Card>
  </Grid>
  )
}
