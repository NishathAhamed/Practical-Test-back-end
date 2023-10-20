const db=require('../db')

module.exports.getUserByUserNameAndPassword = async (username, password) => {
    try {
        const [row] = await db.query("SELECT * FROM user_tbl WHERE UserName=? AND Password=?", [username, password]);
        return row;
    } catch (err) {
        console.error(err);
        return null; 
    }
};