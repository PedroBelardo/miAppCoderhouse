import { useState ,useEffect} from 'react'
import { getProducts } from "../asyncMock/asyncMock"
import ItemList from '../ItemList/ItemList'
import { useParams } from 'react-router-dom'




const ItemListContainer = () => {
    
    
    const [products, setProducts] = useState ([])
    
    const [loading, setLoading] = useState (true)
    
    const { categoryId } = useParams()


    useEffect (() => {
            getProducts(categoryId).then(products => {
                setProducts(products)
            }).finally(() => {
                setLoading (false)
            })
    },[categoryId])
    
    if(loading){
        return (
            <h1>loading...</h1>
        )
    }


    return (

            <div>
                <ItemList products={products} />
            </div>
    )
}


export default ItemListContainer