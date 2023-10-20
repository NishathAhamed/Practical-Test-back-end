const express =require('express'),router=express.Router()

const service=require('../services/user.service')

//User view details function
router.get('/:id',async(req,res)=>{
    const user=await service.getUserById(req.params.id)
     res.send(user)
})

//User edit user details function
router.put('/:id', async (req, res) => {
    const updatedUserData = req.body;
    const success = await service.updateUser(req.params.id, updatedUserData);
    res.send({ success });
});

// This end point used for testing purposes.Not a required api
router.post('/', async (req, res) => {
    const newUserData = req.body; 
    const newUserId = await service.addUser(newUserData);
    res.send("201");
});


module.exports=router;