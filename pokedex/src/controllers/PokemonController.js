import Pokemon from '../models/Pokemon';

export class PokemonController {

    constructor( app ) {
        app.get('/v1/pokemons', this.index.bind(this));
    }

    index(req, res) {
        Pokemon.find({}, (err, pokemons) => {
            res.json({
                pokemons
            });
        });
    }

    store(req, res) {

    }

    update(req, res) {

    }

    delete(req, res) {

    }
}
