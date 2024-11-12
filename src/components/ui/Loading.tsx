import React from 'react';
import { CircularProgress } from '@mui/material';
import CenterBox from 'components/ui/CenterBox';

function Loading() {
  return (
    <CenterBox bgColor="default">
      <CircularProgress />
    </CenterBox>
  );
}

export default Loading;
