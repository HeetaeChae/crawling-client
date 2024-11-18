import { useState } from 'react';

interface useSegmentedButtonProps {
  initialValue: string;
}

export function useSegmentedButton({ initialValue }: useSegmentedButtonProps) {
  const [selectedButton, setSelectedButton] = useState<string>(initialValue);

  const handleSelectButton = (selectedValue: string) => {
    setSelectedButton(selectedValue);
  };

  return { selectedButton, handleSelectButton };
}
