import { FC, ReactNode } from 'react';
import Head from 'next/head';
import { Navbar } from './../ui';

interface BaseLayoutProps {
    children: ReactNode;
    title?: string;
  }

  const origin = ( typeof window === 'undefined' ) ? '' : window.location.origin;

export const Layout: FC<BaseLayoutProps> = ({ children, title }) => {
  return (
    <>
       <Head>
            <title>{ title || 'Pokemon App' }</title>
            <meta name='author' content='Alfredo Echeverria'/>
            <meta name='description' content='Info about the Pokemon xxxxx'/>
            <meta name='keywords' content='xxxxx, pokemon, pokedex'/>
            <meta property="og:title" content={`Informatio about the Pokemon ${ title }`}/>
            <meta property="og:description" content={`This is the page about ${ title }`}/>
            <meta property="og:image" content={ `${origin}/img/banner.png` } />
        </Head>

        <Navbar />

        <main style={{ 
          padding: '0px 20px'
         }}>
            { children }
        </main>
    </>
  )
}
