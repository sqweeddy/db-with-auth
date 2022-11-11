import axios from "axios";
import {CatalogState} from "./catalogSlice";
import {createAsyncThunk} from "@reduxjs/toolkit";


export const fetchUsers = createAsyncThunk(
    'catalog/fetchAll',
    async (page:number, thunkAPI) => {
        try {
            const response = await axios.get<CatalogState>(`https://reqres.in/api/users?page=${page}`)
            return response.data;
        } catch (e) {
            return thunkAPI.rejectWithValue("Не удалось загрузить пользователей")
        }
    }
)