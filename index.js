const express=require('express'),app=express(),bodyparser=require('body-parser');
const db=require('./db'),userRoutes=require('./controllers/user.controller'),adminRoutes=require('./controllers/login.controller'),loginRoutes=require('./controllers/admin.controller')

app.use(bodyparser.json())
app.use('/api/user',userRoutes)
app.use('/api/admin',adminRoutes)
app.use('/api/login',adminRoutes)

db.query("SELECT 1")
.then(()=>{
      console.log('db connection succeeded.')
      app.listen(3000,console.log('server started at 3000'))

})
.catch(err=>console.log('db connection failed. \n'+err))
 