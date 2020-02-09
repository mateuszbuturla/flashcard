const usersController = require('../controllers/usersController');

module.exports = (app) => {

    app.post('/api/user/register/:login/:password', usersController.userRegister);

    app.post('/api/user/auth/:login/:password', usersController.userAuth);
}