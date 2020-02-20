const userModel = require('../models/userModel');
const mongoose = require('mongoose');

exports.userRegister = async (req, res) => {
    const { login, password } = req.params;
    try {
        if (login.length >= 5 && password.length >= 8) {
            userModel.create({ _id: mongoose.Types.ObjectId(), login: login, password: password }, (err) => {
                if (err)
                    return console.log(err)

                res.status(200).json({ status: 'correct' });
            })
        }
        else {
            res.status(200).json({ status: 'incorrect' });
        }
    }
    catch {
        res.status(500).json({ message: 'error' });
    }
}

exports.userAuth = async (req, res) => {
    const { login, password } = req.params;
    try {
        const findUser = await userModel.find({ login: login, password: password });
        if (findUser.length > 0) {
            const user = {
                _id: findUser[0]._id,
                login: findUser[0].login,
            }
            res.status(200).json({ user: user, status: 'correct' });
        }
        else {
            res.status(200).json({ status: 'incorrect' });
        }
    } catch (err) {
        res.status(500).json({ message: 'error' });
    }
}

exports.changePassword = async (req, res) => {
    const { userid, password, newpassword } = req.params;
    try {
        if (userid && password && newpassword.length >= 8) {
            const findUser = await userModel.find({ _id: userid, password: password });
            if (findUser.length > 0) {
                userModel.updateOne({ _id: userid }, { password: newpassword }, (err) => {
                    if (err)
                        return console.log(err)

                    res.status(200).json({ status: 'correct' });
                })
            }
            else {
                res.status(200).json({ status: 'incorrect' });
            }
        }
        else {
            res.status(200).json({ status: 'incorrect' });
        }
    } catch (err) {
        res.status(500).json({ message: 'error' });
    }
}