import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import {useSelector} from 'react-redux';

const Navigation = () => {
    const cartData = useSelector(state=>state.cart);
    const {data:products,status} = useSelector(state=>state.products);

    const [searchInput,setsearchInput]= useState("");
    const [debouncedInputValue, setDebouncedInputValue] = useState("");

    const getData=()=>{
       
        if (debouncedInputValue !=="") {
            console.log("search for: ",debouncedInputValue);
            const searhResult= products.filter(product=>product.title.toLowerCase().includes(debouncedInputValue));
            console.log(searhResult);
        }
        // console.log(search);
    }

    const debounce=(fn,delay)=>{
        let timer;
      return function (){
        let context=this;
        let args = arguments;
        clearTimeout(timer);
        timer = setTimeout(()=>{
            fn.apply(context,args);
        }, delay);
            
      }  
    }
    // const handleSearch =debounce((event)=>getData(event),3000);
    // const handleSearch =React.useCallback(debounce(getData,3000),[search]);

    // useEffect(()=>{
    //     handleSearch();
    //     return handleSearch.cancel;
    // },[search,handleSearch])

    // Debounce in react
    useEffect(()=>{
        let timeout =setTimeout(() => {
            setDebouncedInputValue(searchInput);
        }, 300);
        return () => clearTimeout(timeout);
    },[searchInput,300]);

    useEffect(()=>{
       getData();
    },[debouncedInputValue]);
    
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
      }}
    >
      <span className="logo"><a href="/" style={{"text-decoration": "none"}}> REDUX STORE</a></span>
      <div>
        <input name="search" value={searchInput} placeholder="search" onChange={(event)=>setsearchInput(event.target.value)}/>
      {/* <ul>
        <li>sdsd</li>
      </ul> */}
      </div>
    
      <div>
        <Link className="navLink" to="/">
          Home
        </Link>
        <Link className="navLink" to="/cart">
          Cart
        </Link>
        
        <span className="cartCount">Cart items:{cartData.length} </span>
      </div>
    </div>
  );
};

export default Navigation;
