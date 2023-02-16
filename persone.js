
console.log(__dirname, __filename)

class Person {
    constructor(name,  age) {
        this.name = name;
        this.age = age;
        
    }

    greating() {
        console.log(`my name is ${this.name} and my age is ${this.age}`)
    }
}
module.exports = Person; 

const person1 = new Person("baali abdessamad", 21)
