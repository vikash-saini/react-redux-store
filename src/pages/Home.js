import React, { useState, useEffect,lazy,Suspense } from "react";
// import Products from "../components/Products";
import ReactTableCom from "../components/ReactTableCom";
import { useSelector,useDispatch } from "react-redux";
import { setName,onloadSetState,updateStateWithThunk } from "../store/TestSlice";

function Home() {

  const MyProducts = lazy(()=> import('../components/Products'));

  const data = useSelector(state=>state.test);
  const dispatch= useDispatch();
  
    console.log(data);
    useEffect(()=>{
      // dispatch(setName("Rahul"));
      // dispatch(onloadSetState());
      dispatch(updateStateWithThunk());
    },[])
  
  
  return (
    <div>
       <h2 className="heading">Welcome to the Redux toolkit store</h2>
      <section>
        <h3>Products</h3>
       {/* <Products/> */}
       <Suspense fallback={<h2>...lazy loading</h2>}>
        <MyProducts/>
       </Suspense>
      </section>
    </div>
  );
}

export default Home;
