const mongoose = require('mongoose');
const Schelma = mongoose.Schema;

const dictionaryModel = new Schelma({
    _id: { type: mongoose.ObjectId, required: true },
    name: { type: String, required: true },
    owner: { type: String, required: true },
    vocabulary: { type: Array, required: true },
})

module.exports = mongoose.model('dictionaries', dictionaryModel);