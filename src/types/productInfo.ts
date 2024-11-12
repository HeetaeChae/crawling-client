import { MarketingCategory } from './marketingCategory';

export interface ProductInfoReq {
  marketingCategory: MarketingCategory;
  keyword: string;
}

export interface ProductInfo {
  title: string;
  originPrice: string;
  salesPrice: string;
  discountRate: string;
  reviews: string[];
}

export interface ProductInfoRes {
  productInfos: ProductInfo[];
}
