const bcrypt = require('bcryptjs');

const hash = async (plaintextPassword) => {
    return await bcrypt.hash(plaintextPassword, 10);
    // Store hash in the database
}

const validatorPassword = async (password, adminPassword) =>{
    return await bcrypt.compare(password, adminPassword);
};

const comparePass = (a, b) => {
    if( a === b){
        return true;
    }
    return false;
}

module.exports= {validatorPassword, hash, comparePass}