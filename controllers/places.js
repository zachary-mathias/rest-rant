const router = require('express').Router()

router.get('/', (req, res) => {
  res.send('GET /places')
})
// wait

module.exports = router