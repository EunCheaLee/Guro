import {createAsyncThunk} from "@reduxjs/toolkit";
import axios from 'axios'

export const fetchGetEmployee = createAsyncThunk( // 콜백함수
    "fetchGetEmployee",
    async (_, thunkAPI) => {
        try{
            const response = await axios.get("http://localhost:8000/app/emp/")
            return response.data;
        } catch(e) {
            return thunkAPI.rejectedWithValue("데이터 로드 실패.")
        }
    }
)

export const fetchPostEmployee = createAsyncThunk( // 콜백함수
    "fetchPostEmployee",
    async (emp, thunkAPI) => {
        try{
            const response = await axios.post("http://localhost:8000/app/emp/", emp)
            return response.data;
        } catch(e) {
            return thunkAPI.rejectedWithValue("데이터 전송 실패.")
        }
    }
)

export const fetchDeleteEmployee = createAsyncThunk( // 콜백함수
    "fetchDeleteEmployee",
    async (name, thunkAPI) => {
        console.log("clicked")
        try{
            const response = await axios.delete(`http://localhost:8000/app/emp/${name}`)
            return response.data;
        } catch(e) {
            return thunkAPI.rejectedWithValue("데이터 전송 실패.")
        }
    }
)