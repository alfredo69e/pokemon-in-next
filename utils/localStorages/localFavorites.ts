

export const toggleFavotire = ( id: number ) => {

    // if( typeof window === 'undefined' ) return false;

    let favorites : number[] = JSON.parse( localStorage.getItem('favotires') || '[]' );

    if( favorites.includes( id ) ) {
        favorites = favorites.filter(( pokeId ) => pokeId !== id );
    } else {
        favorites.push( id );
    }

    localStorage.setItem('favotires', JSON.stringify( favorites ));

    return favorites;

}

export const existFavotire = ( id: number ): boolean => {

    if( typeof window === 'undefined' ) return false;

    let favorites : number[] = JSON.parse( localStorage.getItem('favotires') || '[]' );

    return favorites.includes( id );


}

export const getLisFavorites = (): number[] => {

    if( typeof window === 'undefined' ) return [];

    return JSON.parse( localStorage.getItem('favotires') || '[]' );
}