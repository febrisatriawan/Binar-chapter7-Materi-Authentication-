const router = require('express').Router()
const auth = require('./controllers/authController')
const restrict = require('./middlewares/restrict')

router.get("/", (req, res) => {
    res.send("masuk")
})

router.post("/api/v1/auth/login", auth.login)
router.get("/api/v1/auth/whoami", restrict, auth.whoami)

module.exports = router