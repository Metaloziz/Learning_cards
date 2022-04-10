import { sliceApp } from 'store/reducers/appReducer';

export const SET_ERROR_MESSAGE = 'APP/SET_ERROR_MESSAGE';
export const INITIALIZE_ME = 'APP/INITIALIZE_ME';
export const IS_LOADING = 'APP/IS_LOADING';

// export const setErrorMessageAC = (errorMessage: string | null) =>
//   ({
//     type: SET_ERROR_MESSAGE,
//     payload: {
//       errorMessage,
//     },
//   } as const);
//
// export const initializeMeAC = (isInitialize: boolean) =>
//   ({
//     type: INITIALIZE_ME,
//     payload: {
//       isInitialize,
//     },
//   } as const);
//
// export const isLoadingAC = (isLoading: boolean) =>
//   ({
//     type: IS_LOADING,
//     payload: {
//       isLoading,
//     },
//   } as const);

export const { isLoadingAC, setErrorMessageAC, initializeMeAC } = sliceApp.actions;
