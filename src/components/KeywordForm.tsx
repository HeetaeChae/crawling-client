import React, { FormEvent } from 'react';
import { TextField } from '@mui/material';
import { useForm } from 'hooks/useForm';
import ContentContainer from './ui/ContentContainer';
import FlexibleSubmitButton from './ui/FlexibleSubmitButton';
import { aliProductInfosDummyData } from 'dummy/productInfos';

interface KeywordFormValues {
  keyword: string;
}

interface KeywordFormProps {
  name: string;
  onUpdateData: (name: string, newData: any) => void;
  onToggleLoading: (name: string, isLoading: boolean) => void;
  valid: boolean;
}

function KeywordForm({
  name,
  onUpdateData,
  onToggleLoading,
  valid,
}: KeywordFormProps) {
  const { values, handleChangeInput } = useForm<KeywordFormValues>({
    initialValues: {
      keyword: '',
    },
  });

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    onToggleLoading(name, true);
    // dummy 데이터를 받음.
    setTimeout(() => {
      const dummyProductInfos = aliProductInfosDummyData;
      onUpdateData(name, dummyProductInfos);
      onToggleLoading(name, false);
    }, 5000);
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
          disabled={!valid}
        />
        <FlexibleSubmitButton label="상품정보 추출하기" valid={valid} />
      </ContentContainer>
    </form>
  );
}

export default KeywordForm;
