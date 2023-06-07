import { configureStore } from "@reduxjs/toolkit";
import greetslice from "../reducers/greetslice";

const store = configureStore({
    reducer: {
      Greet: greetslice,
    }
})

export default store