import React, { FormEvent } from 'react';
import { TextField } from '@mui/material';
import { useForm } from 'hooks/useForm';
import ContentContainer from './ui/ContentContainer';
import FlexibleSubmitButton from './ui/FlexibleSubmitButton';
import { aliAffiliateDummyDatas } from 'dummy/productInfos';

interface KeywordFormValues {
  keyword: string;
}

interface KeywordFormProps {
  name: string;
  onUpdateData: (name: string, newData: any) => void;
}

function KeywordForm({ name, onUpdateData }: KeywordFormProps) {
  const { values, handleChangeInput } = useForm<KeywordFormValues>({
    initialValues: {
      keyword: '',
    },
  });

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // dummy 데이터를 일단 받음.
    setTimeout(() => {
      const dummyProductInfos = aliAffiliateDummyDatas;
      onUpdateData(name, dummyProductInfos);
    }, 1000);
  };

  return (
    <form onSubmit={handleSubmit}>
      <ContentContainer>
        <TextField
          label="상품 키워드"
          variant="outlined"
          placeholder="상품 키워드를 입력해주세요."
          value={values.keyword}
          autoFocus
          onChange={(e) => handleChangeInput('keyword', e.target.value)}
        />
        <FlexibleSubmitButton label="상품정보 추출하기" />
      </ContentContainer>
    </form>
  );
}

export default KeywordForm;
