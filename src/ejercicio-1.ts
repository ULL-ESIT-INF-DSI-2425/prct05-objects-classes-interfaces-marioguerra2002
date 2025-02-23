enum PokemonType {
  Fuego = 'Fuego',
  Agua = 'Agua',
  Hierba = 'Hierba',
  Electrico = 'Electrico',
}

interface PokemonParts {
  name: string;
  weight: number;
  height: number;
  type: PokemonType;
  attack: number;
  defense: number;
  speed: number;
  hp: number;
}

class Pokemon implements PokemonParts {
  constructor (
    public name: string,
    public weight: number,
    public height: number,
    public type: PokemonType,
    public attack: number,
    public defense: number,
    public speed: number,
    public hp: number
  ) {}
}

class Pokedex {
  private pokemons: Pokemon[] = [];

  addPokemon(pokemon: Pokemon): void {
    if (this.pokemons.find(p => p.name === pokemon.name)) {
      throw new Error('Pokemon already exists');
    }
    this.pokemons.push(pokemon);
  }

  searchByType(type: PokemonType): Pokemon[] | undefined {
    if (!this.pokemons.some(pokemon => pokemon.type === type)) {
      // some comprueba si hay algun elemento que cumpla la condición
      return undefined;
    }
    return this.pokemons.filter(pokemon => pokemon.type === type);
    // devuelve un array con los pokemons que coincidan con el tipo (filter coge los elementos que cumplan la condición)
  }
  searchByName(name: string): Pokemon | undefined {
    if (!this.pokemons.some(pokemon => pokemon.name === name)) {
      return undefined
    }
    return this.pokemons.find(pokemon => pokemon.name === name);
  }
  searchByWeight(weight: number): Pokemon[] | undefined {
    if (!this.pokemons.some(pokemon => pokemon.weight === weight)) {
      return undefined
    }
    return this.pokemons.filter(pokemon => pokemon.weight === weight);
  }
  searchByHeight(height: number): Pokemon[] | undefined {
    if (!this.pokemons.some(pokemon => pokemon.height === height)) {
      return undefined
    }
    return this.pokemons.filter(pokemon => pokemon.height === height);
  }
  searchByAttack(attack: number): Pokemon[] | undefined {
    if (!this.pokemons.some(pokemon => pokemon.attack === attack)) {
      return undefined
    }
    return this.pokemons.filter(pokemon => pokemon.attack === attack);
  }
  searchByDefense(defense: number): Pokemon[] | undefined {
    if (!this.pokemons.some(pokemon => pokemon.defense === defense)) {
      return undefined
    }
    return this.pokemons.filter(pokemon => pokemon.defense === defense);
  }
  searchBySpeed(speed: number): Pokemon[] | undefined {
    if (!this.pokemons.some(pokemon => pokemon.speed === speed)) {
      return undefined
    }
    return this.pokemons.filter(pokemon => pokemon.speed === speed);
  }
  searchByHp(hp: number): Pokemon[] | undefined {
    if (!this.pokemons.some(pokemon => pokemon.hp === hp)) {
      return undefined
    }
    return this.pokemons.filter(pokemon => pokemon.hp === hp);
  }


}

