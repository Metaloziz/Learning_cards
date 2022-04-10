import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { AuthMeType } from 'types';

export type ProfileStateWithErrorKeyType = {
  profileData: AuthMeType;
  error: string;
  isEditProfileOpen: boolean;
};

const initialState: ProfileStateWithErrorKeyType = {
  profileData: {} as AuthMeType,
  error: '',
  isEditProfileOpen: false,
};

export const sliceProfile = createSlice({
  name: 'Profile',
  initialState,
  reducers: {
    editProfileAC(state, action: PayloadAction<boolean>) {
      state.isEditProfileOpen = action.payload;
    },
    authMeAC(state, action: PayloadAction<AuthMeType>) {
      state.profileData = action.payload;
    },
    changePersonalNameAC(state, action: PayloadAction<string>) {
      state.profileData.name = action.payload;
    },
    changePersonalAvatarAC(state, action: PayloadAction<string>) {
      state.profileData.avatar = action.payload;
    },
  },
});

export const profileReducer = sliceProfile.reducer;
