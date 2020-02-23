const minUsernameLength = 5;

const validateUsername = (username) => {
    if (username.length >= minUsernameLength)
        return true;
    else
        return false;
}

module.exports = validateUsername;