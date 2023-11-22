'use client';

import { Box, useTheme, Tab, Tabs, Typography } from '@mui/material';
import * as React from 'react';
import { PricesTab } from './components/tabs/pricesTab/pricesTab.component';
import { ParkingTab } from './components/tabs/parkingTab/parkingTab.component';
import { CoachingTab } from './components/tabs/coachingTab/coachingTab.component';
import { TabCard } from './components/tabs/components/tabCard/tabCard.component';

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
        <Box sx={{ p: 3, display: 'flex', justifyContent: 'center' }}>
          {children}
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
  //const isMobile = useMediaQuery('(max-width:640px)');

  React.useEffect(() => {
    console.log(value);
  }, [value]);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  const handleChangeIndex = (index) => {
    setValue(index);
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
        {/* <PricesTab /> */}
        <TabCard
          title="Tapas Style Menu"
          buttonOne={{
            variant: 'secondary',
            buttonLabel: 'See Full Menu',
          }}
        >
          something here
        </TabCard>
      </CustomTabPanel>
      <CustomTabPanel value={value} index={1}>
        <TabCard
          title="Prices & Rates"
          buttonOne={{
            variant: 'secondary',
            buttonLabel: 'How it works',
          }}
          buttonTwo={{ variant: 'primary', buttonLabel: 'Find A Bay' }}
        >
          something here
        </TabCard>
      </CustomTabPanel>
      <CustomTabPanel value={value} index={2}>
        <TabCard
          title="Parking"
          buttonOne={{
            variant: 'primary',
            buttonLabel: 'Show on Maps',
          }}
        >
          something here
        </TabCard>
      </CustomTabPanel>
      <CustomTabPanel value={value} index={3}>
        <TabCard
          title="Coaching"
          buttonOne={{
            variant: 'primary',
            buttonLabel: 'Learn More',
          }}
        >
          something here
        </TabCard>
      </CustomTabPanel>
    </Box>
  );
};
