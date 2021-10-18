class Ecommerce {

    constructor(itens, qtd, valorTotal) {
        this.itens = itens;
        this.qtd = qtd;
        this.valorTotal = valorTotal;
    }


    addItem(item) {

        let contador = 0;

        for(let itemCarrinho in this.itens) {
            if(this.itens[itemCarrinho].id == item.id) {
                this.itens[itemCarrinho].qtd += item.qtd;
            }
        }

        if(contador == 0) {
            this.itens.push(item);
        }

        this.qtd += item.qtd;
        this.valorTotal += item.preco * item.qtd;
    }

    removeItem(item) {
        
        for(let itemCarrinho in this.itens) {
            if(this.itens[itemCarrinho].id == item.id) {

                let obj = this.itens[itemCarrinho];
                let index = this.itens.findIndex(function(obj) {return obj.id == item.id});

                this.qtd -= this.itens[itemCarrinho].qtd;
                this.valorTotal -= this.itens[itemCarrinho].preco * this.itens[itemCarrinho].qtd;

                this.itens.splice(index, 1);


                
            }
        }
    }
}
    



let carrinho = new Ecommerce([
    {
        id: 01,
        nome:'Celular',
        qtd: 1,
        preco: 2000,
        
    },
    {
        id: 02,
        nome:'Blusa',
        qtd: 3,
        preco: 230
    }
], 4, 2690);

console.log(carrinho);

carrinho.addItem({id: 01, nome: "Camisas", qtd: 2, preco: 30});

console.log(carrinho);

carrinho.addItem({id: 03, nome: "Boné", qtd: 1, preco: 10});

console.log(carrinho);

carrinho.removeItem({id: 02, nome: "Blusa", qtd: 3, preco: 230});

console.log(carrinho);