import { configureStore, Store } from "@reduxjs/toolkit";
import { ShiftOperator } from "typescript";



export const store = configureStore({
    reducer:{

    }
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof 