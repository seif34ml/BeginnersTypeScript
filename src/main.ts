

////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//Generics in identity function
const echo=<T>(arg:T):boolean=>{
    return !!arg
}

console.log( echo('ss'));

////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//Genirics using interface

interface Obj <T>{
   arg:T,
   is:boolean
}
// now we have an interface of object with two props one is Generic and other is boolean 

// const isTrue=<T>(arg:T): Obj<T>=>{
//     return {arg,is:'KK'}
// }
// as the above function will cause error 
// as its type is set to string although it is boolean

const isTrue=<T>(arg:T): Obj<T>=>{
    return {arg,is:!!arg}
}

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Generic class
class States <T>{
    private data : T

    constructor(data:T){
        this.data=data;
    }

    set state(state:T){
        this.data=state
    }

    get state(){
       return this.data
    }

}

const state=new States('state');
//state.state=57; here we will have error as although data prop is assigned to T type but it is initialized 
// as string so we can not change its type at initialization

state.state='seif'
console.log(state.state);


