'use client';
import * as React from 'react';
import {
  Box,
  styled,
  Tab,
  Tabs,
  useTheme,
  Button,
  useMediaQuery,
} from '@mui/material';
import { SpinningMenuHeading } from './components/spinningMenuHeading/spinningMenuHeading.component';
import { MotionSpanAnimated } from '@/components/Helpers/motionSpanAnimation.component';
import { Typography } from '@/components/Typography/typography.component';
import Image from 'next/image';
import { MenuOptions } from './menuItems';
import { useRouter, usePathname } from 'next/navigation';
import { MenuSection } from './components/menuSection/menuSection.component';

const StyledMenuWrapper = styled(Box)(() => ({
  borderRadius: '25px',
  border: 'solid black 6px',
  backgroundColor: 'white',
  color: 'black',
}));

const StyledTab = styled(Tab)({
  opacity: 1,
});

interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

function CustomTabPanel(props: TabPanelProps) {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const { children, value, index, ...other } = props;

  // const isMobileView = value !== index

  return (
    <div
      role="tabpanel"
      hidden={!isMobile && value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {true && <Box sx={{ p: isMobile ? 0 : 3 }}>{children}</Box>}
    </div>
  );
}

export const Menu = () => {
  const [value, setValue] = React.useState(0);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const isLargeDesktop = useMediaQuery('(min-width:1440px)');
  const router = useRouter();

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  function a11yProps(index: number) {
    return {
      id: `simple-tab-${index}`,
      'aria-controls': `simple-tabpanel-${index}`,
    };
  }

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        position: 'relative',
        zIndex: 20,

        margin: isLargeDesktop ? '15px 10% 5px' : '15px 5% 5px',
      }}
    >
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          gap: '32px',
          margin: '0px auto',
          width: '100%',
        }}
      >
        <Box
          sx={{
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: isMobile ? 'center' : 'space-between',
            gap: '12px',
          }}
        >
          <SpinningMenuHeading />
          <Typography variant="base" alignSelf="center">
            Swing into flavour with our culinary delights
          </Typography>
        </Box>
        <StyledMenuWrapper>
          <Box
            sx={{
              //margin: '24px',
              // padding: '5%',
              padding: '24px',
              display: 'flex',
              flexDirection: 'column',
              gap: '32px',
            }}
          >
            <Box sx={{ display: 'flex', gap: '24px' }}>
              <Box
                sx={{
                  height: '100%',
                  flex: 1,
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '24px',
                }}
              >
                {MenuOptions.map((option, index) => (
                  <CustomTabPanel
                    index={index}
                    value={value}
                    key={`menu_option_${index}`}
                  >
                    <MenuSection
                      menuSection={option.option.toLocaleUpperCase()}
                      menuItems={option.items}
                    />
                  </CustomTabPanel>
                ))}
              </Box>
              {!isMobile && (
                <Box sx={{ display: 'flex', flexDirection: 'column', flex: 1 }}>
                  <Box>
                    <Tabs
                      value={value}
                      onChange={handleChange}
                      aria-label="menu tabs"
                      sx={{
                        flexDirection: 'column',
                        // justifyContent: isMobile ? 'center' : 'initial',
                        '.MuiTabs-indicator': {
                          backgroundColor: 'transparent',
                        },
                        '.MuiTabs-flexContainer': {
                          flexWrap: 'wrap',
                          justifyContent: 'center',
                        },
                      }}
                      centered={isMobile}
                    >
                      <StyledTab
                        label={<MotionSpanAnimated label="Big Bites" />}
                        {...a11yProps(0)}
                      />
                      <StyledTab
                        label={<MotionSpanAnimated label="Small Bites" />}
                        {...a11yProps(1)}
                      />
                      <StyledTab
                        label={<MotionSpanAnimated label="Desert" />}
                        {...a11yProps(1)}
                      />
                    </Tabs>
                  </Box>
                  <Box
                    sx={{
                      height: '100%',
                      position: 'relative',
                      width: '100%',
                      borderWidth: '2px',
                      borderStyle: 'solid',
                      borderColor: theme.palette.aceTeal,
                      borderRadius: '8px',
                    }}
                  >
                    <Image
                      src="/images/placeholder1.png"
                      alt="img"
                      fill
                      style={{
                        objectFit: 'cover',
                        objectPosition: 'center',
                        borderRadius: 'inherit',
                      }}
                    />
                  </Box>
                </Box>
              )}
            </Box>
          </Box>
        </StyledMenuWrapper>
        <Button
          sx={{ alignSelf: 'center' }}
          disableRipple
          disableElevation
          disableFocusRipple
          disableTouchRipple
          variant="secondary"
          onClick={() => router.push('/book-now')}
        >
          {/* <MotionSpanAnimated label="Download Full Menu PDF" /> */}
          Reserve a bay &rarr;
        </Button>
        <Box
          sx={{
            display: 'flex',
            gap: '12px',
            flexDirection: 'column',
          }}
        >
          <Typography variant="largeH1" weight="900" fontStyle="italic">
            The Kitchen
          </Typography>
          <Typography variant="base">
            This is a piece of text about the kitchen, it will tell the people
            how the kitchen. Introduce the chefs and their approach. It will aso
            tell information on when the kitchen is open for everyday for
            golfers and for just dinners. it will also show that the kitchen is
            on uber eats{' '}
          </Typography>
        </Box>
        <Box
          sx={{
            display: 'flex',
            gap: '12px',
            flexDirection: 'column',
          }}
        >
          <Typography variant="largeH1" weight="900" fontStyle="italic">
            The Bar
          </Typography>
          <Typography variant="base">
            This is a piece of text about the kitchen, it will tell the people
            how the kitchen. Introduce the chefs and their approach. It will aso
            tell information on when the kitchen is open for everyday for
            golfers and for just dinners. it will also show that the kitchen is
            on uber eats{' '}
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};
