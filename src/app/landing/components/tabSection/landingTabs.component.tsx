'use client';

import { Box, useTheme, Tab, Tabs, Typography } from '@mui/material';
import * as React from 'react';
import { PricesTab } from './components/tabs/pricesTab/pricesTab.component';

interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

function CustomTabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

function a11yProps(index: number) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

export const LandingTabs = () => {
  const { typography, palette } = useTheme();
  const [value, setValue] = React.useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };
  return (
    <Box
      sx={{
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
      }}
    >
      <Box sx={{ width: 'max-content' }}>
        <Tabs
          value={value}
          onChange={handleChange}
          aria-label="basic tabs example"
          sx={{
            color: 'white',
            borderRadius: '24px',
            backgroundColor: 'black',
            '& .MuiTabs-indicator': {
              backgroundColor: 'transparent',
              background: 'no-repeat url(/images/tab-line.svg) center 50%',
              backgroudSize: '65%',
            },
            '& .MuiTabs-flexContainer': {
              gap: '72px',
            },
            '& .MuiButtonBase-root': {
              color: 'white',
              ...typography.hero_semibold,
              fontSize: '32px',
              textTransform: 'none',
            },
          }}
        >
          <Tab label="Our Menu" {...a11yProps(0)} />
          <Tab label="Prices" {...a11yProps(1)} />
          <Tab label="Parking" {...a11yProps(2)} />
          <Tab label="Coaching" {...a11yProps(2)} />
        </Tabs>
      </Box>
      <CustomTabPanel value={value} index={0}>
        <Box sx={{ display: 'flex', gap: '24px' }}>
          <PricesTab />
          <PricesTab />
        </Box>
      </CustomTabPanel>
      <CustomTabPanel value={value} index={1}>
        <PricesTab />
      </CustomTabPanel>
      <CustomTabPanel value={value} index={2}>
        Item Three
      </CustomTabPanel>
      <CustomTabPanel value={value} index={3}>
        Item Three
      </CustomTabPanel>
    </Box>
  );
};
