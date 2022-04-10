import {
  authMeAC,
  changePersonalAvatarAC,
  changePersonalNameAC,
  editProfileAC,
} from 'store/actions/profileAction';
import {
  profileReducer,
  ProfileStateWithErrorKeyType,
} from 'store/reducers/profileReducer';
import { AuthMeType } from 'types/ProfileType';

let initialState: ProfileStateWithErrorKeyType;
let dataFromAPI: AuthMeType;
let newNeedEditValue: boolean;
let newNameUser: string;
let newAvatarURL: string;

beforeEach(() => {
  initialState = {
    profileData: {
      _id: '',
      email: '',
      rememberMe: false,
      isAdmin: false,
      name: '',
      verified: false,
      publicCardPacksCount: 0,
      created: '',
      updated: '',
      __v: 0,
      token: '',
      tokenDeathTime: 0,
      avatar: '',
    },
    error: '',
    isEditProfileOpen: false,
  };
  dataFromAPI = {
    _id: 'politics',
    email: 'brick',
    rememberMe: true,
    isAdmin: true,
    name: 'window',
    verified: true,
    publicCardPacksCount: 0,
    created: 'cupboard',
    updated: 'memory',
    __v: 100,
    token: 'bean',
    tokenDeathTime: 123,
    avatar: 'sky',
  };
  newNeedEditValue = true;
  newNameUser = 'content';
  newAvatarURL = 'http://always';
});

describe('profile reducer', () => {
  test('change isEdit view', () => {
    const action = editProfileAC(newNeedEditValue);

    const endState = profileReducer(initialState, action);

    expect(endState).not.toBe(initialState);
    expect(endState.isEditProfileOpen).toBeTruthy();
  });

  test('check Auth me', () => {
    const action = authMeAC(dataFromAPI);

    const endState = profileReducer(initialState, action);

    expect(endState).not.toBe(initialState);
    expect(endState.profileData.email).toBe(dataFromAPI.email);
    expect(endState.profileData.rememberMe).toBe(dataFromAPI.rememberMe);
    expect(endState.profileData.name).toBe(dataFromAPI.name);
    expect(endState.profileData.token).toBe(dataFromAPI.token);
    expect(endState.profileData.isAdmin).toBe(dataFromAPI.isAdmin);
  });

  test('change Name', () => {
    const action = changePersonalNameAC(newNameUser);

    const endState = profileReducer(initialState, action);

    expect(endState).not.toBe(initialState);
    expect(endState.profileData.name).toBe(newNameUser);
  });

  test('change person Avatar', () => {
    const action = changePersonalAvatarAC(newAvatarURL);

    const endState = profileReducer(initialState, action);

    expect(endState).not.toBe(initialState);
    expect(endState.profileData.avatar).toBe(newAvatarURL);
  });
});
