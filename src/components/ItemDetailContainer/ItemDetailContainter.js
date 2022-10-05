import { useState, useEffect } from "react"
import { getProduct } from "../asyncMock/asyncMock"
import { useParams } from "react-router-dom"



const ItemDetailContainer = () => {

    const [product, setProduct] = useState ([])
    const [loading, setLoading ] = useState (true)
    
    const { productId } = useParams ()


    useEffect (() =>{
        getProduct(productId).then(product => {
            setProduct(product)
        }).finally(() => {
            setLoading (false)
        })
    }, [] )

    if (loading){
        return <h1>Loading product..</h1>
    }


    return (
        <div>
            <h1>Detalle del producto </h1>
            <div>
                <h1>{product.name}</h1>
                <h2>{product.category}</h2>
                <h3>{product.price}</h3>
            </div>
        </div>
    )
}



export default ItemDetailContainer

