import bcrypt from 'bcryptjs';

export const validatorPassword = async (password, adminPassword) =>{
    return await bcrypt.compare(password, adminPassword);
};

export const comparePass = (a, b) => {
    if( a === b){
        return true;
    }
    return false;
}