const router = require('express').Router()

router.get('/', (req, res) => {
  res.render('places/index')
})

router.get('/:id', (req, res) => {
  if (isNaN(id)) {
    res.render('error404')
  }
  else if (!places[id]) {
    res.render('error404')
  }
  else {
    res.render('places/show', { place: places[id] })
  }
})
// wait

module.exports = router