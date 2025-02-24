/**
 * Enum representing different musical genres.
 */
enum Genre {
  Pop = "Pop",
  Rock = "Rock",
  Reggaeton = "Reggaeton",
  Trap = "Trap",
  Salsa = "Salsa",
  Bachata = "Bachata",
  Merengue = "Merengue",
}

/**
 * Interface defining the structure of an artist.
 */
interface IArtist {
  name: string;
  mensualListeners: number;
  discography: IDiscography[];
}

/**
 * Interface defining the structure of a discography.
 */
interface IDiscography {
  name: string;
  year: number;
  songs: ISong[];
}

/**
 * Interface defining the structure of a song.
 */
interface ISong {
  name: string;
  duration: number;
  genre: string;
  single: boolean;
  reproductions: number;
}

/**
 * Class representing an artist.
 */
class Artist implements IArtist {
  /**
   * Creates an instance of Artist.
   * @param name - The name of the artist.
   * @param mensualListeners - The number of monthly listeners.
   * @param discography - The list of discographies.
   */
  constructor(
    public name: string,
    public mensualListeners: number,
    public discography: IDiscography[],
  ) {}

  /**
   * Adds a discography to the artist.
   * @param discography - The discography to add.
   * @throws Error if the discography already exists.
   */
  addDiscography(discography: IDiscography): void {
    if (this.discography.find((d) => d.name === discography.name)) {
      throw new Error("Discography already exists");
    }
    this.discography.push(discography);
  }
}

/**
 * Class representing a discography.
 */
class Discography implements IDiscography {
  /**
   * Creates an instance of Discography.
   * @param name - The name of the discography.
   * @param year - The year of release.
   * @param songs - The list of songs.
   */
  constructor(
    public name: string,
    public year: number,
    public songs: ISong[],
  ) {}

  /**
   * Adds a song to the discography.
   * @param song - The song to add.
   * @throws Error if the song already exists.
   */
  addSong(song: ISong): void {
    if (this.songs.find((s) => s.name === song.name)) {
      throw new Error("Song already exists");
    }
    this.songs.push(song);
  }
}

/**
 * Class representing a song.
 */
export class Song implements ISong {
  /**
   * Creates an instance of Song.
   * @param name - The name of the song.
   * @param duration - The duration of the song in minutes.
   * @param genre - The genre of the song.
   * @param single - Whether the song is a single.
   * @param reproductions - The number of reproductions.
   */
  constructor(
    public name: string,
    public duration: number,
    public genre: string,
    public single: boolean,
    public reproductions: number,
  ) {}
}

/**
 * Class representing a music library.
 */
export class MusicLibrary {
  private artistsList: Artist[] = [];

  /**
   * Adds an artist to the library.
   * @param artist - The artist to add.
   * @throws Error if the artist already exists.
   */
  addArtist(artist: Artist): void {
    if (this.artistsList.find((a) => a.name === artist.name)) {
      throw new Error("Artist already exists");
    }
    this.artistsList.push(artist);
  }

  /**
   * Searches for an artist by name.
   * @param name - The name of the artist.
   * @returns The artist if found, otherwise undefined.
   */
  searchArtistByName(name: string): Artist | undefined {
    if (!this.artistsList.some((artist) => artist.name === name)) {
      return undefined;
    }
    const artist = this.artistsList.find((artist) => artist.name === name);
    if (!artist) {
      return undefined;
    }
    const formatedArtist = artist.discography.flatMap((discography) => {
      return discography.songs.map((song) => {
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

  /**
   * Searches for artists by genre.
   * @param genre - The genre to search for.
   * @returns A list of artists matching the genre, or undefined if none found.
   */
  searchArtistByGenre(genre: Genre): Artist[] | undefined {
    if (
      !this.artistsList.some((artist) =>
        artist.discography.some((discography) =>
          discography.songs.some((song) => song.genre === genre),
        ),
      )
    ) {
      return undefined;
    }
    const artists = this.artistsList.filter((artist) =>
      artist.discography.some((discography) =>
        discography.songs.some((song) => song.genre === genre),
      ),
    );
    const formatedArtists = artists.flatMap((artist) => {
      return artist.discography.flatMap((discography) => {
        return discography.songs.map((song) => {
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

  /**
   * Displays all stored data in a formatted table.
   */
  displayInTable(): void {
    const formattedTable = this.artistsList.flatMap((artist) =>
      artist.discography.flatMap((discography) =>
        discography.songs.map((song) => ({
          Artist: artist.name,
          MonthlyListeners: artist.mensualListeners,
          Discography: discography.name,
          Year: discography.year,
          Song: song.name,
          Duration: song.duration,
          Genre: song.genre,
          Single: song.single ? "Yes" : "No",
          Reproductions: song.reproductions,
        })),
      ),
    );
    console.table(formattedTable);
  }

  /**
   * Gets the number of songs in a discography.
   * @param disco - The discography.
   * @returns The number of songs.
   */
  numberSongsPerDiscography(disco: Discography): number {
    return disco.songs.length;
  }

  /**
   * Gets the total duration of a discography.
   * @param disco - The discography.
   * @returns The total duration.
   */
  lengthDiscography(disco: Discography): number {
    return disco.songs.reduce((acc, song) => acc + song.duration, 0);
  }

  /**
   * Gets the total number of reproductions of a discography.
   * @param disco - The discography.
   * @returns The total reproductions.
   */
  totalReproductions(disco: Discography): number {
    return disco.songs.reduce((acc, song) => acc + song.reproductions, 0);
  }
}
