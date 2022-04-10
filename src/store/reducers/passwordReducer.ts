import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export type IsPasswordChangeType = {
  isChange: boolean;
};

const initialState: IsPasswordChangeType = {
  isChange: true,
};

export const slicePassword = createSlice({
  name: 'Password',
  initialState,
  reducers: {
    changePasswordAC(state, action: PayloadAction<boolean>) {
      state.isChange = action.payload;
    },
  },
});

export const passwordReducer = slicePassword.reducer;
