var marks = [100,20,30,40,5,34,23,455,67,89,97,4]

function sortByValue(a,b){

    return a-b
}

console.log(marks)
//marks.sort(sortByValue)

marks.sort((a,b)=>a-b)
console.log(marks)
