// 'use client';

import * as React from 'react';
import { Box } from '@mui/material';
import { MenuCarousel } from './components/menu-carousel/menuCarousel.component';

async function getSheets() {
  const response = await fetch(process.env.URL + '/api/menu-data', {
    method: 'GET',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
  });
  // console.log(response);
  if (!response.ok) {
    throw new Error('failed');
  }
  return response.json();
}

export default async function Home() {
  // React.useEffect(() => {}, []);

  getSheets();
  return (
    <div>Hi</div>
    // <Box
    //   sx={{
    //     position: 'relative',
    //     overflow: 'hidden',
    //     backgroundColor: 'transparent',
    //   }}
    // >
    //   <MenuCarousel />
    // </Box>
  );
}
