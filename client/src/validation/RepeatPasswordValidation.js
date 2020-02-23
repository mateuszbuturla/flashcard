const validateRepeatPassword = (password, repeatPassword) => {
    if (password === repeatPassword)
        return true;
    else
        return false;
}

module.exports = validateRepeatPassword;