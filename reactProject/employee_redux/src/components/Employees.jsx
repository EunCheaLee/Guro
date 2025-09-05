import React, {useEffect} from 'react';
import InfoTable from "./InfoTable.jsx";
import {useDispatch, useSelector} from "react-redux";
import {getClickName, handleInfo} from "../redux/employeesSlice.js";

const initialState = {
    name:'',
    age:'',
    job: '',
    language: '',
    pay: '',
}

const style = {
    width: "60%",
    margin: "0 auto",
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    gap: "20px",
    padding: "20px",
    paddingBottom: "30px",
}

const Employees = () => {
    const {infos, clicked} = useSelector(state => state.employees);
    const dispatch = useDispatch();
    useEffect(() => {
        // if(!ctrl) return;
        if(clicked){
            dispatch(handleInfo())
        }
    }, [dispatch, clicked]);

    return (
        <>
            <div style={style}>
                {infos.map((info, idx) => (
                    <button
                        key={idx}
                        onClick={() => {dispatch(getClickName(info.name))}}>
                        {info.name}
                    </button>
                ))}
            </div>
            <InfoTable/>
        </>
    );
};

export default Employees;