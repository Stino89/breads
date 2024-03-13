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
    return (
      <Default>
        <h2>Index Page</h2>
        <ul>
        <div className="newButton">
          <a href="/breads/new"><button>Add a new bread</button></a>
        </div>
        <div className="backButton">
          <a href="/breads"><button>Go back to the index</button></a>
        </div>
            {display}
        </ul>
      </Default>
    )
}

module.exports = index