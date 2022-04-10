import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { changePasswordAC, IS_CHANGE_PASSWORD, PasswordActionType } from 'store/actions';

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

// export const _passwordReducer = (
//   state = initialState,
//   action: PasswordActionType,
// ): IsPasswordChangeType => {
//   switch (action.type) {
//     case IS_CHANGE_PASSWORD: {
//       return { ...state, isChange: action.payload.isChange };
//     }
//     default:
//       return state;
//   }
// };
