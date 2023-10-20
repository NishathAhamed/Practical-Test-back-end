const express =require('express'),router=express.Router()

const service=require('../services/admin.service')



//Admin create user function
router.post('/', async (req, res) => {
    const newUserData = req.body; 
    const newUserId = await service.createUserByAdmin(newUserData);
    res.send("201");
});

//Admin delete user function
router.delete('/:id', async (req, res) => {
    const success = await service.deleteUserByAdmin(req.params.id);
    res.send({ success });
});
  

//Admin view list of all users function
router.get('/',async(req,res)=>{
    const userList=await service.getListOfAllUsers()
     res.send(userList)
  })
  



module.exports=router;