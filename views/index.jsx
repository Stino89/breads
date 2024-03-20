const React = require('react')
const Default = require('./layouts/default')

function Index({ breads }) {
    const display = breads.map((bread, i) => {
        return (
        <li key={i}>
          <a href={`/bread/${i}`}>{bread.name}</a>
        </li>
        )
    })
    const bakerDisplay = bakers.map(baker => {
      return (
        <li key={baker.id}>
          <a href={`/baker/${baker.id}`}>{baker.name}</a>
        </li>
      )(
        <Default>
          <h2>Index Page</h2>
          <div className="newButton">
            <a href="/bread/new"><button>Add a new bread</button></a>
          </div>
          <div className="backButton">
            <a href="/bread"><button>Go back to the index</button></a>
          </div>
          <ul>
            {display}
          </ul>
          <p>Bakers</p>
          <ul>
            {bakerDisplay}
          </ul>
        </Default>
      )
    })

    return (<Default>
        <h2>Index Page</h2>
        <ul>
        <div className="newButton">
          <a href="/bread/new"><button>Add a new bread</button></a>
        </div>
        <div className="backButton">
          <a href="/bread"><button>Go back to the index</button></a>
        </div>
            {display}
        </ul>
      </Default>
    )
}

module.exports = Index