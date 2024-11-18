import { useState } from 'react';

export function useUrlForm() {
  const [urls, setUrls] = useState<string[]>(['']);

  const handleAddUrl = () => {
    setUrls((prev) => [...prev, '']);
  };

  const handleDeleteUrl = (indexToRemove: number) => {
    if (indexToRemove <= 0) {
      return;
    }

    const newUrls = [...urls];
    newUrls.splice(indexToRemove, 1);
    setUrls([...newUrls]);
  };

  const handleChangeUrlInput = (indexToChange: number, newUrlValue: string) => {
    setUrls((prev) =>
      prev.map((urlValue, urlIndex) =>
        urlIndex === indexToChange ? newUrlValue : urlValue,
      ),
    );
  };

  return { urls, handleAddUrl, handleDeleteUrl, handleChangeUrlInput };
}
