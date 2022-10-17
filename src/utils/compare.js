const bcrypt = require('bcryptjs');

const validatorPassword = async (password, adminPassword) =>{
    return await bcrypt.compare(password, adminPassword);
};

const comparePass = (a, b) => {
    if( a === b){
        return true;
    }
    return false;
}