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

  const handleChangeInput = (name: keyof T, newValue: string | number) => {
    setValues((prev) => ({ ...prev, [name]: newValue }));
  };

  return { values, handleChangeInput };
}
