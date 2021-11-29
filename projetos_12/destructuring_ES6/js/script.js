const fruits = ['maça', 'melancia', 'laranja'];

const [f1, f2, f3] = fruits

console.log(f1)

console.log(f2)

const productDetails = {
    name: 'teclado',
    price: 380.87,
    category: 'periférico',
    color: 'Red',
}

const {
    name: productName,
    price,
    category: productCategory,
    color,
} = productDetails

console.log(
    `O nome do produto é ${productName}, custa R$${price}, pertence a categoria ${productCategory} e tem a cor ${color}`
)