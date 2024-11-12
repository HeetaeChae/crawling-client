import { MarketingCategory } from './marketingCategory';

export interface AiScriptReq {
  marketingCategory: MarketingCategory;
  prompt: string;
}

export interface AiScriptRes {
  script: string;
}
