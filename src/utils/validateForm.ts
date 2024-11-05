export interface AffiliateMarketingFormValues {
  keyword: string;
  prompt1: string;
  prompt2: string;
  prompt3: string;
}

export const validateAffiliateMarketingForm = (
  values: AffiliateMarketingFormValues,
) => {
  const errors = {
    keyword: '',
    prompt1: '',
    prompt2: '',
    prompt3: '',
  };

  const isValidKeyword = values.keyword.trim().length > 0;
  const isValidPrompt1 = values.prompt1.trim().length > 0;
  const isValidPrompt2 = values.prompt2.trim().length > 0;
  const isValidPrompt3 = values.prompt3.trim().length > 0;

  if (!isValidKeyword) {
    errors.keyword = '상품 키워드를 입력해주세요.';
  }
  if (!isValidPrompt1) {
    errors.prompt1 = '첫번째 요청 프롬프트를 입력해주세요.';
  }
  if (!isValidPrompt2) {
    errors.prompt2 = '두번째 요청 프롬프트를 입력해주세요.';
  }
  if (!isValidPrompt3) {
    errors.prompt3 = '세번째 요청 프롬프트를 입력해주세요.';
  }

  return errors;
};

export const validateTokenForm = () => {};

export const validateYoutubeChannelForm = () => {};
