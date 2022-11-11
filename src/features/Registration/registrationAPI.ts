import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { RegisterState } from "./registrationSlice";

interface Body {
    email: string,
    password: string
}

export const fetchRegistrationToken = createAsyncThunk(
  'register/fetchRegistrationToken',
  async (body: Body, thunkAPI) => {
      try {
          const response = await axios.post<RegisterState>('https://reqres.in/api/register', body)
          return response.data;
      } catch (e) {
          return thunkAPI.rejectWithValue("Регистрация не удалась")
      }
  }
)
