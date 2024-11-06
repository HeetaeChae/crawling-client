import React from 'react';
import { Box, Button, Skeleton } from '@mui/material';
import ContentTitle from './ui/ContentTitle';
import ContentContainer from './ui/ContentContainer';
import ProductInfoCard from './ProductInfoCard';
import FlexibleSubmitButton from './ui/FlexibleSubmitButton';

interface ProductInfoProps {
  productInfos: any[] | null;
  cardSize: number;
}

function ProductInfo({ productInfos, cardSize }: ProductInfoProps) {
  return (
    <Box>
      <ContentTitle title="키워드로 추출한 상품 정보" />
      <ContentContainer>
        {productInfos?.map((item, index) => (
          <ProductInfoCard key={index} item={item} cardSize={cardSize} />
        ))}
        <Button variant="outlined" size="large">
          상품 이미지 저장하기
        </Button>
      </ContentContainer>
    </Box>
  );
}

export default ProductInfo;
