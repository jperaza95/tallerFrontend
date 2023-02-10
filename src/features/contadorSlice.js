import { createSlice } from "@reduxjs/toolkit";

// definimos valor inicial para el slice:

const initialState = {
    cuenta:0
}

export const contadorSlice = createSlice({
    name:"contador",
    initialState,
    reducers:{
        incrementar: state => {
            //immer
            state.cuenta++; 
        },
        resetear: state =>{
            state.cuenta = 0;
        }
    }

    /*initialState:{
        cuenta:0
    }*/


});

export const {incrementar, resetear} = contadorSlice.actions;
export default contadorSlice.reducer;