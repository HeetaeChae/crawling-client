import React, { FormEvent } from 'react';
import { useForm } from 'hooks/useForm';
import { TextField } from '@mui/material';
import { AFFILIATE_MARKETING_PROMPTS } from 'constants/prompts';
import ContentContainer from './ui/ContentContainer';
import ContentTitle from './ui/ContentTitle';
import FlexibleSubmitButton from './ui/FlexibleSubmitButton';

interface PromptFormProps {
  name: string;
  onUpdateData: (name: string, newData: any) => void;
  onToggleLoading: (name: string, isLoading: boolean) => void;
  validButton: boolean;
}

interface PromptFormValues {
  prompt1: string;
  prompt2: string;
  prompt3: string;
}

function PromptForm({
  name,
  onUpdateData,
  onToggleLoading,
  validButton,
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

    onToggleLoading(name, true);
    // dummy 데이터를 받음.
    setTimeout(() => {
      onUpdateData(name, e);
      onToggleLoading(name, false);
    }, 3000);
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
        <FlexibleSubmitButton
          label="AI에게 스크립트 요청하기"
          valid={validButton}
        />
      </ContentContainer>
    </form>
  );
}

export default PromptForm;
