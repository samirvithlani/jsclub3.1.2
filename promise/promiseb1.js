//pending, resolve,reject

const genereteQuestions = () => {

    console.log('Questions are being generated')
    return new Promise((resolve,reject)=>{

        setTimeout(()=>{

           // resolve(['Q1','Q2','Q3','Q4','Q5'])
        },5000)


    })


}

const giveExam =() => {


    console.log('Exam started')
    genereteQuestions().then((data)=>{
        console.log(data)
        console.log('Exam ended')
    }).catch((err)=>{
        console.log(err)
    })
    

}

giveExam()
