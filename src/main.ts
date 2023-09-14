//INDEX SIGNATURE

interface transObj {
    pizza:number,
    devices:String,
    billType:'no'|'subscription'
}
  // here we assigned types of object type 

const firstTransaction:transObj={
    pizza:5,
    devices:'mac',
    billType:'no'
}
// key values must match what is setted 
//////////////////////////////////////////////////////////////////////////////////////////////////////

interface transObjFirst {
    [key:string]:string|number|any
}


//we can set the key to key with type string and value of any type 
const secondTransaction:transObjFirst={
    A:5,
    devices:'mac',
    billType:'no',
    c:true,
}

////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//keys of assertions
interface Obj{
    [key:string]:string|number|any
} 


const Student:Obj={
     name:'dave',
     age:12
}


for (const key in Student){
    console.log(`${key} : ${Student[key as keyof Obj]}`); // USE KEYOF 'INTERFACE TO ACCESS THE VARIABLE INSIDE DATA'
}


//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

type  keys= 'key1'|'key2'|'key3'; // we can here define our key props 

type obj= Record<keys,string> // in the object type we use record <key type, types>


// const obj1:obj={
//    // key:'l',        // this will give us an error as type obj is assigned to 
//                     //have a specific key props wqhich 'key '
//     key2:'ll',
//     key3:'lll'
// }


const obj1:obj={
    key1:'l',
    key2:'ll',
    key3:'lll'
}


for(let object in obj1){
    console.log(`{key}:${object} of value : ${obj1[object as keyof obj]} object` );
}
















