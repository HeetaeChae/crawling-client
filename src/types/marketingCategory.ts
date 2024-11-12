import { MARKETING_CATEGORIES } from 'constants/marketingCategories';

export type MarketingCategory =
  | typeof MARKETING_CATEGORIES.aliAffiliate
  | typeof MARKETING_CATEGORIES.coupangPartners;
