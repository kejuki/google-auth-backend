const express = require('express')
const router = express.Router()
const verify = require('../auth/googleauth')
const USERS = new Map()
const SESSIONS = new Map()

router.post('/authenticate/', async (req, res) => {
  let user
  try {
    user = await verify(req.body.googleUser.credential)
    console.log(user)
    res.json(USERS.get(user.email))
    console.log(USERS)
  } catch (error) {
    res.sendStatus(401)
  }
})  

router.post('/authenticate/signup/', async (req, res) => {
  let user
  try {
    user = await verify(req.body.googleUser.credential)
    console.log(USERS.has(user.email))
    USERS.set(
      user.email, 
      {
        id: user.sub,
        username: req.body.username
      }
    )
    res.json(USERS.get(user.email))
    console.log(USERS)
  } catch (error) {
    res.sendStatus(401)
  }
})

module.exports = router