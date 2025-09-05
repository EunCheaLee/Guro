import {configureStore} from "@reduxjs/toolkit";
import employees from "./employeesSlice.js";


const store = configureStore({
    reducer: {
        employees
    }
});

export default store;