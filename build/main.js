"use strict";
//INDEX SIGNATURE
// here we assigned types of object type 
const firstTransaction = {
    pizza: 5,
    devices: 'mac',
    billType: 'no'
};
//we can set the key to key with type string and value of any type 
const secondTransaction = {
    A: 5,
    devices: 'mac',
    billType: 'no',
    c: true,
};
const Student = {
    name: 'dave',
    age: 12
};
for (const key in Student) {
    console.log(`${key} : ${Student[key]}`); // USE KEYOF 'INTERFACE TO ACCESS THE VARIABLE INSIDE DATA'
}
const obj1 = {
    key1: 'l',
    key2: 'll',
    key3: 'lll'
};
for (let object in obj1) {
    console.log(`{key}:${object} of value : ${obj1[object]} object`);
}
