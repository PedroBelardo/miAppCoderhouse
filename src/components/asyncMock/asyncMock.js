const products = [

    {id:'1',
     name:'Remera Miami Dolphins',
     price:50,
     category:'remera',
     img:'',
     stock: 20,
     description: 'Remera Miami Dolphins'
     },
     {id:'2',
     name:'Gorra Miami Dolphins',
     price:25,
     category:'gorra',
     img:'',
     stock: 20,
     description: 'Gorra Miami Dolphins'
     },
     {id:'3',
     name:'Remera de juego Patriots',
     price:200,
     category:'deJuego',
     img:'',
     stock: 20,
     description: 'Remera de Juego Patriots'
     },
     {id:'4',
     name:'Casco Patriots',
     price:300,
     category:'deJuego',
     img:'',
     stock: 20,
     description: 'Casco Patriots de Juego'
     },
]

export const getProducts = (categoryId) => {
    return new Promise ((resolve) =>{
        setTimeout(()=> {
            resolve(categoryId ? products.filter(prod => prod.category === categoryId) : products)
        },1000)
    })
}
export const getProduct = (id) => {  
    return new Promise ((resolve) =>{
        setTimeout(()=> {
            resolve(products.find(prod => prod.id === id))
        },1000)
    })
}
 