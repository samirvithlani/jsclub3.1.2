// var sname ="raj"
// var semail= "raj@gmail.com"
// var sAge = 21
// var sPassword = "secret"

var student = {

    //key : value
    name : "raj",
    email : "raj@mail.com",
    age : 21,
    password : "secret",
}
console.log(student)
console.log(student.name)
console.log(student.email)
console.log(student.age)
console.log(student.password)

var employee ={

    id:1101,
    name:"parth",
    email:"parth@gmail.com",
    salary: 50000,
    address :{
        city:"surat",
        state:"gujarat",
        country:"india",
    }
    // city:"surat",
    // state:"gujarat",
    // country:"india",
}
console.log(employee)
console.log(employee.id)
console.log(employee.name)
console.log(employee.email)
console.log(employee.salary)

console.log(employee.city) //undefined
console.log(employee.state) //undefined
console.log(employee.country) //undefined
console.log(employee.address)
console.log(employee.address.city)
console.log(employee.address.state)
console.log(employee.address.country)