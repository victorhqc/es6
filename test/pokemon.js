// const expect = require('chai').expect;
import { expect } from 'chai';
const request = require('supertest');
const assert = require('assert');

import Pokemon from '../pokedex/src/models/Pokemon';

describe('Test Pokemon API', function() {
    const url = 'http://localhost:3000';

    before(function(done) {
        require('../pokedex/boot/db')(function() {
            Pokemon.remove({}).exec();
            done();
        });
    });

    it('Should return 200 in Pokemon list', function(done) {
        request(url)
        .get('/v1/pokemons')
        .end(function(err, res) {
            if(err) { throw err; }

            expect(res.status).to.equal(200);
            done();
        });
    });

    it('Should return Pokemon array in list', function(done) {

        var bulbasaur = new Pokemon({
            name: 'Bulbasaur',
            number: 1
        });
        bulbasaur.save();

        var pikachu = new Pokemon({
            name: 'Pikachu',
            number: 25
        });
        pikachu.save();


        request(url)
        .get('/v1/pokemons')
        .end(function(err, res) {
            if(err) { throw err; }

            function validPokemon(name) {
                let validPikachu = false;
                res.body.pokemons.forEach(pokemon => {
                    if(pokemon.name === name) {
                        validPikachu = true;
                    }
                });

                expect(validPikachu).to.equal(true);
            }

            expect(res.body).to.have.ownProperty('pokemons');
            expect(res.body.pokemons.length).to.equal(2);
            validPokemon('Pikachu');
            validPokemon('Bulbasaur');

            done();
        });
    });
});
