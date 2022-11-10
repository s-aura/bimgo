const express= require('express')
const dbconnect= require('./dbconnect')
const app= express()

app.use(express.json())
  const userRoute = require('./routes/usersRoutes')
 app.use('/api/users' , userRoute)
 

const port= 5000


app.listen(port ,()=>console.log(`listen on port no ${port}`)) 