import {
  configureStore,
  createSlice,
  createAsyncThunk,
} from "@reduxjs/toolkit";

export type ItemT = {
  id: number;
  title: string;
  url: string;
  favorite?: boolean;
};

export const setLists = createAsyncThunk("setList", async (pageNo: number) => {
  const response = await fetch(
    `https://jsonplaceholder.typicode.com/albums/1/photos?_page=${pageNo}&_limit=10`
  );
  const data = await response.json();
  return { data, pageNo };
});

const initialState: { list: Array<ItemT>; page: number; loading?: boolean } = {
  list: [],
  page: 1,
  loading: false,
};
export type stateT = typeof initialState;

export const rootReducer = createSlice({
  name: "list",
  initialState,
  reducers: {
    setFavorite: (state: stateT, action: any) => {
      const index = state.list.findIndex(
        (item) => item.id === action.payload.id
      );
      state.list[index].favorite = !action.payload.favorite;
      return state;
    },
  },
  extraReducers: (builder: any) => {
    builder.addCase(setLists.fulfilled, (state: stateT, action: any) => {
      state.list.push(...action.payload.data);
      state.page = action.payload.pageNo;
    });
  },
});

const store = configureStore({
  reducer: {
    list: rootReducer.reducer,
  },
});

export type storeT = ReturnType<typeof store.getState>;

export default store;
