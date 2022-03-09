import { initializeMe, setErrorMessage } from 'store/actions';
import { ExampleActionsType, RegistrationActionType } from 'types/actions';
import { LoginActionType } from 'types/actions/LoginActionsType';

export type AllAppActionsType =
  | LoginActionType
  | RegistrationActionType
  | AppActionsType
  | ExampleActionsType;

export type AppActionsType = SetErrorMessageType | InitializeMeType;

export type SetErrorMessageType = ReturnType<typeof setErrorMessage>;
export type InitializeMeType = ReturnType<typeof initializeMe>;
