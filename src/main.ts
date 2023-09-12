

//CLASSES

class Coder {
   // NO NEED TO DECLARE HERE OUR VARIABLE OR VISIBLE MEMBER HERE 
    constructor(
        private name:String, // THIS IS A VARIABLE THAT IS ONLY ACCESSED THROUGH THE INSTANCE OF THECLASS
       
        protected readonly lang:String, 
        /**  THIS IS A VARIABLE THAT IS ONLY
         ACCESSED THROUGH THE INSTANCE OF THE CLASS AND THE CHILD CLASSES */

        public age:Number //ACCESED EVERYWHERE
    )
    {
        this.name=name;
        this.lang=lang;
        this.age=age;
    }


    public getLang(){
         console.log('the lang is' ,this.lang);
    }
    public setLang(lang:String){
        // this.lang=lang;  
        /**  we will find that there is error here as readonly  
         * type WHICH WE CAN USE AS AN UNCHANFED VARIABLE */
    }




}


const seif=new Coder('seif','typescript',30)

seif.getLang();
// seif.setLang('PHP');
// seif.getLang();

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//inheritance
class WebDev extends Coder{

    constructor(
       name:String, 
      lang:String, 
       age:Number,
        public device:String 
    ){
    super(name,lang,age) // we use super as the father constructor of parent classes
      this.device=device // assif=gn argument device to device member
    }

    public getDevice(){
        this.typeDevice()
    }

    private typeDevice(){
        console.log('device is',this.device);
    }
}

const seifdev=new WebDev ('seif','javascript',30,'dell')

seifdev.getLang();
console.log(seifdev.age);

//console.log(seifdev.lang);//  as it is a private variable it is impossible to access directly
//seifdev.typeDevice();// this is also private cannot be accessed directly

seifdev.getDevice()
//this function contain the type device private function but her the function is accessible as we accessed it from a public function inside class 


/////////////////////////////////////////////////////////////////////////////////////////////////////////////////
 

//interface

interface Sound{

    name:String,
    sound:String,
    playSound():String

}



class Dog implements Sound{
    name:string
    sound:string
    constructor( name:string,
        sound:string){
         this.name=name
         this.sound=sound
    }

    playSound(): String {
        return `hello i am dog ,my name is ${this.name} and my sound is ${this.sound}`
    }
}

class Cat implements Sound{
    name:string
    sound:string
    constructor( name:string,
        sound:string){
         this.name=name
         this.sound=sound
    }

    playSound(): String {
        return `hello i am cat ,my name is ${this.name} and my sound is ${this.sound}`
    }
}
const mylo=new Dog('MYLO','WOOF WOOF')
const jef=new Cat('jeff','meow meow')



console.log(mylo.playSound(),jef.playSound());
