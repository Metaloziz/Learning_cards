import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export type InitialStateType = {
  errorMessage: string | null;
  isInitialize: boolean;
  isLoading: boolean;
};

const initialState: InitialStateType = {
  errorMessage: null,
  isInitialize: false,
  isLoading: false,
};

export const sliceApp = createSlice({
  name: 'App',
  initialState,
  reducers: {
    setErrorMessageAC(state, action: PayloadAction<string | null>) {
      state.errorMessage = action.payload;
    },
    initializeMeAC(state, action: PayloadAction<boolean>) {
      state.isInitialize = action.payload;
    },
    isLoadingAC(state, action: PayloadAction<boolean>) {
      state.isLoading = action.payload;
    },
  },
});

export const appReducer = sliceApp.reducer;
