import React, { useState } from 'react';

interface UseSharedDataProps<T> {
  initialDatas: T;
}

export function useLifting<T>({ initialDatas }: UseSharedDataProps<T>) {
  const [datas, setDatas] = useState<T>(initialDatas);

  const handleUpdateData = (name: string, newData: any) => {
    setDatas((prev) => ({ ...prev, [name]: newData }));
  };

  return { datas, handleUpdateData };
}
