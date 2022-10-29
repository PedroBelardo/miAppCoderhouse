const products = [

    {id:'1',
     name:'Remera de juego Miami Dolphins',
     price:50,
     category:'Juego',
     img:'',
     stock: 20,
     description: 'Remera de juego Miami Dolphins'
     },
     {id:'2',
     name:'Gorra Miami Dolphins',
     category:'Gorras',
     price: 25,
     img:'',
     stock: 20,
     description: 'Gorra Miami Dolphins'
     },
     {id:'3',
     name:'Remera de juego Patriots',
     price:200,
     category:'Juego',
     img:'',
     stock: 20,
     description: 'Remera de Juego Patriots'
     },
     {id:'4',
     name:'Casco Patriots',
     price:300,
     category:'Juego',
     img:'',
     stock: 20,
     description: 'Casco Patriots de Juego'
     },
     {id:'5',
     name:'Remera de juego  Tampa Bay Buccaneers',
     price:50,
     category:'Juego',
     img:'',
     stock: 50,
     description: 'Remera de juego  Tampa Bay Buccaneers'
     },
     {id:'6',
     name:'San Francisco 49ers',
     price:50,
     category:'Remeras',
     img:'',
     stock: 100,
     description: 'San Francisco 49ers'
     },
     {id:'7',
     name:'Remera de juego Seattle Seahawks',
     price:50,
     category:'Juego',
     img:'',
     stock: 200,
     description: 'Remera de juego Seattle Seahawks'
     },
     {id:'8',
     name:'Gorra Kansas City Chiefs',
     price: 25,
     category:'Gorras',
     img:'',
     stock: 20,
     description: 'Gorra Kansas City Chiefs'
     },
     {id:'9',
     name:'Gorra Chicago Bears',
     price: 25,
     category:'Gorras',
     img:'',
     stock: 20,
     description: 'Gorra Chicago Bears'
     },

]
export const getProducts = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(products)
        }, 1500)
    })
}

export const getProduct = (id) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(products.find(prod => prod.id === id))
        }, 1000)
    })
}

export const getProductsByCategory = (categoryId) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(products.filter(prod => prod.category === categoryId))
        }, 1000)
    })
}

export const getProductById = (id) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(products.find(prod => prod.id === id))
        }, 500)
    })
}