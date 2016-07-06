var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var PokemonSchema = new Schema({
  name:  String,
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now },
  deletedAt: { type: Date, default: null },
  types: [
      { type: Schema.Types.ObjectId, ref: 'Type' }
  ],
  regions: [
      { type: Schema.Types.ObjectId, ref: 'Region' }
  ]
});

var Pokemon = mongoose.model('Pokemon', PokemonSchema);

export default Pokemon;
