import { Spacer, Text, useTheme } from '@nextui-org/react';
import Image from 'next/image';
import { useRouter } from 'next/router';
import Link from 'next/link';


export const Navbar = () => {

  const { theme } = useTheme();
  const route = useRouter();

  // console.log( theme );
  const onClick = () => {
    route.replace(`/`)
  }

  return (
    <div style={{
        alignItems: 'center',
        backgroundColor: theme?.colors.gray100.value,
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'start',
        padding: '0px 20px',
        width: '100%',
    }}>
         <Image
            src={'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/shiny/132.png'}
            alt='icono de la app'
            width={ 70 }
            height={ 70 }
          />
        <Link  href={'/'} style={{ display:'flex' }}>
            <Text color='white' h2>P</Text>
            <Text color='white' h3>okemon</Text>
        </Link>
        <Spacer css={{ flex: 1 }} />
        <Link href={'/favorites'}>
          <Text color='white' h3>Favoritos</Text>
        </Link>

    </div>
  )
}
