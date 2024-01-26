var marks = [100,20,40,50,60]
//a =100, b=20 => 120
//120 b=40 => 160
//160 b=50 => 210
//210 b=60 => 270
ans =  marks.reduce((a,b)=>a+b)

// for(let i=0;i<marks.length;i++){
//     ans = ans + marks[i]
// }

console.log(ans)
