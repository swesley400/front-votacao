import express from 'express'

import {} from 'path'


const app = express()

app.use('/', 
    express.static(
        './dist'
        )
    
)

app.listen(process.env.PORT || 3000, (err)=>{

    if(err){return console.log(err)}

    console.log("Funcionando certinho")
})