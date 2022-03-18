import { ReactElement } from 'react';

import { SubmitHandler, useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';

import { SuperButton, TextField } from 'components';
import { PATH } from 'enum';
import { selectErrorMessage } from 'store/selectors';
import { sendNewPasswordTC } from 'store/thunks/passwordThunks';
import { Wrapper } from 'styles';
import { CreateNewPasswordType, SendNewPasswordType } from 'types';
import { getErrorValidate } from 'utils';

export const NewPassword = (): ReactElement => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const param = useParams<'token'>();

  const { token } = param;
  const resetPasswordToken = String(token);

  const errorMessage = useSelector(selectErrorMessage);

  const {
    register,
    handleSubmit,
    getValues,
    formState: {
      errors: { password, confirmPassword },
    },
  } = useForm<CreateNewPasswordType>();

  const createNewPassword: SubmitHandler<CreateNewPasswordType> = data => {
    const newPasswordData: SendNewPasswordType = {
      password: data.password,
      resetPasswordToken,
    };
    dispatch(sendNewPasswordTC(newPasswordData));
    navigate(PATH.LOGIN);
  };

  return (
    <Wrapper>
      <h1>Create new password</h1>
      <form onSubmit={handleSubmit(createNewPassword)}>
        <TextField
          {...register('password', { required: true, minLength: 8 })}
          type="password"
          labelTitle="New Password:"
          placeholder="Password"
          autoComplete="on"
          error={getErrorValidate(password?.type)}
        />
        <TextField
          labelTitle="Confirm password"
          type="password"
          {...register('confirmPassword', {
            required: true,
            minLength: 8,
            validate: value => value === getValues('password'),
          })}
          placeholder="Confirm password"
          error={getErrorValidate(confirmPassword?.type)}
        />

        <div style={{ display: 'flex', alignItems: 'center', flexDirection: 'column' }}>
          <SuperButton type="submit" value="create">
            Create new password
          </SuperButton>
        </div>
      </form>
      {errorMessage || null}
    </Wrapper>
  );
};
