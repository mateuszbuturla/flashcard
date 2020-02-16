const usersController = require('../controllers/usersController');
const dictionaryController = require('../controllers/dictionaryController');

module.exports = (app) => {

    app.post('/api/user/register/:login/:password', usersController.userRegister);

    app.post('/api/user/auth/:login/:password', usersController.userAuth);

    app.post('/api/dictionary/create/:name/:owner/:login', dictionaryController.dictionaryCreate);

    app.post('/api/dictionary/get/:owner', dictionaryController.getDictionaries);

    app.post('/api/dictionary/getone/:id', dictionaryController.getOneDictionary);

    app.post('/api/dictionary/edit/:id/:newvocabulary', dictionaryController.editDictionary);

    app.post('/api/dictionary/delete/:id', dictionaryController.deleteDictionary);
}