import { initializeMeAC, isLoadingAC, setErrorMessageAC } from 'store/actions';
import { appReducer, InitialStateType } from 'store/reducers/appReducer';

let initialState: InitialStateType;
let errorMessage: string;
let notError: string;
let isInitialize: boolean;
let isLoading: boolean;

beforeEach(() => {
  initialState = {
    errorMessage: '',
    isInitialize: false,
    isLoading: false,
  };
  errorMessage = 'some error';
  notError = '';
  isInitialize = true;
  isLoading = true;
});

describe('app reducer', () => {
  test('set error message', () => {
    const action = setErrorMessageAC({ errorMessage });

    const endState = appReducer(initialState, action);

    expect(endState).not.toBe(initialState);
    expect(endState.errorMessage).toBe(errorMessage);
    expect(initialState.errorMessage).toBe(notError);
  });

  test('set initialized', () => {
    const action = initializeMeAC({ isInitialize });

    const endState = appReducer(initialState, action);

    expect(endState).not.toBe(initialState);
    expect(endState.isInitialize).toBeTruthy();
    expect(initialState.isInitialize).toBeFalsy();
  });

  test('set loading', () => {
    const action = isLoadingAC({ isLoading });

    const endState = appReducer(initialState, action);

    expect(endState).not.toBe(initialState);
    expect(endState.isLoading).toBeTruthy();
  });
});
