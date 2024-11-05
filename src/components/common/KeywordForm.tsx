import React, { FormEvent } from 'react';

import { Box, Button, TextField } from '@mui/material';
import { useForm } from 'hooks/useForm';
import { useDeviceWidthStore } from 'store/useDeviceWidthStore';
import { SharedDatas } from 'pages/AliAffiliate';

interface KeywordFormValues {
  keyword: string;
}

interface KeywordFormProps {
  name: string;
  onUpdateData: (name: string, newData: any) => void;
}

function KeywordForm({ name, onUpdateData }: KeywordFormProps) {
  const { deviceWidth } = useDeviceWidthStore();
  const isMobile = deviceWidth <= 600;

  const { values, handleChangeInput } = useForm<KeywordFormValues>({
    initialValues: {
      keyword: '',
    },
  });

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    //
    e.preventDefault();
    onUpdateData(name, e);
  };

  return (
    <form onSubmit={handleSubmit}>
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          gap: isMobile ? 2 : 3,
        }}
      >
        <TextField
          variant="outlined"
          placeholder="상품 키워드를 입력해주세요."
          value={values.keyword}
          autoFocus
          onChange={(e) => handleChangeInput('keyword', e.target.value)}
        />
        <Button
          variant="contained"
          size="large"
          sx={!isMobile ? { flex: 0.5, ml: 'auto' } : {}}
          type="submit"
        >
          키워드로 상품정보 추출하기
        </Button>
      </Box>
    </form>
  );
}

export default KeywordForm;
