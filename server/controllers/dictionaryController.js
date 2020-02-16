const dictionaryModel = require('../models/dictionaryModel');
const userModel = require('../models/userModel');
const mongoose = require('mongoose');

exports.dictionaryCreate = async (req, res) => {
    const { name, owner, login } = req.params;
    try {
        if (name.length && owner && login) {
            const findUser = await userModel.find({ _id: owner, login: login });
            if (findUser.length > 0) {
                dictionaryModel.create({ _id: mongoose.Types.ObjectId(), name: name, owner: owner, vocabulary: [] }, (err) => {
                    if (err)
                        return console.log(err)

                    res.status(200).json({ status: 'correct' });
                })
            }
            else {
                res.status(500).json({ message: 'error' });
            }
        }
        else {
            res.status(200).json({ status: 'incorrect' });
        }
    }
    catch {
        res.status(500).json({ message: 'error' });
    }
}

exports.getDictionaries = async (req, res) => {
    const { owner } = req.params;
    try {
        if (owner) {
            const findDictionaries = await dictionaryModel.find({ owner: owner });
            const findUser = await userModel.find({ _id: owner });
            res.status(200).json({ status: 'correct', dictionaries: findDictionaries, userName: findUser[0].login });
        }
        else {
            res.status(200).json({ status: 'incorrect' });
        }
    }
    catch {
        res.status(500).json({ message: 'error' });
    }
}

exports.getOneDictionary = async (req, res) => {
    const { id } = req.params;
    try {
        if (id) {
            const findDictionary = await dictionaryModel.find({ _id: id });
            res.status(200).json({ status: 'correct', dictionary: findDictionary[0] });
        }
        else {
            res.status(200).json({ status: 'incorrect' });
        }
    }
    catch {
        res.status(500).json({ message: 'error' });
    }
}

exports.editDictionary = async (req, res) => {
    const { id, newvocabulary, userid, login } = req.params;
    try {
        if (id && userid && login) {
            const findUser = await userModel.find({ _id: userid, login: login });
            if (findUser.length > 0) {
                dictionaryModel.updateOne({ _id: id }, { vocabulary: JSON.parse(newvocabulary) }, (err) => {
                    if (err)
                        return console.log(err)

                    res.status(200).json({ status: 'correct' });
                })
            }
            else {
                res.status(500).json({ message: 'error' });
            }
        }
        else {
            res.status(200).json({ status: 'incorrect' });
        }
    }
    catch {
        res.status(500).json({ message: 'error' });
    }
}

exports.deleteDictionary = async (req, res) => {
    const { id, userid, login } = req.params;
    try {
        if (id && userid && login) {
            const findUser = await userModel.find({ _id: userid, login: login });
            if (findUser.length > 0) {
                dictionaryModel.deleteOne({ _id: id }, (err) => {
                    if (err)
                        return console.log(err)

                    res.status(200).json({ status: 'correct' });
                })
            }
            else {
                res.status(500).json({ message: 'error' });
            }
        }
        else {
            res.status(200).json({ status: 'incorrect' });
        }
    } catch (err) {
        res.status(500).json(err);
    }
}