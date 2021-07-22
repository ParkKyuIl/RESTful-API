// Prototype
/* eslint-disable */

function Person(name) {
  this.name = name
}

Person.prototype.greet = function greet() {
  return `hi ${this.name}!`
}

function Student(name) {
  this.__proto__.constructor(name)
}

Student.prototype.study = function study() {
  return `${this.name} is studying`
}

Object.setPrototypeOf(Student.prototype, Person.prototype)

const me = new Student('Jeongho')
console.log(me.greet())
console.log(me.study())

console.log(me instanceof Student)
console.log(me instanceof Person)
