'use client';

import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { ThemeContextProvider } from '@/components/Theme-Context/themeContext.component';

export const Providers = ({ children }) => {
  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <ThemeContextProvider>{children}</ThemeContextProvider>
    </LocalizationProvider>
  );
};
