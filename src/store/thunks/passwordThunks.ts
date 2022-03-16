import { AxiosError } from 'axios';

import { setErrorMessage } from '../actions';

import { passwordApi } from 'api';
import { statusCode } from 'enum';
import { AppThunkType, ForgotPasswordSendType, SendNewPasswordType } from 'types';

export const forgotPasswordTC =
  (data: ForgotPasswordSendType): AppThunkType =>
  async dispatch => {
    try {
      await passwordApi.forgotPassword(data);
    } catch (errorCatch) {
      const { response, message } = errorCatch as AxiosError;
      const error = response?.data.error;
      const status = response?.status;

      if (status === statusCode.Bad_Request) {
        dispatch(setErrorMessage(error));
      } else {
        dispatch(setErrorMessage(message));
      }
    }
  };

export const SendNewPasswordTC =
  (data: SendNewPasswordType): AppThunkType =>
  async dispatch => {
    try {
      await passwordApi.sendNewPassword(data);
    } catch (errorCatch) {
      const { response, message } = errorCatch as AxiosError;
      const error = response?.data.error;
      const status = response?.status;

      if (status === statusCode.Unauthorized || status === statusCode.Bad_Request) {
        dispatch(setErrorMessage(error));
      } else {
        dispatch(setErrorMessage(message));
      }
    }
  };
