var users = ["ram","shyam","hari","gita","sita","rita","rita","priyanshi","amita","nancy"]


var x = users.includes("hari")
console.log(x)



var x1 = users.find((u)=>{
    return u == "ritaa"
})
console.log(x1)

//customeSort



function sortByLen(a,b){

    return a.length - b.length
}

users.sort(sortByLen)

//users.sort()
console.log(users)