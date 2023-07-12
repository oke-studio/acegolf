'use client';

import * as React from 'react';
import { ThemeProvider } from '@mui/material';
import { createTheme } from '@mui/material/styles';
import ComingSoonPage from './comingsoon/comingSoonPage.component';

const theme = createTheme({
  typography: {
    fontFamily: 'new-hero',
  },
});

export default function Home() {
  return (
    <ThemeProvider theme={theme}>
      <main>
        <ComingSoonPage />
      </main>
    </ThemeProvider>
  );
}
