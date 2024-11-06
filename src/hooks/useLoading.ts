import React, { useState } from 'react';

interface UseLoadingProps<T> {
  initialLoadings: T;
}

export function useLoading<T>({ initialLoadings }: UseLoadingProps<T>) {
  const [loadings, setLoadings] = useState(initialLoadings);

  const handleToggleLoading = (name: string, isLoading: boolean) => {
    setLoadings((prev) => ({ ...prev, [name]: isLoading }));
  };

  return { loadings, handleToggleLoading };
}
