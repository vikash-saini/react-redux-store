import { createSlice } from "@reduxjs/toolkit";

export const cartState=[];

const CartSlice=createSlice({
    name:"Cart",
    initialState:cartState,
    reducers:{
        add(state,action){
            state.push(action.payload)
        },
        remove(state,action){
            return state.filter(row=>row.id !=action.payload);
        }
    }
})

export const {add,remove}= CartSlice.actions; 
export default CartSlice.reducer;
