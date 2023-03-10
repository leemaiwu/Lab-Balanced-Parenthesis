// Sample Strings
let sample1 = "This ( is unbalanced."
let sample2 = "(This (is (a) balanced) string.)"
let sample3 = "This is () also ) unbalanced."
let sample4 = "Balanced."

// Write your solution below:

const balance = input => {
    let leftP = 0
    let rightP = 0
    inputArr = input.split('')
    inputArr.forEach((element) => {
        if (element === '(') {
            leftP++
        } else if (element === ')') {
            rightP++
        }
    })
    if (leftP === rightP) {
        return true
    } else {
        return false
    }
}

console.log(balance(sample1))