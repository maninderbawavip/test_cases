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


const { searchData, sumTwoNum } = require(".")

// it('should test the results', () => {
//     searchData('Luke').then(results => {
//         expect(results).toEqual([ 'Luke Skywalker' ])
//         // done()
//     })
// })


it('should check sum of two numbers', () => {

    const output = sumTwoNum(1,2);
    expect(output).toEqual(3);

    expect(sumTwoNum(3,4)).toEqual(7);
    expect(sumTwoNum(-3,4)).toEqual(1);


})



// unit test -> try to mimic the functionality
// i expect that the output should be correct given proper input