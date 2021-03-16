const fetch = require('node-fetch');

const searchData = (searchTerm) => {
    return fetch('https://swapi.dev/api/people/')
        .then(resp => resp.json())
        .then(resp => {
            return resp.results.map(item => item.name)
        }).then(data => {
            return data.filter(i => i.includes(searchTerm))
        })
}

// searchData('Luke').then(results => console.log(results))

module.exports = { searchData }