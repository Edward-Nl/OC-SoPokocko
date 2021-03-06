// Utilisation de Password Validator pour exiger un Mdp solide 
const passwordValidator = require('password-validator');

let schema = new passwordValidator();

schema
.is().min(6)
.is().max(30)
.has().lowercase()
.has().digits(1)
.has().not().spaces()
.is().not().oneOf(['Passw0rd', 'Password123']);

module.exports = schema;