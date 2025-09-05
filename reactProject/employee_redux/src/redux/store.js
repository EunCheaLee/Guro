import {configureStore} from "@reduxjs/toolkit";
import employees from "./emp/employeesSlice.js";


const store = configureStore({
    reducer: {
        employees
    }
});

export default store;