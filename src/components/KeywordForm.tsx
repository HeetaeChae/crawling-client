import React, { FormEvent } from 'react';
import { Box, TextField } from '@mui/material';
import { useForm } from 'hooks/useForm';
import ContentContainer from './ui/ContentContainer';
import FlexibleSubmitButton from './ui/FlexibleSubmitButton';
import { ProductInfoReq } from 'types/productInfo';
import { createTextByMarketingCategory } from 'utils/createTextByCategory';
import { MarketingCategory } from 'types/marketingCategory';
import CustomSelect from './CustomSelect';
import { createEmptyArray } from 'utils/createEmptyArray';

interface KeywordFormValues {
  keyword: string;
  count: number;
  sort: string;
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
      count: 5,
      sort: '일치순',
    },
  });

  const textByCategory = createTextByMarketingCategory(marketingCategory);

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    productInfoMutate({ marketingCategory, keyword: values.keyword });
  };

  const selectItemsForCount = createEmptyArray(10).map((_, index) => ({
    label: `${index + 1}`,
    value: index + 1,
  }));
  const selectItemsForSort = ['일치순', '판매순', '최신순'].map((value) => ({
    label: value,
    value,
  }));

  return (
    <form onSubmit={handleSubmit}>
      <ContentContainer>
        <Box sx={{ display: 'flex', gap: 1.5 }}>
          <CustomSelect
            label="상품개수"
            value={values.count}
            selectItems={selectItemsForCount}
            onChange={(e) => handleChangeInput('count', e.target.value)}
          />
          <CustomSelect
            label="정렬기준"
            value={values.sort}
            selectItems={selectItemsForSort}
            onChange={(e) => handleChangeInput('sort', e.target.value)}
          />
        </Box>
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
