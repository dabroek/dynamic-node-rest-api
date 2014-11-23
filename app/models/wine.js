var mongoose     = require('mongoose');
var Schema       = mongoose.Schema;

var WineSchema   = new Schema({
	name: { type: String, required: true },
	percentage: Number
});

module.exports = mongoose.model('Wine', WineSchema);