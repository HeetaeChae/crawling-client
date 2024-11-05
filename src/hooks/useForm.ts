import { useEffect, useState } from 'react';
import {
  validateAffiliateMarketingForm,
  AffiliateMarketingFormValues,
} from 'utils/validateForm';

interface UseFormProps<T> {
  initialValues: T;
}

export function useForm<T>({ initialValues }: UseFormProps<T>) {
  const [values, setValues] = useState<T>(initialValues);

  const handleChangeInput = (name: keyof T, text: string) => {
    setValues((prev) => ({ ...prev, [name]: text }));
  };

  return { values, handleChangeInput };
}
