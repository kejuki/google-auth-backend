if (process.env.NODE_ENV !== 'production') {
  require('dotenv').config()
}
const express = require("express")
const app = express()
const cors = require('cors')
const session = require('express-session');
const routes = require('./routes/routes')

app.use(cors({origin: "http://localhost:3000", credentials:true}))
app.use(express.json())
app.use('/api', routes)

const users = [] 

app.listen(process.env.PORT || 3001 , console.log(`runnin on port ${process.env.PORT}`))