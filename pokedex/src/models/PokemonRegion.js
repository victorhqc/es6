var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var PokemonRegionSchema = new Schema({
  pokemon: {},
  region: {},
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now },
  deletedAt: { type: Date, default: null }
});
