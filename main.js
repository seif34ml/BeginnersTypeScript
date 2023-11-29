"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var person1 = {
    firstName: "Jane",
    age: 25,
    lastName: "seif",
    address: '121 m',
    id: '123'
};
// Example usage
var partialPerson = {
    firstName: "John",
    age: 25
    // lastName and age are optional in PartialPerson
};
// Function accepting Partial<Person> as an argument
function printPerson(person) {
    var returnedPerson = __assign(__assign({}, person1), person);
    console.log(returnedPerson);
    console.log("First Name: ".concat(returnedPerson.firstName || 'N/A'));
    console.log("Last Name: ".concat(returnedPerson.lastName || 'N/A'));
    console.log("Age: ".concat(returnedPerson.age || 'N/A'));
}
// Example calling the function with a partial person object
var partialPerson2 = {
    firstName: "Jane",
    age: 25,
};
printPerson(partialPerson2);
var pExcluded = {
    firstName: 's',
    age: 35,
    id: '123',
    lastName: "seif",
};
var pIncluded = {
    firstName: person1.firstName,
};
console.log(pExcluded);
console.log(pIncluded);
// Example usage
var myNumbers = {
    one: 1,
    two: 2,
    three: 3,
};
// Example usage
var userFlags = {
    isLogged: true,
    isAdmin: false,
    isActive: true,
};
console.log(userFlags);
