//type aliases

type stringOrNumber=(string|number)

interface Album{
 name:String,
 id:Number|String,
 albumsongs:stringOrNumber
};

let album1:Album={
name:'albumname',
id:78,
albumsongs:'hj',
} ;


// leteral types

 let user:'DAVE'|'JOHN'|'STEVE';
 //user='dave';                       // not related to the three hardcoded names assigned above to user

user='DAVE' 


const addWithReturnType=function (a:number,b:number):number{
    //return a+b+'6' // will pass error as  type specified not equal type returned (string)
    return a+b+parseInt('6') // will return sumation plus 6
}

const add=function (a:number,b:number){
    //return a+b+'9' // will return a string of sumation adjacent to 6 as strin X6 as no type specified
    return a+b+parseInt('6') // will return sumation plus 6
}

type mathOperations=(a:number,b:number)=>number;
type voidMessage=(message:any)=>void
// type used to specify function params types and return type


const logMsg:voidMessage=function(message){console.log(message)}


const addOperation:mathOperations=function(a,b){return a+b}


logMsg(addOperation(1,2))  // output 3


//rest parameter

type Allsummations=(...numbers:number[])=>number
// suppose we have more than two number and we want to get their sum we need to make the rest param which transfer any number of args to array
 let getAllSum:Allsummations=function(...nums){
  return nums.reduce((p,c)=>{
      return c+p
  })
 }

 logMsg(getAllSum(4,5,6,7)) //22


 



