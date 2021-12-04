class Product {
    constructor(name, price) {
        this.name = name
        this.price = price
    }

    productWithDiscount(discount) {
        return this.price * ((100 - discount) / 100)
    }
}

const shirt = new Product('Camisa gola polo', 20)

console.log(shirt.name)

console.log(shirt.productWithDiscount(10))

console.log(shirt.productWithDiscount(50))

const tenis = new Product('tenis verde', 120)

console.log(tenis.productWithDiscount(20))

// herança
class productWithDiscount extends Product {
    constructor(name, price, colors) {
        super(name, price)
        this.colors = colors
    }

    showColors() {
        console.log('As cores são: ')
        this.colors.forEach((color) => {
            console.log(color)
        });
    }
}

const hat = new productWithDiscount('chapéu', 34.99, ['Azul', 'preto', 'cinza'])

console.log(hat.name)

console.log(hat.productWithDiscount(30))

hat.showColors() 