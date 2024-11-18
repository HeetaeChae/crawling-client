import { useState } from 'react';

export function useAdditionalPrompt() {
  const [additionalPrompts, setAdditionalPrompts] = useState<
    { label: string; key: string; value: string }[]
  >([]);

  const handleAddPrompt = (originPromptCount: number) => {
    const newPromptCount = originPromptCount + additionalPrompts.length + 1;

    const newPromptLabel = `프롬프트 #${newPromptCount}`;
    const newPromptKey = `prompt${newPromptCount}`;
    const newPromptValue = '';

    setAdditionalPrompts((prev) => [
      ...prev,
      { label: newPromptLabel, key: newPromptKey, value: newPromptValue },
    ]);
  };

  const handleDeleteLastPrompt = () => {
    setAdditionalPrompts((prev) => {
      const newPrompts = [...prev];
      newPrompts.pop();
      return newPrompts;
    });
  };

  const handleChangePromptInput = (name: string, newValue: string) => {
    setAdditionalPrompts((prev) =>
      prev.map((prompt) =>
        prompt.key === name ? { ...prompt, value: newValue } : prompt,
      ),
    );
  };

  return {
    additionalPrompts,
    handleAddPrompt,
    handleDeleteLastPrompt,
    handleChangePromptInput,
  };
}
