import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface CounterState {
  value: number;
}

const initialCounterState: CounterState = {
  value: 0,
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
    // halfDivideIfEven: (state) => {
    //   if (state.value % 2 === 0 && state.value !== 0) state.value /= 2;
    // },
    // multiplyAsync: (state, action) => {},
  },
});

export const { increment, decrement, multiplyByNumber } = counterSlicer.actions;

export default counterSlicer.reducer;
