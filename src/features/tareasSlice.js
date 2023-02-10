import { createSlice } from "@reduxjs/toolkit";

// definimos valor inicial para el slice:

const initialState = {
    tareas:[]
}

export const tareasSlice = createSlice({
    name:"tareas",
    initialState,
    reducers:{
        guardarTareas: (state , action) => {
            //console.log(action.payload); //muestra datos del array
            state.tareas = action.payload; // actualiza los datos del state de tareas

        } 
    }

    /*initialState:{
        cuenta:0
    }*/


});

export const {guardarTareas} = tareasSlice.actions;
export default tareasSlice.reducer;