enum Genre {
  Pop = 'Pop',
  Rock = 'Rock',
  Reggaeton = 'Reggaeton',
  Trap = 'Trap',
  Salsa = 'Salsa',
  Bachata = 'Bachata',
  Merengue = 'Merengue',
}

interface IArtist {
  name: string;
  mensualListeners: number;
  discography: IDiscography[];
}

interface IDiscography {
  name: string;
  year: number;
  songs: ISong[];
}

interface ISong {
  name: string;
  duration: number;
  genre: string;
  single: boolean;
  reproductions: number;
}

class Artist implements IArtist {
  constructor(
    public name: string,
    public mensualListeners: number,
    public discography: IDiscography[]
  ) {}
  addDiscography(discography: IDiscography): void {
    if (this.discography.find(d => d.name === discography.name)) {
      throw new Error('Discography already exists');
    }
    this.discography.push(discography);
  }
}

class Discography implements IDiscography {
  constructor(
    public name: string,
    public year: number, 
    public songs: ISong[]
  ) {}
  addSong(song: ISong): void {
    if (this.songs.find(s => s.name === song.name)) {
      throw new Error('Song already exists');
    }
    this.songs.push(song);
  }
}

class Song implements ISong {
  constructor(
    public name: string,
    public duration: number,
    public genre: string,
    public single: boolean,
    public reproductions: number
  ) {}
}

class MusicLibrary {
  private artistsList: Artist[] = [];
  addArtist(artist: Artist): void {
    if (this.artistsList.find(a => a.name === artist.name)) {
      throw new Error('Artist already exists');
    }
    this.artistsList.push(artist);
  }
  searchArtistByName(name: string): Artist | undefined {
    if (!this.artistsList.some(artist => artist.name === name)) {
      return undefined;
    }
    const artist = this.artistsList.find(artist => artist.name === name);
    if (!artist) {
      return undefined;
    }
    const formatedArtist = artist.discography.flatMap(discography => {
      return discography.songs.map(song => {
        return {
          Artist: artist.name,
          MonthlyListeners: artist.mensualListeners,
          Discography: discography.name,
          Year: discography.year,
          Song: song.name,
          Duration: song.duration,
          Genre: song.genre,
          Single: song.single ? "Yes" : "No",
          Reproductions: song.reproductions,
        };
      });
    });
    console.table(formatedArtist);
    return artist;
  }
  searchArtistByGenre(genre: Genre): Artist[] | undefined {
    if (!this.artistsList.some(artist => artist.discography.some(discography => discography.songs.some(song => song.genre === genre)))) {
      return undefined;
    }
    const artists = this.artistsList.filter(artist => artist.discography.some(discography => discography.songs.some(song => song.genre === genre)));
    const formatedArtists = artists.flatMap(artist => {
      return artist.discography.flatMap(discography => {
        return discography.songs.map(song => {
          return {
            Artist: artist.name,
            MonthlyListeners: artist.mensualListeners,
            Discography: discography.name,
            Year: discography.year,
            Song: song.name,
            Duration: song.duration,
            Genre: song.genre,
            Single: song.single ? "Yes" : "No",
            Reproductions: song.reproductions,
          };
        });
      });
    });
    console.table(formatedArtists);
    return artists;
  }
  showDiscography(Discography: Discography): void {
    const formatedDiscography = Discography.songs.map(song => {
      return {
        Song: song.name,
        Duration: song.duration,
        Genre: song.genre,
        Single: song.single ? "Yes" : "No",
        Reproductions: song.reproductions,
      };
    });
    console.table(formatedDiscography);
  }
  displayInTable(): void {
    const formattedTable = this.artistsList.map(artist => {
      // Mapeo para cada artista
      return artist.discography.map(discography => {
        // Mapeo para cada discografía
        return discography.songs.map(song => {
          // Mapeo para cada canción
          return {
            Artist: artist.name,
            MonthlyListeners: artist.mensualListeners,
            Discography: discography.name,
            Year: discography.year,
            Song: song.name,
            Duration: song.duration,
            Genre: song.genre,
            Single: song.single ? "Yes" : "No", // Mostrar "Yes" o "No" en lugar de booleano
            Reproductions: song.reproductions
          };
        });
      }).flat(); // Aplanar el array de canciones para cada discografía
    }).flat(); // Aplanar el array de discografías para todos los artistas

    console.table(formattedTable);
  }
  numberSongsPerDiscography(disco: Discography): number {
    // contar el numero de canciones de una discografia
    return disco.songs.length;
  }
  lengthDiscography(disco: Discography): number {
    // duracion total de una discografia
    return disco.songs.reduce((acc, song) => acc + song.duration, 0);
  }
  totalReproductions(disco: Discography): number {
    // total de reproducciones de una discografia
    return disco.songs.reduce((acc, song) => acc + song.reproductions, 0);
  }



}


// ejemplo de uso

const song1 = new Song('song1', 3, Genre.Pop, true, 1000);
const song2 = new Song('song2', 4, Genre.Rock, false, 2000);
const song3 = new Song('song3', 5, Genre.Reggaeton, true, 3000);
const song4 = new Song('song4', 6, Genre.Trap, false, 4000);
const song5 = new Song('song5', 7, Genre.Salsa, true, 5000);
const song6 = new Song('song6', 8, Genre.Bachata, false, 6000);
const song7 = new Song('song7', 9, Genre.Merengue, true, 7000);

const discography1 = new Discography('discography1', 2021, [song1, song2]);
const discography2 = new Discography('discography2', 2022, [song3, song4]);
const discography3 = new Discography('discography3', 2023, [song5, song6, song7]);

const artist1 = new Artist('artist1', 1000, [discography1, discography2]);
const artist2 = new Artist('artist2', 2000, [discography2]);
const artist3 = new Artist('artist3', 3000, [discography3]);

const musicLibrary = new MusicLibrary();

musicLibrary.addArtist(artist1);
musicLibrary.addArtist(artist2);
musicLibrary.addArtist(artist3);

// musicLibrary.displayInTable();

// musicLibrary.searchArtistByName('artist1');



