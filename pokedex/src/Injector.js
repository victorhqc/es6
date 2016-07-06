import {
    PokemonController
} from './controllers';

export default class Injector {
    constructor( app ) {
        new PokemonController( app );
    }
}
