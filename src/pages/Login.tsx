import React from 'react';
import { Box, Card } from '@mui/material';
import LoginForm from 'components/LoginForm';
import CenterBox from 'components/ui/CenterBox';
import TitleTypography from 'components/ui/TitleTypography';
import { useDeviceWidthStore } from 'store/useDeviceWidthStore';
import { useTheme } from '@mui/material';

function Login() {
  const { isMobile } = useDeviceWidthStore();
  const theme = useTheme();
  const p = isMobile ? 5 : 7;

  const loginContent = (
    <Box sx={{ p, textAlign: 'center' }}>
      <TitleTypography title="MUI 로그인" />
      <LoginForm />
    </Box>
  );

  return (
    <CenterBox bgColor={isMobile ? 'default' : 'paper'}>
      {isMobile ? (
        <Box sx={{ width: 600 }}>{loginContent} </Box>
      ) : (
        <Card
          sx={{
            minWidth: 600,
            backgroundColor: theme.palette.background.default,
          }}
        >
          {loginContent}
        </Card>
      )}
    </CenterBox>
  );
}

export default Login;
