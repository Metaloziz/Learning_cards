import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export type LoginStateWithErrorKey = {
  isLogin: boolean;
};

const initialState: LoginStateWithErrorKey = {
  isLogin: false,
};

export const sliceLogin = createSlice({
  name: 'Login',
  initialState,
  reducers: {
    setIsLoginAC(state, action: PayloadAction<boolean>) {
      state.isLogin = action.payload;
    },
  },
});

export const loginReducer = sliceLogin.reducer;
