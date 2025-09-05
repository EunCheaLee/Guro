import {createSlice} from '@reduxjs/toolkit'
import {fetchPostEmployee, fetchGetEmployee} from "./employeeApi.js";

const initialInfo = {name: "", age: "", job: "", language: "", pay: ""}

const initialState = {
    infos:[],
    clicked: "",
    ctrl: "",
    info: initialInfo,
    loading: false,
    error: false,
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
                // state.infos = state.infos.filter(info => info.name !== state.clicked);
                state.clicked = "";
                state.ctrl = "delete";
                state.info = initialInfo
                return;
            }
            if(action.payload === "reset"){
                return initialState;
            }
            state.ctrl = action.payload;
        },
/*        handleRegister:(state, action)=>{
            if(state.infos.some(info => info.name === action.payload.name)){
                return alert("이미 존재하는 이름입니다. 다른 이름을 사용하세요.")
            }
            state.infos = [...state.infos, action.payload];
            state.clicked = action.payload.name;
        },*/    // 프론트단으로 받기

        handleUpdate:(state, action) => {
            state.infos = state.infos.map(info => info.name === action.payload.name ? action.payload : info);
        },
        handleInfo:(state) => {
            state.info = state.infos.find(info=>info.name === state.clicked);
        }
    },   // 내부 함수 짜는 곳
    // extraReducers: (builder) => {}  // api 짜는 곳
    extraReducers: (builder) => {
        builder
            // fetchGet 처리
            .addCase(fetchGetEmployee.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(fetchGetEmployee.fulfilled, (state, action) => {
                state.loading = false;
                state.infos = action.payload;
            })
            .addCase(fetchGetEmployee.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload; // action.payload가 response.data와 동일하다
            })
            // fetchPost 처리
            .addCase(fetchPostEmployee.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(fetchPostEmployee.fulfilled, (state, action) => {
                state.loading = false
                // const tmpInfo = action.payload;
                // delete tmpInfo.id;
                // state.info = tmpInfo;
                const {payload} = action
                delete payload.id
                state.info = payload
            })
            .addCase(fetchPostEmployee.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload;
            })

    },
})

// component에 확산
export const {
    getClickName,
    handleClick,
    // handleRegister,
    handleUpdate,
    handleInfo
} = employeesSlice.actions;

export default employeesSlice.reducer;   // store에 저장
