import { sliceProfile } from 'store/reducers/profileReducer';

export const { changePersonalAvatarAC, changePersonalNameAC, editProfileAC, authMeAC } =
  sliceProfile.actions;
