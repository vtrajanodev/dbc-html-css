
var arrayOfproducts = [];
var id = 0;
    
const addProductsOnArray = product =>  arrayOfproducts.push(product);

addProductsOnArray({
    id: id += 1,
    description: 'Produto utilizado para desafiar a lógica',
    valor: 1000
})

addProductsOnArray({
    id: id += 1,
    description: 'Produto utilizado para desafiar a vida',
    valor: 1000
})

addProductsOnArray({
    id: id += 1,
    description: 'Produto utilizado para desafiar o professor Boolean(Tiago || João ?)',
    valor: 1000
})

console.log(arrayOfproducts)// primeiro console.log para mostrar a lista completa sem alterações

const deleteProducts = (id) => {
    arrayOfproducts = arrayOfproducts.filter(product => product.id !== id);

    return arrayOfproducts
}
console.log(deleteProducts(3)) // segundo console.log para mostrar um delete

const findProduct = (id) => {
    let uniqueProduct = arrayOfproducts.find(product => product.id === id)
    
    return uniqueProduct
}

console.log(findProduct(1)) // terceiro console.log para mostrar a procura de um ID. 

arrayOfproducts.forEach(product => console.log(product)) // Quarto console.log para mostrar todos os produtos.


/*
    Extra não obrigatório
*/

const totalPatrimony = () => {
    
    arrayOfproducts.reduce((total, item) => {
        soma = total + item.valor
        console.log(soma) //Quinto console.log para mostrar o valor total do patrimonio (pq aparece 1k dps 2k ? Queria só 2k.)
        return soma
    }, 0)

}

totalPatrimony()