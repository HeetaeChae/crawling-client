import React, { FormEvent } from 'react';
import { useForm } from 'hooks/useForm';
import { useDeviceWidthStore } from 'store/useDeviceWidthStore';
import { Box, Button, TextField } from '@mui/material';
import { AFFILIATE_MARKETING_PROMPTS } from 'constants/prompts';

interface PromptFormProps {
  name: string;
  onUpdateData: (name: string, newData: any) => void;
}

interface PromptFormValues {
  prompt1: string;
  prompt2: string;
  prompt3: string;
}

function PromptForm({ name, onUpdateData }: PromptFormProps) {
  const { deviceWidth } = useDeviceWidthStore();
  const isMobile = deviceWidth <= 600;

  const { values, handleChangeInput } = useForm<PromptFormValues>({
    initialValues: {
      prompt1: AFFILIATE_MARKETING_PROMPTS.prompt1,
      prompt2: AFFILIATE_MARKETING_PROMPTS.prompt2,
      prompt3: AFFILIATE_MARKETING_PROMPTS.prompt3,
    },
  });

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    //
    e.preventDefault();
    onUpdateData(name, e);
  };

  return (
    <form onSubmit={handleSubmit}>
      <Box sx={{ fontWeight: '600', mb: 2 }} fontSize="large">
        요청 프롬프트
      </Box>
      <Box
        sx={{ display: 'flex', flexDirection: 'column', gap: isMobile ? 2 : 3 }}
      >
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
        <Button
          variant="contained"
          size="large"
          sx={!isMobile ? { flex: 0.5, ml: 'auto' } : {}}
          type="submit"
        >
          AI에게 스크립트 요청하기
        </Button>
      </Box>
    </form>
  );
}

export default PromptForm;
