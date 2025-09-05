import {createSlice} from '@reduxjs/toolkit'

const initialInfo = {name: "", age: "", job: "", language: "", pay: ""}

const initialState = {
    infos:[
        // 나중에 api로 받아야한다.
        {name: "John", age: 35, job: "frontend", language: "React", pay: 400},
        {name: "Peter", age: 28, job: "backend", language: "Java", pay: 500},
        {name: "Sue", age: 38, job: "publisher", language: "JavaScript", pay: 400},
        {name: "Susan", age: 40, job: "pm", language: "python", pay: 600},
    ],
    clicked: "",
    ctrl: "",
    info: initialInfo
}

const employeesSlice = createSlice({
    name: "employeeSlice",
    initialState,
    reducers: { // 함수를 짜는 곳이라 object로 짜기 위해 {}를 사용한다.
        getClickName:(state, action)=>{
            // console.log(state.clicked, "확인문구")
            state.clicked = action.payload;
        },
        handleClick:(state, action)=>{
            if(action.payload === "delete"){
                state.infos = state.infos.filter(info => info.name !== state.clicked);
                state.clicked = "";
                state.ctrl = "";
                state.info = initialInfo
                return;
            }
            if(action.payload === "reset"){
                return initialState;
            }
            state.ctrl = action.payload;
        },
        handleRegister:(state, action)=>{
            if(state.infos.some(info => info.name === action.payload.name)){
                return alert("이미 존재하는 이름입니다. 다른 이름을 사용하세요.")
            }
            state.infos = [...state.infos, action.payload];
            state.clicked = action.payload.name;
        },

        handleUpdate:(state, action) => {
            state.infos = state.infos.map(info => info.name === action.payload.name ? action.payload : info);
        },
        handleInfo:(state) => {
            console.log(state.clicked, "확인문구")
            state.info = state.infos.find(info=>info.name === state.clicked);
        }
    },   // 내부 함수 짜는 곳
    // extraReducers: (builder) => {}  // api 짜는 곳
})

// component에 확산
export const {
    getClickName,
    handleClick,
    handleRegister,
    handleUpdate,
    handleInfo
} = employeesSlice.actions;

export default employeesSlice.reducer;   // store에 저장
