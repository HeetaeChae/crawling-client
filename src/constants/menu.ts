import { ROUTE_PATHS } from './routePaths';

export const aliAffiliateMenuItem = {
  path: ROUTE_PATHS.aliAffiliate,
  label: '알리 어필리에이트',
} as const;

export const coupangPartnersMenuItem = {
  path: ROUTE_PATHS.coupangPartners,
  label: '쿠팡 파트너스',
} as const;

export const dramaReviewMenuItem = {
  path: ROUTE_PATHS.dramaReview,
  label: '드라마 리뷰',
} as const;

export const AFFILIATE_MARKETING_MENU = {
  label: '제휴 마케팅',
  menuItems: [aliAffiliateMenuItem, coupangPartnersMenuItem],
} as const;

export const YOUTUBE_CHANNEL_MENU = {
  label: '유튜브 채널',
  menuItems: [dramaReviewMenuItem],
} as const;
