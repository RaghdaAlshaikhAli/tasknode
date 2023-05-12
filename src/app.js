     //    const  jwt = require ('jsonwebtoken')

//    const mytoken = () => {
//       const token = jwt.sign ({_id : "123456789"} , "secretKey" )
//       console.log(token)

//       const tokenVerify = jwt.verify ( token , "secretKey" )
//       console.log(tokenVerify)
//    }
//   mytoken()


///////////////////////////////////////////////////////////////////////

     const express = require ('express')
     const app = express()
     const port = process.env.PORT || 3000


     app.get('/', (req, res) => {
        res.send('hello')
    })

    require('../db/mongoose')

    app.use(express.json())

    const userRouter = require("../routers/user")

    app.use(userRouter)


    app.listen( port , () => {console.log("All Done Successfully")})






