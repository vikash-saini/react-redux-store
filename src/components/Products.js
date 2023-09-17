import React,{ useState, useEffect } from 'react'
import { useDispatch } from "react-redux";
import {add} from '../store/CartSlice';

export const Products = () => {
    const [products, setProducts] = useState([]);

    const dispatch = useDispatch();

    useEffect(() => {
      async function fetchProducts() {
        const data = await fetch("https://fakestoreapi.com/products");
        const res = await data.json();
        setProducts(res);
      }
      fetchProducts();
    }, []);

    const handleAdd=(product)=>{
        dispatch(add(product));
    }
  return (
    <div  className="productsWrapper">
         {products &&
            products.map(product=>(
                <div className="card" key={product.id}>
                  <img src={product.image} alt="" />
                    <h4>{product.title}</h4>
                    <h5>{product.price}</h5>
                    <button onClick={() => handleAdd(product)} className="btn">
                        Add to cart
                    </button>
                </div>
            )) 
}       
    </div>
  )
}
