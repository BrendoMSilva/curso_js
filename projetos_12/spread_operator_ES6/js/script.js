const a = [1, 2, 3]
const b = [4, 5, 6]

const c = [...a, ...b]

console.log(c);

const d = [0, ...a, 4]

console.log(d)

const carName = {name: 'Gol'}
const carBRand = {brand: 'VW'}
const otherInfos = {km: 541278, price: 50000}

const car = {...carName, ...carBRand, ...otherInfos, wheels: 4}

console.log(car)
