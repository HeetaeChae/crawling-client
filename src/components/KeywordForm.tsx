import React, { FormEvent } from 'react';
import { TextField } from '@mui/material';
import { useForm } from 'hooks/useForm';
import ContentContainer from './ui/ContentContainer';
import FlexibleSubmitButton from './ui/FlexibleSubmitButton';
import { ProductInfoReq } from 'types/productInfo';
import { createTextByMarketingCategory } from 'utils/createTextByCategory';
import { MarketingCategory } from 'types/marketingCategory';

interface KeywordFormValues {
  keyword: string;
}

interface KeywordFormProps {
  marketingCategory: MarketingCategory;
  validForm: boolean;
  productInfoMutate: ({ marketingCategory, keyword }: ProductInfoReq) => void;
}

function KeywordForm({
  marketingCategory,
  validForm,
  productInfoMutate,
}: KeywordFormProps) {
  const { values, handleChangeInput } = useForm<KeywordFormValues>({
    initialValues: {
      keyword: '',
    },
  });

  const textByCategory = createTextByMarketingCategory(marketingCategory);

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    productInfoMutate({ marketingCategory, keyword: values.keyword });
  };

  return (
    <form onSubmit={handleSubmit}>
      <ContentContainer>
        <TextField
          label="상품 키워드"
          variant="outlined"
          placeholder={`${textByCategory}에서 검색할 상품 키워드를 입력해주세요.`}
          value={values.keyword}
          autoFocus
          onChange={(e) => handleChangeInput('keyword', e.target.value)}
          disabled={!validForm}
        />
        <FlexibleSubmitButton label="상품정보 추출하기" valid={validForm} />
      </ContentContainer>
    </form>
  );
}

export default KeywordForm;
