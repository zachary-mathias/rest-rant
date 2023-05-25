const router = require('express').Router()

// let places = [{
//   name: 'Sabaidee Thai & Sushi Bar',
//   city: 'concord',
//   state: 'NC',
//   cuisines: 'Thai, Pan-Asian, sushi',
//   pic: '/images/thai.jpeg'
// }, {
//   name: 'Mac Tabby Cat Cafe',
//   city: 'charlotte',
//   state: 'NC',
//   cuisines: 'Coffee, Bakery',
//   pic: '/images/cat-cafe.jpeg'
// }]

router.get('/', (req, res) => {
  res.render('places/index')
})

router.post('/', (req, res) => {
  console.log(req.body)
  res.send('POST /places')
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

router.put('/:id', (req, res) => {
  res.send('PUT /places/:id stub')
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

router.get('/:id/edit', (req, res) => {
  res.send('GET /places/:id/')
})

router.post('/:id/rant', (req, res) => {
  res.send('GET /places/:id/rant stub')
})

router.delete('/:id/rant/:rantId', (req, res) => {
  res.send('GET /places/:id/rant/:rantId stub')
})

// wait

module.exports = router