import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { fetchUsers } from './catalogAPI';


export interface ICatalogItem {
  id: string,
  email: string,
  last_name: string,
  avatar: string,
  like?: boolean
}

export interface CatalogState {
  data: ICatalogItem[],
  page: number,
  total_pages: number
  isLoading: boolean,
  error: string
}


const initialState: CatalogState = {
  data: [],
  isLoading: false,
  error: '',
  page: 1,
  total_pages: 0
};

export const catalogSlice = createSlice({
  name: 'catalog',
  initialState,
  reducers: {
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchUsers.fulfilled, (state, action: PayloadAction<CatalogState>) => {
        state.isLoading = false;
        state.error = ''
        state.data = [...state.data, ...action.payload.data];
        state.page = action.payload.page;
        state.total_pages = action.payload.total_pages;
      })
      .addCase(fetchUsers.pending, (state ) => {
        state.isLoading = true;
      })
      .addCase(fetchUsers.rejected, (state) => {
        state.isLoading = false;
        state.error = "Не удалось загрузить пользователей"
      })
}
});


export default catalogSlice.reducer;
