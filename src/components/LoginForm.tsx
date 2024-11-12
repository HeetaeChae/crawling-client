import React, { FormEvent } from 'react';
import { Button, IconButton, OutlinedInput } from '@mui/material';
import { useForm } from 'hooks/useForm';
import { useShownPassword } from 'hooks/useShownPassword';
import { Visibility, VisibilityOff } from '@mui/icons-material';
import { useLogin } from 'hooks/useLogin';
import { setLocalStorageItem } from 'utils/handleLocalStorage';
import { useLocation, useNavigate } from 'react-router-dom';
import { ROUTE_PATHS } from 'constants/routePaths';

interface LoginFormValues {
  password: string;
}

function LoginForm() {
  const navigate = useNavigate();

  const { values, handleChangeInput } = useForm<LoginFormValues>({
    initialValues: { password: '' },
  });
  const { showPassword, handleClickShowPassword } = useShownPassword();

  const { loginMutation } = useLogin();
  const { isPending: loginIsLoading, mutate: loginMutate } = loginMutation;

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    loginMutate({ password: values.password });
  };

  return (
    <form onSubmit={handleSubmit}>
      <OutlinedInput
        disabled={loginIsLoading}
        placeholder="비밀번호를 입력해주세요."
        value={values.password}
        autoFocus
        onChange={(e) => handleChangeInput('password', e.target.value)}
        type={showPassword ? 'text' : 'password'}
        fullWidth
        endAdornment={
          <IconButton onClick={handleClickShowPassword}>
            {showPassword ? <Visibility /> : <VisibilityOff />}
          </IconButton>
        }
      />
      <Button
        disabled={loginIsLoading}
        size="large"
        variant="contained"
        fullWidth
        color="secondary"
        sx={{ p: 1.5, mt: 2 }}
        type="submit"
      >
        로그인
      </Button>
    </form>
  );
}

export default LoginForm;
