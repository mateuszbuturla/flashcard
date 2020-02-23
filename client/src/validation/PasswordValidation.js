const minPasswordLength = 8;

const validatePassword = (password) => {
    if (password.length >= minPasswordLength)
        return true;
    else
        return false;
}

module.exports = validatePassword;