const products = [
    {name: 'Camisa', price: 30.99, category: 'Roupas'},
    {name: 'Chaleira Elétrica', price: 50.99, category: 'Eletro'},
    {name: 'Fogão', price: 300, category: 'Eletro'},
    {name: 'Calça', price: 20.99, category: 'Roupas'},
]

products.map((products) => {
    if(products.category === 'Roupas') {
        products.onSale = true
    }
})

console.log(products)