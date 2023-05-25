const router = require('express').Router()

let places = [{
  name: 'Sabaidee Thai & Sushi Bar',
  city: 'concord',
  state: 'NC',
  cuisines: 'Thai, Pan-Asian, sushi',
  pic: '/images/thai.jpeg'
}, {
  name: 'Mac Tabby Cat Cafe',
  city: 'charlotte',
  state: 'NC',
  cuisines: 'Coffee, Bakery',
  pic: '/images/cat-cafe.jpeg'
}]

router.get('/', (req, res) => {
  res.render('places/index')
})

router.get('/new', (req, res) => {
  res.render('places/new')
})

router.get('/:id', (req, res) => {
  let id = Number(req.params.id)
  if (isNaN(id)) {
    res.render('error404')
  }
  else if (!places[id]) {
    res.render('error404')
  }
  else {
    res.render('places/show', { place: places[id], id })
  }
})

router.delete('/:id', (req, res) => {
  let id = Number(req.params.id)
  if (isNaN(id)) {
    res.render('error404')
  }
  else if (!places[id]) {
    res.render('error404')
  }
  else {
    places.splice(id, 1)
    res.redirect('/places')
  }
})

// wait

module.exports = router