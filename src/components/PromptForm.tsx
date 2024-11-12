import React, { FormEvent } from 'react';
import { useForm } from 'hooks/useForm';
import { Button, TextField } from '@mui/material';
import { AFFILIATE_MARKETING_PROMPTS } from 'constants/prompts';
import ContentContainer from './ui/ContentContainer';
import ContentTitle from './ui/ContentTitle';
import FlexibleSubmitButton from './ui/FlexibleSubmitButton';
import { Add } from '@mui/icons-material';
import { AiScriptReq } from 'types/aiScript';
import { MarketingCategory } from 'types/marketingCategory';

interface PromptFormProps {
  marketingCategory: MarketingCategory;
  validButton: boolean;
  aiScriptMutate: ({ marketingCategory, prompt }: AiScriptReq) => void;
  productInfoPrompt: string;
}

interface PromptFormValues {
  prompt1: string;
  prompt2: string;
  prompt3: string;
}

function PromptForm({
  marketingCategory,
  validButton,
  aiScriptMutate,
  productInfoPrompt,
}: PromptFormProps) {
  const { values, handleChangeInput } = useForm<PromptFormValues>({
    initialValues: {
      prompt1: AFFILIATE_MARKETING_PROMPTS.prompt1,
      prompt2: AFFILIATE_MARKETING_PROMPTS.prompt2,
      prompt3: AFFILIATE_MARKETING_PROMPTS.prompt3,
    },
  });

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // prompt를 생성. 입력된 prompt + produnct info prompt
    const resultPrompt = `${values.prompt1} ${values.prompt2} ${values.prompt3} ${productInfoPrompt}`;
    aiScriptMutate({ marketingCategory, prompt: resultPrompt });
  };

  return (
    <form onSubmit={handleSubmit}>
      <ContentTitle title="AI에게 요청할 프롬프트" />
      <ContentContainer>
        <TextField
          variant="outlined"
          rows={5}
          multiline
          placeholder=""
          label="프롬프트 #1"
          value={values.prompt1}
          onChange={(e) => handleChangeInput('prompt1', e.target.value)}
        />
        <TextField
          variant="outlined"
          rows={5}
          multiline
          label="프롬프트 #2"
          value={values.prompt2}
          onChange={(e) => handleChangeInput('prompt2', e.target.value)}
        />
        <TextField
          variant="outlined"
          rows={5}
          multiline
          label="프롬프트 #3"
          value={values.prompt3}
          onChange={(e) => handleChangeInput('prompt3', e.target.value)}
        />
        <Button variant="outlined" size="large">
          <Add />
        </Button>
        <FlexibleSubmitButton
          label="AI에게 스크립트 요청하기"
          valid={validButton}
        />
      </ContentContainer>
    </form>
  );
}

export default PromptForm;
