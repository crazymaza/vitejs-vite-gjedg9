import { configureStore, PayloadAction } from "@reduxjs/toolkit";
import { createSlice } from "@reduxjs/toolkit";

interface TableData {
  id: number;
  name: string;
  value: number;
  quantity: number;
}

interface StateInterface {
  selectedValue: number[];
  tableData: TableData[];
}

const initialState: StateInterface = {
  selectedValue: [],
  tableData: [
    { id: 1, name: "Product A", value: 100, quantity: 5 },
    { id: 2, name: "Product B", value: 200, quantity: 10 },
    { id: 3, name: "Product C", value: 150, quantity: 8 },
    { id: 4, name: "Product D", value: 250, quantity: 12 },
  ],
};

export const selectedSlice = createSlice({
  name: "selected",
  initialState,
  reducers: {
    add: (store, { payload }: PayloadAction<number>) => {
      store.selectedValue.push(payload);
    },
    remove: (store, { payload }: PayloadAction<number>) => {
      store.selectedValue = store.selectedValue.filter(
        (item) => item !== payload
      );
    },
  },
});

const store = configureStore({
  reducer: {
    selected: selectedSlice.reducer,
  },
});

export const { add, remove } = selectedSlice.actions;

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export type AppStore = typeof store;

export default store;
