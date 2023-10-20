const db=require('../db')


module.exports.createUserByAdmin= async (userData) => {
    const [result] = await db.query("INSERT INTO user_tbl (UserID,UserName, Password, Email) VALUES (?,?, ?, ?)", [
        userData.UserID,
        userData.UserName,
        userData.Password,
        userData.Email
    ]).catch(err => console.log(err));
    return result; 
}

module.exports.deleteUserByAdmin= async (id) => {
    const result = await db.query("DELETE FROM user_tbl WHERE UserID=?", [id]).catch(err => console.log(err));
    return  200;
}

module.exports.getListOfAllUsers=async()=>{
    const[rows]=await db.query("SELECT * FROM user_tbl")
    .catch(err=>console.log(err))
    return rows;

}
