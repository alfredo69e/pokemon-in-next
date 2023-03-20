import { getLisFavorites } from './../../utils';
import { Grid, Card } from '@nextui-org/react';
import { useRouter } from 'next/router';
import React, { FC, useEffect, useState } from 'react'

interface props {
    pokemons: number[]
}

export const Favotires: FC<props> = ({ pokemons }) => {

    const router = useRouter();


    const onPress = ( id: number ) => {
      router.push(`/pokemon/${ id }`);
    }

  return (
    <Grid.Container gap={ 2 } direction='row' justify='flex-start'>
            {
              pokemons.map((id ) => (
                <Grid xs={ 6 } sm={ 3 } md={ 2 } xl={ 1 } key={ id } onClick={ () => onPress( id ) }>
                  <Card isHoverable isPressable css={{ padding: 10 }}>
                    <Card.Image 
                      src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${ id }.svg`}
                      width={ '100%' }
                      height={ 140 }
                    />

                  </Card>
                </Grid>
              ))
            }
          </Grid.Container>
  )
}
