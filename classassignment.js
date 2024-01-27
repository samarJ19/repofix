//counter 
// let b=0;
// function a(){
//     console.log(b);
//     b++;
// }
//     setInterval(a,1000);    


//Calculate time between function call and function actually being called
// const currentDate=new Date();
// const a=currentDate.getTime();  //this function gives how much millisecond have been gone since 1900
// function fighter(){
//     console.log("Hritik new movie");
// }
// setTimeout(fighter,10*1000);
// const currentDate1=new Date();
// const b=currentDate1.getTime();
// console.log("Time taken by this function is : "+ (b-a));

const fs=require('fs');

//reading file 


// fs.readFile("try.txt","utf-8",function(err,data){
//     console.log(data);
// });
// let a=0;

//reading a file using call back 

function readingfiles(cb){
    fs.readFile("a.txt","utf-8",function(err,data){
        console.log("let's see what will happen ");
        fs.readFile("try.txt","utf-8",function(err,data){
            console.log("Ye late kyu print ho raha hai ?")
            cb(data);
        });
        cb(data);
    });
}
function OnDone(data){
    console.log(data);
}

readingfiles(OnDone);

