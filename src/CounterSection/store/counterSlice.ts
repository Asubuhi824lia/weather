import { createSlice, PayloadAction, createAsyncThunk } from "@reduxjs/toolkit";
import fetchCount from "../API/fetchCount";
import { selectCount } from "./selectors";
import { AppThunk } from "./store";

interface CounterState {
  value: number;
  status: string;
}

enum AsyncStatus {
  PENDING = "loading",
  FULLFILLED = "idle",
  REJECTED = "failed",
}

const initialCounterState: CounterState = {
  value: 0,
  status: "idle",
};

export const counterSlicer = createSlice({
  name: "counter",
  initialState: initialCounterState,
  reducers: {
    increment: (state) => {
      state.value += 1;
    },
    decrement: (state) => {
      state.value -= 1;
    },
    multiplyByNumber: (state, action: PayloadAction<number>) => {
      state.value *= action.payload;
    },
  },
  extraReducers(builder) {
    builder
      .addCase(multiplyAsync.pending, (state) => {
        state.status = AsyncStatus.PENDING;
      })
      .addCase(multiplyAsync.fulfilled, (state, action) => {
        state.status = AsyncStatus.FULLFILLED;
        state.value *= action.payload;
      })
      .addCase(multiplyAsync.rejected, (state) => {
        state.status = AsyncStatus.REJECTED;
      });
  },
});
export default counterSlicer.reducer;
export const { increment, decrement, multiplyByNumber } = counterSlicer.actions;

export const multiplyAsync = createAsyncThunk(
  "counter/fetchCount",
  async (product: number) => {
    const response = await fetchCount(product);
    return response.data;
  }
);
