"use strict";
//CLASSES
class Coder {
    // NO NEED TO DECLARE HERE OUR VARIABLE OR VISIBLE MEMBER HERE 
    constructor(name, // THIS IS A VARIABLE THAT IS ONLY ACCESSED THROUGH THE INSTANCE OF THECLASS
    lang, 
    /**  THIS IS A VARIABLE THAT IS ONLY
     ACCESSED THROUGH THE INSTANCE OF THE CLASS AND THE CHILD CLASSES */
    age //ACCESED EVERYWHERE
    ) {
        this.name = name;
        this.lang = lang;
        this.age = age;
        this.name = name;
        this.lang = lang;
        this.age = age;
    }
    getLang() {
        console.log('the lang is', this.lang);
    }
    setLang(lang) {
        // this.lang=lang;  
        /**  we will find that there is error here as readonly
         * type WHICH WE CAN USE AS AN UNCHANFED VARIABLE */
    }
}
const seif = new Coder('seif', 'typescript', 30);
seif.getLang();
// seif.setLang('PHP');
// seif.getLang();
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//inheritance
class WebDev extends Coder {
    constructor(name, lang, age, device) {
        super(name, lang, age); // we use super as the father constructor of parent classes
        this.device = device;
        this.device = device; // assif=gn argument device to device member
    }
    getDevice() {
        this.typeDevice();
    }
    typeDevice() {
        console.log('device is', this.device);
    }
}
const seifdev = new WebDev('seif', 'javascript', 30, 'dell');
seifdev.getLang();
console.log(seifdev.age);
//console.log(seifdev.lang);//  as it is a private variable it is impossible to access directly
//seifdev.typeDevice();// this is also private cannot be accessed directly
seifdev.getDevice();
class Dog {
    constructor(name, sound) {
        this.name = name;
        this.sound = sound;
    }
    playSound() {
        return `hello i am dog ,my name is ${this.name} and my sound is ${this.sound}`;
    }
}
class Cat {
    constructor(name, sound) {
        this.name = name;
        this.sound = sound;
    }
    playSound() {
        return `hello i am cat ,my name is ${this.name} and my sound is ${this.sound}`;
    }
}
const mylo = new Dog('MYLO', 'WOOF WOOF');
const jef = new Cat('jeff', 'meow meow');
console.log(mylo.playSound(), jef.playSound());
