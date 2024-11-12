import React from 'react';
import { MARKETING_CATEGORIES } from 'constants/marketingCategories';
import { MarketingCategory } from 'types/marketingCategory';
import TitleTypography from './ui/TitleTypography';

function MarketingPageHeader({
  marketingCategory,
}: {
  marketingCategory: MarketingCategory;
}) {
  const pointText =
    marketingCategory === MARKETING_CATEGORIES.aliAffiliate
      ? '알리 어필리에이트'
      : '쿠팡 파트너스';
  const title = `${pointText} 컨텐츠 생성하기`;
  const subTitle = `AI를 사용해 ${pointText} 제휴 마케팅 컨텐츠를 생성해보세요.`;

  return <TitleTypography title={title} subTitle={subTitle} />;
}

export default MarketingPageHeader;
