var user = {id: 1, name: 'John Doe', age: 25};
//assign


// var newdata = {
//     id: user.id,
//     name: user.name,
//     age: user.age,
//     status: 'active'
    
// }

var newData = Object.assign(user, {status: 'active', age: 30});
console.log(newData);

var keys =Object.keys(user);
console.log(keys);
var values = Object.values(user);
console.log(values);

// Object.freeze(user);
// user.age = 32;
// console.log(user);


// Object.seal(user);
// Object.assign(user, {age: 36});
// console.log(user)



// Object.defineProperty(user, 'email', {
//     value: 'raj@gmail.com'
// })
// console.log(user);


Object.defineProperties(user, {
    email: {
        value: 'mm'
    },
    phone: {
        value: '456789'
    }
})
console.log(user);