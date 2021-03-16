// const { searchData } = require("./index");
// const data = ['India accelerator', 'jhinga lala ho hu', 'IA',
//     'IA LABS',
//     'IA Works',
//     'IA LearnX',
//     'REPLIT',
//     'India works']

// describe('searchdata test cases', () => {

//     it('tests my search data function', () => {
//         //assertions -> statements to test your code
//         expect(searchData("India", data)).toEqual(['India accelerator', "India works"])
//         expect(searchData("jhinga", data)).toEqual(['jhinga lala ho hu'])
//         expect(searchData("hu", data)).toEqual(['jhinga lala ho hu'])
//     })

//     it('no results', () => {
//         expect(searchData("kuch bhi", data)).toEqual([])
//     })

//     it('should return only 3 results', () => {
//         expect(searchData("IA", data).length).toEqual(3)
//     })
// })


const { searchData } = require(".")

it('should test the results', () => {
    expect.assertions(1)
    searchData('Luke').then(results => {
        expect(results).toEqual([ 'Luke Skywalker' ])
        // done()
    })
})