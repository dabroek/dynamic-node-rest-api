var mongoose     = require('mongoose');
var Schema       = mongoose.Schema;

var BeerSchema   = new Schema({
	name: { type: String, required: true },
	percentage: Number
});

module.exports = mongoose.model('Beer', BeerSchema);