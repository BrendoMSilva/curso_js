const arr = [1, 2, 3, 4, 5]

console.log(arr)

const highNumbers = arr.filter((n) => {
    if(n >= 3) {
        return n
    }
})

console.log(highNumbers)

const user = [
    {name: 'Red bull', available: true},
    {name: 'Monster', available: false},
    {name: 'Fury', available: false},
    {name: 'Vulcano', available: true},
]

const availableUsers = users.filter((user) => user.available)
const notAvailableUsers = users.filter((user) => !user.available)

console.log(notAvailableUsers)