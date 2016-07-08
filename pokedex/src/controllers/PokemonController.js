import Pokemon from '../models/Pokemon';

export class PokemonController {

    constructor( app ) {
        app.get('/v1/pokemons', this.index.bind(this));
        app.post('/v1/pokemons', this.store.bind(this));
    }

    index(req, res) {
        Pokemon.find({}, (err, pokemons) => {
            if ( err ) { return err; }

            res.json({
                pokemons
            });
        });
    }

    store(req, res) {
        const data = {
            name: req.body.name,
            types: req.body.types,
            regions: req.body.regions
        };

        var newPokemon = new Pokemon(data);
        newPokemon.save((err, pokemon) => {
            if ( err ) { return err; }

            res.json(pokemon);
        });
    }

    update(req, res) {

    }

    delete(req, res) {

    }
}
