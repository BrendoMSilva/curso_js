// arrow function
const sum = function sum(a, b) {
    return a + b
}

const arrowSum = (a, b) => a + b

console.log(sum(5, 5))
console.log(arrowSum(5, 5))

const greeting = (name) => {
    if(name) {
        return 'Olá ' + name + '!' 
    } else {
        return 'Olá!'
    }
}

console.log(greeting('Doritos'));
console.log(greeting());

const testeArrow = () => console.log('Testou')

testeArrow()

const user = {
    name: 'Dori',
    sayUseName() {
        var self = this
        setTimeout(function () {
            console.log(self)
            console.log('Username: ' + self.name)
        }, 500)
    },
    sayUseNameArrow() {
        setTimeout(() => {
            console.log(this)
            console.log('Username: ' + this.name)
        }, 700)
    },
}

user.sayUseName()
user.sayUseNameArrow()