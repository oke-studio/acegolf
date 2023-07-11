'use client';

import * as React from 'react';
import Image from 'next/image';
import styles from './page.module.css';
import { ThemeProvider, CircularProgress } from '@mui/material';
import { createTheme } from '@mui/material/styles';
import { useRouter } from 'next/navigation';

const theme = createTheme({
  typography: {
    fontFamily: 'new-hero',
  },
});

export default function Home() {
  //TODO
  // const routeToComingSoon = localStorage.getItem("isComingSoon");
  // routeToComingSoon && return
  const router = useRouter();
  React.useEffect(() => {
    router.push('/comingsoon');
  }, []);

  return (
    <ThemeProvider theme={theme}>
      <main className={styles.main}>
        <CircularProgress />
      </main>
    </ThemeProvider>
  );
}
