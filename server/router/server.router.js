const usersController = require('../controllers/usersController');

module.exports = (app) => {

    app.post('/api/user/register/:login/:password', usersController.userRegister);

}