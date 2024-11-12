import { useState } from 'react';

export function useShownPassword() {
  const [showPassword, setShowPassword] = useState(false);

  const handleClickShowPassword = () => {
    setShowPassword((prev) => !prev);
  };

  return { showPassword, handleClickShowPassword };
}
