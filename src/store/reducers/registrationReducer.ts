import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { StatusType } from 'types';

export type InitialStateType = {
  isCompleted: boolean;
  status: StatusType;
};

const initialState: InitialStateType = {
  isCompleted: false,
  status: 'completed',
};

export const sliceRegistration = createSlice({
  name: 'Registration',
  initialState,
  reducers: {
    setRegistrationIsCompletedAC(state, action: PayloadAction<boolean>) {
      state.isCompleted = action.payload;
    },
    setStatusAC(state, action: PayloadAction<StatusType>) {
      state.status = action.payload;
    },
  },
});

export const registrationReducer = sliceRegistration.reducer;
