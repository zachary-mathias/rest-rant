const React = require('react')
const Def = require('../default')

function new_form() {
  return (
    <Def>
      <main>
        <h1>Add a New Place</h1>
        <form method="POST" action="/places">
          <div>
            <label htmlFor="name">Place Name</label>
            <input className="form control" id="name" name="name" required />
          </div>
          <div>
            <label htmlFor="pic">Place Picture</label>
            <input className="form control" id="pic" name="pic" />
          </div>
          <div>
            <label htmlFor="city">Place City</label>
            <input className="form control" id="city" name="city" />
          </div>
          <div>
            <label htmlFor="state">Place State</label>
            <input className="form control" id="state" name="state" />
          </div>
          <div>
            <label htmlFor="cuisines">Place Cuisines</label>
            <input className="form control" id="cuisines" name="cuisines" required />
          </div>
            <input className="btn btn-primary" type="submit" value="Add Place" />
        </form>
      </main>
    </Def>
  )
}

module.exports = new_form