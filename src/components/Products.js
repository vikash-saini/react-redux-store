import React,{ useState, useEffect } from 'react'
import { useDispatch, useSelector } from "react-redux";
import {add} from '../store/CartSlice';
import { fetchProducts,STATUSES } from '../store/ProductSlice';
import ErrorCatch from './ErrorCatch';
import Image from './Image';

const Products = () => {
    // const [products, setProducts] = useState([]);
    const {data:products,status} = useSelector(state=>state.products);
    const dispatch = useDispatch();

    useEffect(() => {
    //   async function fetchProducts() {
    //     const data = await fetch("https://fakestoreapi.com/products");
    //     const res = await data.json();
    //     setProducts(res);
    //   }
    //   fetchProducts();
    dispatch(fetchProducts()) ;
    }, []);

    const handleAdd=(product)=>{
        dispatch(add(product));
    }

    if(status===STATUSES.LOADING){
        return <h2>Loading....</h2>
    }

    if (status === STATUSES.ERROR) {
        return <h2>Something went wrong!</h2>;
    }

  return (
    <div  className="productsWrapper">
         {products &&
            products.map(product=>(
                <div className="card" key={product.id}>
                    {/* <ErrorCatch>
                    <Image src="" alt="" />
                    </ErrorCatch>      */}
                    <img src={product.image} />             
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

export default Products;
