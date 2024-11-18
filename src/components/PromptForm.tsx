import React, { FormEvent, useState } from 'react';
import { useForm } from 'hooks/useForm';
import { Button } from '@mui/material';
import { AFFILIATE_MARKETING_PROMPTS } from 'constants/prompts';
import ContentContainer from './ui/ContentContainer';
import ContentTitle from './ui/ContentTitle';
import FlexibleSubmitButton from './ui/FlexibleSubmitButton';
import { Add } from '@mui/icons-material';
import { MarketingCategory } from 'types/marketingCategory';
import PromptTextField from './PromptTextField';
import { useAdditionalPrompt } from 'hooks/useAdditionalPrompt';

interface PromptFormProps {
  marketingCategory: MarketingCategory;
  validButton: boolean;
  productInfoPrompt: string;
  onUpdateData: (name: string, newData: string) => void;
}

interface PromptFormValues {
  prompt1: string;
  prompt2: string;
  prompt3: string;
}

function PromptForm({
  marketingCategory,
  validButton,
  productInfoPrompt,
  onUpdateData,
}: PromptFormProps) {
  const { values, handleChangeInput } = useForm<PromptFormValues>({
    initialValues: {
      prompt1: AFFILIATE_MARKETING_PROMPTS.prompt1,
      prompt2: AFFILIATE_MARKETING_PROMPTS.prompt2,
      prompt3: AFFILIATE_MARKETING_PROMPTS.prompt3,
    },
  });
  const {
    additionalPrompts,
    handleAddPrompt,
    handleChangePromptInput,
    handleDeleteLastPrompt,
  } = useAdditionalPrompt();

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // prompt를 생성. 입력된 prompt + produnct info prompt
    const productInfoPromptScript = `${productInfoPrompt}`;
    const requestedPromptScript = `${values.prompt1}\n${values.prompt2}\n${values.prompt3}`;
    const addtionalPromptScript = `${additionalPrompts.map((additionalPrompt) => additionalPrompt.value).join('\n')}`;
    const resultPrompt = `${productInfoPromptScript}\n\n${requestedPromptScript}\n${addtionalPromptScript}`;
    onUpdateData('completedPromptScript', resultPrompt);
  };

  return (
    <form onSubmit={handleSubmit}>
      <ContentTitle title="상품정보와 함께 요청할 프롬프트" />
      <ContentContainer>
        <PromptTextField
          label="프롬프트 #1"
          value={values.prompt1}
          onChange={(e) => handleChangeInput('prompt1', e.target.value)}
        />
        <PromptTextField
          label="프롬프트 #2"
          value={values.prompt2}
          onChange={(e) => handleChangeInput('prompt2', e.target.value)}
        />
        <PromptTextField
          label="프롬프트 #3"
          value={values.prompt3}
          onChange={(e) => handleChangeInput('prompt3', e.target.value)}
        />
        {additionalPrompts.map((additionalPrompt, index) => (
          <PromptTextField
            key={index}
            label={additionalPrompt.label}
            value={additionalPrompt.value}
            onChange={(e) =>
              handleChangePromptInput(additionalPrompt.key, e.target.value)
            }
            lastAddPrompt={index === additionalPrompts.length - 1}
            onDelete={handleDeleteLastPrompt}
          />
        ))}
        <Button
          variant="outlined"
          size="large"
          onClick={() => handleAddPrompt(Object.keys(values).length)}
        >
          <Add />
        </Button>
        <FlexibleSubmitButton
          label="AI에게 요청할 프롬프트 스크립트 생성하기"
          valid={validButton}
        />
      </ContentContainer>
    </form>
  );
}

export default PromptForm;
