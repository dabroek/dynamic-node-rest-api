var mongoose     = require('mongoose');
var Schema       = mongoose.Schema;

var SodaSchema   = new Schema({
	name: { type: String, required: true }
});

module.exports = mongoose.model('Soda', SodaSchema);