import React from 'react';
import { AddOutlined, DeleteOutlined } from '@mui/icons-material';
import {
  Button,
  FormControl,
  IconButton,
  InputAdornment,
  InputLabel,
  OutlinedInput,
  TextField,
} from '@mui/material';
import { useUrlForm } from 'hooks/useUrlForm';
import { FormEvent } from 'react';
import ContentContainer from './ui/ContentContainer';
import FlexibleSubmitButton from './ui/FlexibleSubmitButton';
import { MarketingCategory } from 'types/marketingCategory';
import { createTextByMarketingCategory } from 'utils/createTextByCategory';

interface UrlFormProps {
  marketingCategory: MarketingCategory;
  validForm: boolean;
}

function UrlForm({ marketingCategory, validForm }: UrlFormProps) {
  const { urls, handleAddUrl, handleChangeUrlInput, handleDeleteUrl } =
    useUrlForm();

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(urls);
  };

  const textByCategory = createTextByMarketingCategory(marketingCategory);

  return (
    <form onSubmit={handleSubmit}>
      <InputLabel sx={{ fontSize: '12px', ml: '5px', mb: '10px' }}>
        상품개수: {urls.length}
      </InputLabel>
      <ContentContainer>
        {urls.map((urlValue: string, index: number) => (
          <FormControl variant="outlined" key={index}>
            <InputLabel>url #{index + 1}</InputLabel>
            <OutlinedInput
              autoFocus
              label={`url #${index + 1}`}
              placeholder={`정보를 추출할 ${textByCategory} 상품의 페이지 url을 입력해주세요.`}
              value={urlValue}
              onChange={(e) => handleChangeUrlInput(index, e.target.value)}
              disabled={!validForm}
              endAdornment={
                index > 0 ? (
                  <InputAdornment position="end">
                    <IconButton onClick={() => handleDeleteUrl(index)}>
                      <DeleteOutlined color="warning" />
                    </IconButton>
                  </InputAdornment>
                ) : null
              }
            />
          </FormControl>
        ))}
        <Button variant="outlined" onClick={handleAddUrl}>
          <AddOutlined />
        </Button>
        <FlexibleSubmitButton label="상품정보 추출하기" valid={validForm} />
      </ContentContainer>
    </form>
  );
}

export default UrlForm;
