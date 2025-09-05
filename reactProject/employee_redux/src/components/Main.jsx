import React, {useEffect} from 'react';
import Employees from "./Employees.jsx";
import Register from "./Register.jsx";
import Update from "./Update.jsx";
import {useDispatch, useSelector} from "react-redux";
import {handleClick} from "../redux/emp/employeesSlice.js";
import {fetchGetEmployee, fetchPostEmployee, fetchDeleteEmployee} from "../redux/emp/employeeApi.js";

const controls = ["register", "update", "delete", "reset"]
const style = {
    width: "60%",
    margin: "0 auto",
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    gap:"10px",
    padding:"20px",
}
// state.employees = {
//     infos:[
//         {name: "John", age: 35, job: "frontend", language: "React", pay: 400},
//         {name: "Peter", age: 28, job: "backend", language: "Java", pay: 500},
//         {name: "Sue", age: 38, job: "publisher", language: "JavaScript", pay: 400},
//         {name: "Susan", age: 40, job: "pm", language: "python", pay: 600},
//     ],
//     clicked: "",
//     ctrl: ""
// }
const Main = () => {
    const {ctrl, clicked} = useSelector((state) => state.employees);
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(fetchGetEmployee());
    }, [dispatch]);
    // const handleControl = (c) => {
    //     dispatch(handleClick(c))
    //     console.log(c)
    //     dispatch(fetchDeleteEmployee(clicked))
    // }
    const handleControl = (c) => {
        dispatch(handleClick(c));
        console.log(c);

        if (c === "delete") {
            dispatch(fetchDeleteEmployee(clicked));
        }
    };
    return (
        <>
            <div>
                <Employees/>
            </div>
            <div style={style}>
                {controls?.map((control, index) => ( // action.payload = controller; (thunk)를 잡는다.
                    <button key={index} onClick={()=>handleControl(control)}>{control}</button>
                ))}
            </div>
            <div>
                {ctrl==="register" && (<Register/>)}
                {ctrl==="update" && ( <Update/>)
                }
            </div>
        </>
    );
};
export default Main;