const express =require('express'),router=express.Router()

const service=require('../services/login.service')

router.post('/', async (req, res) => {
    const username= req.body.UserName;
    const password= req.body.Password;

    try {
        if (!username || !password) {
            return res.status(400).send('Username and password are required');
        }

        const [user] = await service.getUserByUserNameAndPassword(username, password);
        

        if (user) {
            res.json({ message: 'Login successful', user });
        } else {
            res.status(401).json({ message: 'Invalid credentials' });
        }

    } 
    catch (error) {
        console.error(error);
        res.status(500).send('Server Error');
    }
});
    


module.exports=router;