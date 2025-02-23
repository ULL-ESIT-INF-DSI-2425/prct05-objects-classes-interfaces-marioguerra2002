export enum PokemonType {
  Fuego = 'Fuego',
  Agua = 'Agua',
  Hierba = 'Hierba',
  Electrico = 'Electrico',
}

export interface PokemonParts {
  name: string;
  weight: number;
  height: number;
  type: PokemonType;
  attack: number;
  defense: number;
  speed: number;
  hp: number;
}

export class Pokemon implements PokemonParts {
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

export class Pokedex {
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

export class Combat {
  constructor(
    public pokemon1: Pokemon,
    public pokemon2: Pokemon
  ) {}
  private efectivenessMatrix: Map<PokemonType, Map<PokemonType, number>> = new Map([
    [PokemonType.Fuego, new Map([
      [PokemonType.Fuego, 1],
      [PokemonType.Agua, 0.5],
      [PokemonType.Hierba, 2],
      [PokemonType.Electrico, 1]
    ])],
    [PokemonType.Agua, new Map([
      [PokemonType.Fuego, 2],
      [PokemonType.Agua, 1],
      [PokemonType.Hierba, 0.5],
      [PokemonType.Electrico, 0.5]
    ])],
    [PokemonType.Hierba, new Map([
      [PokemonType.Fuego, 0.5],
      [PokemonType.Agua, 2],
      [PokemonType.Hierba, 1],
      [PokemonType.Electrico, 1]
    ])],
    [PokemonType.Electrico, new Map([
      [PokemonType.Fuego, 1],
      [PokemonType.Agua, 2],
      [PokemonType.Hierba, 1],
      [PokemonType.Electrico, 1]
    ])]
  ]);
  // lo pongo publico para poder hacer las pruebas
  public getEfectiveness(pokemon1: Pokemon, pokemon2: Pokemon): number | undefined {
    return this.efectivenessMatrix.get(pokemon1.type)?.get(pokemon2.type)?? undefined; // ?? 1 es para que si no encuentra el valor devuelva 1 y ? es para que si no encuentra el valor devuelva undefined
  }
  public calculateDamage(attacker: Pokemon, defender: Pokemon): number {
    const effectiveness = this.getEfectiveness(attacker, defender);
    if (effectiveness === undefined) {
      throw new Error('No se ha encontrado la efectividad');
    }
    let damage: number = 50 * (attacker.attack / defender.defense) * effectiveness;

    return parseFloat(damage.toFixed(2));
  }
  start(): void { // void porque al final se va a hacer en cada ronda un console.log
    let attacker = this.pokemon1;
    let defender = this.pokemon2;
    console.log(`Comienza el combate entre ${attacker.name} y ${defender.name}`);
    while (attacker.hp > 0 && defender.hp > 0) {
      const damage = this.calculateDamage(attacker, defender);
      // calculo el daño en cada ronda en función del atacante y el defensor (sus tipos y stats)
      defender.hp -= damage; // le resto el daño al hp del defensor
      console.log(`${attacker.name} ataca a ${defender.name} y le hace ${damage} de daño`);
      if (defender.hp <= 0) {
        console.log(`${defender.name} no tiene vida`);
        console.log(`${defender.name} ha sido derrotado`);
        console.log(`${attacker.name} ha ganado el combate`);
        break;
      }
      console.log(`${defender.name} tiene ${defender.hp} de vida`);
      
      [attacker, defender] = [defender, attacker]; // intercambio de valores
    }
  }
}

const pikachu = new Pokemon("Pikachu", 6, 4, PokemonType.Electrico, 55, 40, 90, 35);
const bulbasaur = new Pokemon("Bulbasaur", 6.9, 7, PokemonType.Hierba, 49, 49, 45, 110);

const pokedex = new Pokedex();
pokedex.addPokemon(pikachu);
pokedex.addPokemon(bulbasaur);

const combat = new Combat(pikachu, bulbasaur);
combat.start();

