import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
export const greetapi = createAsyncThunk('Greetings/greetapi', async()=>{
 const res = await fetch('http://127.0.0.1:5000/api/v1/greetings')
 const data = res.json();
 return data;
})

const initialState = {
    greetings:[]
}

const greet = createSlice({
    name: 'Greetings',
    initialState,
    extraReducers: (builder) => {
      builder.addCase(greetapi.fulfilled, (state,action)=>{
        state.greetings = action.payload
      })
    }
})

export default greet.reducer