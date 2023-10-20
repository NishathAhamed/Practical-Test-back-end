const db=require('../db')

module.exports.getUserById=async(id)=>{
    const[row]=await db.query("SELECT * FROM user_tbl WHERE UserID=?",[id])
    .catch(err=>console.log(err))
    return row;
}

module.exports.updateUser=async (id, userData) => {
    const result = await db.query("UPDATE user_tbl SET UserName=?, Password=?, Email=? WHERE UserID=?", [
        userData.UserName,
        userData.Password,
        userData.Email,
        id
    ]).catch(err => console.log(err));
    return 200; // Return true if the update was successful
}


// Used only for testing purpose.Not a required service
module.exports.addUser= async (userData) => {
    const [result] = await db.query("INSERT INTO user_tbl (UserID,UserName, Password, Email) VALUES (?,?, ?, ?)", [
        userData.UserID,
        userData.UserName,
        userData.Password,
        userData.Email
    ]).catch(err => console.log(err));
    return result; 
}