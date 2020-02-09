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