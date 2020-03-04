const mongoose = require('mongoose');
const Schelma = mongoose.Schema;

const testResultModel = new Schelma({
    _id: { type: mongoose.ObjectId, required: true },
    dictionaryId: { type: String, required: true },
    correct: { type: Array, required: true },
    incorrect: { type: Array, required: true },
})

module.exports = mongoose.model('testResults', testResultModel);