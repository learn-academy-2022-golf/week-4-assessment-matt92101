// ASSESSMENT 4: JavaScript Coding Practical Questions with Jest

// Please read all questions thoroughly
// Pseudo coding is REQUIRED
// If you get stuck, please leave comments to help us understand your thought process

// Use test driven development to complete the following questions
// Add appropriate dependencies: $ yarn add jest

// Reminder: The test will call your function
// Run the file with the following command: $ yarn jest


// --------------------1) Create a function that takes in an array, removes the first item from the array and shuffles the remaining content.

// a) Create a test with an expect statement using the variable provided. 
// HINT: Check out this resource: https://jestjs.io/docs/expect#expectarraycontainingarray

describe("arrayShuffle", () => {
    it("removes the first item from the array and shuffles the remaining content", () => {
      expect(arrayShuffle(colors1)).toEqual(["yellow", "blue", "pink", "green"])
      expect(arrayShuffle(colors2)).toEqual(["saffron", "aquamarine", "periwinkle", "indigo", "ochre"])
    })
  })
    
   
    // Good Error - Jest failed
    // ReferenceError: arrayShuffle is not defined
    // est Suites: 1 failed, 1 total
    // Tests:       1 failed, 1 total

   
const colors1 = ["purple", "blue", "green", "yellow", "pink"]
// Expected output example (can be a different order): ["yellow", "blue", "pink", "green"]
const colors2 = ["chartreuse", "indigo", "periwinkle", "ochre", "aquamarine", "saffron"]
// Expected output example (can be a different order): ["saffron", "aquamarine", "periwinkle", "indigo", "ochre"]

colors1.shift()
console.log(colors1)
// Was able to use .shift to remove the first element in the array.

// b) Create the function that makes the test pass.

// Create a function that takes in an array
const arrayShuffle = (array) => {
     let newArr = array.shift()
// Use a for loop to iterate over the array
     for (let i = 0; i < array.length; i++) {

 // possibly use math.random to shuffle
     }
// return the new array 
     return newArr.shift

   }
  
   console.log(arrayShuffle(colors1))
   console.log(arrayShuffle(colors1))

// Notes: Note sure how to incorporate math.random into the for loop in order to shuffle. 

// --------------------2) Create a function that takes in an object that contains up votes and down votes and returns the end tally.

// a) Create a test with expect statements for each of the variables provided.

// const votes1 = {upVotes: 13, downVotes: 2,}
// const votes2 = {upVotes: 2, downVotes: 33}
// Expected output: -31

describe("endTally", () => {
     it("creates an end talley of two numbers from an object", () => {
       expect(endTally(votes1)).toEqual(11)
       expect(endTally(votes2)).toEqual(-31)
    })
  })
    // Good Error - Jest failed
    // ReferenceError: endTally is not defined
    // est Suites: 1 failed, 1 total
    // Tests:       1 failed, 1 total

    // 
   
  
//       ReferenceError: endTally is not defined
  
//         61 | describe("endTally", () => {
//         62 |     it("creates an end talley of two numbers from an object", () => {
//       > 63 |       expect(endTally(votes1)).toEqual(11)
//            |       ^
//         64 |       expect(endTally(votes2)).toEqual(-31)
//         65 |    })
//         66 |  })
  
//         at Object.expect (code-challenges.test.js:63:7)
  
//   Test Suites: 1 failed, 1 total
//   Tests:       1 failed, 1 total
// b) Create the function that makes the test pass.


const votes1 = {upVotes: 13, downVotes: 2,
    // Expected output: 11
    endTally: function() {
        return this.upVotes - this.downVotes
    // create a function within const votes using .this and the values of upVotes and downVotes
    // return subtraction operator .upvotes minus .downvotes to receive the tally
    }}
const votes2 = {upVotes: 2, downVotes: 33,
        // Expected output: -31

    endTally: function() {
        return this.upVotes - this.downVotes
    // create a function within const votes using .this and the values of upVotes and downVotes
    // return subtraction operator .upvotes minus .downvotes to receive the tally
        }}

    console.log(votes1.endTally())
    console.log(votes2.endTally())

// Notes: Console log returns correct ouput



// --------------------3) Create a function that takes in two arrays as arguments and returns one array with no duplicate values. STRETCH: Use the spread operator to pass in a dynamic number of arguments.

// a) Create a test with an expect statement using the variables provided.

 describe("noDuplicate", () => {
     it("returns an array with no duplicate values", () => {
       expect(noDuplicate(dataArray1, dataArray2)).toEqual(["array", "object", "number", "string", "Boolean", "null", "undefined"])
    })
  })

const dataArray1 = ["array", "object", "number", "string", "Boolean"]
const dataArray2 = ["string", "null", "Boolean", "string", "undefined"]
//Expected output: ["array", "object", "number", "string", "Boolean", "null", "undefined"]
let conArray = dataArray1.concat(dataArray2);
    console.log(conArray)

// b) Create the function that makes the test pass.
const noDuplicate = () => {
    let conArray = dataArray1.concat(dataArray2);
    // Merge the arrays together using .concat
    conArray = conArray.filter((item,index) => {
    // Use .filter to iterate through the newly merged array conArray
    return (conArray.indexOf(item) === index) 
    // Remove duplicates using indexOf
})}   

    
    console.log (noDuplicate())

    // Notes: Returns undefined
    // I console.log conArray = dataArray1.concat(dataArray2) and returned the merged arrays
    // Appears to be a problem with .indexOf
