const express = require('express')
const app = express()
const PORT = 3001

app.use(express.json())

const passport = require('./lib/passport')
app.use(passport.initialize())

const router = require('./router')
app.use(router)

app.listen(PORT, () => {
    console.log(`Server berjalan pada ${PORT}`)
})