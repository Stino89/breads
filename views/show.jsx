const React = require('react')
const Default = require('./layouts/default')

function Show({ bread}) {
    
    return (
        <Default>
            <h2>Show Page</h2>
            <h3>{bread.name}</h3>
            <p>
                {bread.name} is a type of {bread.type} bread.
            </p>
            <img src={bread.image} alt={bread.name} />
            <li>
                <a href='/bread'> Go Home</a>
            </li>
            <li>
                <a href={`/bread/${bread.id}/edit`}>Edit</a>
            </li>
            <form action={`/bread/${bread.id}?_method=DELETE`} method='POST'>
                <input type="submit" value="Delete" />
            </form>
        </Default>
    )
}

module.exports = Show