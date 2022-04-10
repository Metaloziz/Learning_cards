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
    setErrorMessageAC(state, action: PayloadAction<{ errorMessage: string | null }>) {
      state.errorMessage = action.payload.errorMessage;
    },
    initializeMeAC(state, action: PayloadAction<{ isInitialize: boolean }>) {
      state.isInitialize = action.payload.isInitialize;
    },
    isLoadingAC(state, action: PayloadAction<{ isLoading: boolean }>) {
      state.isLoading = action.payload.isLoading;
    },
  },
});

export const appReducer = sliceApp.reducer;

// export const _appReducer = (
//   state = initialState,
//   action: AppActionsType,
// ): InitialStateType => {
//   switch (action.type) {
//     case SET_ERROR_MESSAGE:
//       return {...state, errorMessage: action.payload.errorMessage};
//     case INITIALIZE_ME:
//       return {...state, isInitialize: action.payload.isInitialize};
//     case IS_LOADING:
//       return {...state, isLoading: action.payload.isLoading};
//     default:
//       return state;
//   }
// };
