import { MARKETING_CATEGORIES } from 'constants/marketingCategories';
import { MarketingCategory } from 'types/marketingCategory';

export const createTextByMarketingCategory = (
  marketingCategory: MarketingCategory,
) => {
  return marketingCategory === MARKETING_CATEGORIES.aliAffiliate
    ? '알리익스프레스'
    : '쿠팡';
};
