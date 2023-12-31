import { createSlice,createAsyncThunk } from "@reduxjs/toolkit";


const TestSlice=createSlice({
    name:"Test",
    initialState:{name:"Vikash Saini"},
    reducers:{       
        setName(state,action){
            let arr = state;
            arr.name = action.payload;
            state = arr;
            return state;
        }
    },
    extraReducers:(builder)=>{
        builder.addCase(updateStateWithThunk.pending,(state,action)=>{
            state.status="loading..";
        })
        .addCase(updateStateWithThunk.fulfilled,(state,action)=>{
            state.status="idle";
            state.name=action.payload;
        })
        .addCase(updateStateWithThunk.rejected,(state,action)=>{
            state.status="Error"
        })
    }
})

export const {setName} = TestSlice.actions;
export default TestSlice.reducer;


export const onloadSetState=()=>{

    return function testMethod(dispatch,getState){
        console.log(getState.TestSlice);
        dispatch(setName("Vidhi"));
    } 
}

export const updateStateWithThunk=createAsyncThunk("test/update",()=>{
    return "Swati";
})