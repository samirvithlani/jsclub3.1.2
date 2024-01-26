var students = [
    {
        id: 101,
        name:"amit",
        age:23,
        subjects:["maths","science","english"]
    },
    {
        id: 102,
        name:"ram",
        age:24,
        subjects:["maths","english"]
    },
    {
        id: 103,
        name:"raj",
        age:25,
        subjects:["maths","science","english"]
    }
]


// for(let i=0;i<students.length;i++){


//         console.log(students[i].name)


// }

students.forEach((stu)=>{
    console.log(stu.name)
    console.log(stu.age)
})

var studentsName = students.map((stu)=>{

    return stu.name
})
console.log(studentsName)


var newStuObject = students.map((stu)=>{

    return(
        {
            studentId:stu.id -100,
            name:stu.name.toUpperCase(),
            age:stu.age + 10
        }
    )
})
console.log(newStuObject)




// students.forEach((stu)=>{
//     console.log(stu)
//     stu.subjects.forEach((sub)=>{
//         console.log(sub)
//     })
// })


// var newStudent1 = students.map((stu)=>{

//     return(
//         {
//             name:stu.name.toUpperCase(),
//             subjects:stu.subjects
//         }
//     )
    
// })

// var newStudent1 = students.map((stu)=>{

//     return(
//         {
//             name:stu.name.toUpperCase(),
//             subjects:stu.subjects.map((sub)=>{
//                 return sub.toUpperCase()
//             })
//         }
//     )
    
// })

//return 1 subject...

var newStudent1 = students.map((stu)=>{

    return(
        {
            name:stu.name.toUpperCase(),
            subject:stu.subjects[0].toUpperCase()
        }
    )
})
console.log(newStudent1)