'use client';
import * as React from 'react';
import {
  Box,
  styled,
  Tab,
  Tabs,
  Typography,
  tabClasses,
  useTheme,
  Button,
  useMediaQuery,
} from '@mui/material';
import { MotionSpanAnimated } from '@/components/Helpers/motionSpanAnimation.component';
import zIndex from '@mui/material/styles/zIndex';

const StyledMenuCarouselWrapper = styled(Box)(({ theme: t }) => ({
  borderRadius: '18px',
  border: 'solid black 8px',
  backgroundColor: 'white',
  color: 'black',
}));

const StyledTab = styled(Tab)({
  opacity: 1,
});

const StyledDownloadButton = styled(Button)(
  ({ theme }) => `

  color: black;
  background-color: white;
  border-radius: 33px;
  padding: 16px 48px;
  font-weight: ${theme.typography.hero_super.fontWeight};
  font-size: calc(18px + 0.390625vw);
  border: solid 2px black;
  &:hover {
    background-color: white;
    color: ${theme.palette.primary.main}
  }
`,
);

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

const BigBitesCarousel = [
  {
    imageSrc: '',
    dishName: '',
  },
];

const MenuSection = ({
  menuOptions,
  menuSection,
}: {
  menuOptions: { menuItem: string; ingredients: string; price: string }[];
  menuSection: string;
}) => {
  const { typography, palette } = useTheme();
  const isMobile = useMediaQuery('(max-width:640px)');
  // console.log(typography.hero_semibold);
  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
      <Box
        sx={{
          ...typography.hero_super_italic,
          fontSize: isMobile ? '60px' : '70px',
          fontFamily: typography.fontFamily,
          lineHeight: '70%',
        }}
        id={`${menuSection}_list`}
      >
        {menuSection}
      </Box>
      <Box
        component="ul"
        sx={{ display: 'flex', flexDirection: 'column', gap: '12px' }}
        aria-labelledby={`${menuSection}_list`}
      >
        {menuOptions.map((option, index) => (
          <Box
            key={index}
            sx={{ display: 'flex', flexDirection: 'column', gap: '4px' }}
            component="li"
          >
            <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
              <Box
                sx={{
                  ...typography.hero_medium,
                  fontSize: '14px',
                  display: 'flex',
                  alignItems: 'center',
                }}
              >
                {option.menuItem}
              </Box>
              <Box
                sx={{
                  borderWidth: 0,
                  borderStyle: 'dashed',
                  borderBottomWidth: '1px',
                  transform: 'translateY(-40%)',
                  // width: '100%',
                  flexGrow: 2,
                  margin: '0 8px',
                  display: 'flex',
                }}
              ></Box>
              <Box
                sx={{
                  ...typography.hero_regular,
                  fontSize: '12px',
                  display: 'flex',
                  alignItems: 'center',
                }}
              >
                {option.price}
              </Box>
            </Box>
            <Box sx={{ ...typography.hero_light_italic, fontSize: '10px' }}>
              {option.ingredients}
            </Box>
          </Box>
        ))}
      </Box>
    </Box>
  );
};

export const MenuCarousel = () => {
  const [value, setValue] = React.useState(0);
  const isMobile = useMediaQuery('(max-width:640px)');
  const { typography, palette } = useTheme();

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  function a11yProps(index: number) {
    return {
      id: `simple-tab-${index}`,
      'aria-controls': `simple-tabpanel-${index}`,
    };
  }

  // console.log(tabClasses);
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        position: 'relative',
        zIndex: 20,
        fontFamily: typography.fontFamily,
      }}
    >
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          gap: '32px',
          margin: '0px auto',
          padding: '24px',
          width: '100%',
        }}
      >
        <StyledMenuCarouselWrapper>
          <Box
            sx={{
              margin: '24px',
              display: 'flex',
              flexDirection: 'column',
              gap: '32px',
            }}
          >
            <Box
              sx={{
                ...typography.hero_super_italic,
                fontSize: isMobile ? '60px' : '100px',
                lineHeight: '70%',
              }}
            >
              GOLF & <br />
              GOURMET
            </Box>
            {/* Tab section */}
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
              </Tabs>
            </Box>
            <CustomTabPanel value={value} index={0}>
              Item One
            </CustomTabPanel>
            <CustomTabPanel value={value} index={1}>
              Item Two
            </CustomTabPanel>

            <Box sx={{ display: 'flex', flexDirection: 'column', gap: '56px' }}>
              <MenuSection
                menuSection="BIG BITES"
                menuOptions={[
                  {
                    menuItem: 'Margherita Pizza',
                    ingredients: 'TOMATO SAUCE, BASIL, MOZZARELLA, PARMESAN',
                    price: '$50.00',
                  },
                  {
                    menuItem: 'Margherita Pizza',
                    ingredients: 'TOMATO SAUCE, BASIL, MOZZARELLA, PARMESAN',
                    price: '$50.00',
                  },
                  {
                    menuItem: 'Margherita Pizza',
                    ingredients: 'TOMATO SAUCE, BASIL, MOZZARELLA, PARMESAN',
                    price: '$50.00',
                  },
                  {
                    menuItem: 'Margherita Pizza',
                    ingredients: 'TOMATO SAUCE, BASIL, MOZZARELLA, PARMESAN',
                    price: '$50.00',
                  },
                ]}
              />
              <MenuSection
                menuSection="SMALL BITES"
                menuOptions={[
                  {
                    menuItem: 'Margherita Pizza',
                    ingredients: 'TOMATO SAUCE, BASIL, MOZZARELLA, PARMESAN',
                    price: '$50.00',
                  },
                  {
                    menuItem: 'Margherita Pizza',
                    ingredients: 'TOMATO SAUCE, BASIL, MOZZARELLA, PARMESAN',
                    price: '$50.00',
                  },
                  {
                    menuItem: 'Margherita Pizza',
                    ingredients: 'TOMATO SAUCE, BASIL, MOZZARELLA, PARMESAN',
                    price: '$50.00',
                  },
                  {
                    menuItem: 'Margherita Pizza',
                    ingredients: 'TOMATO SAUCE, BASIL, MOZZARELLA, PARMESAN',
                    price: '$50.00',
                  },
                ]}
              />
            </Box>
          </Box>
        </StyledMenuCarouselWrapper>
        <Button
          sx={{ alignSelf: isMobile ? 'center' : 'flex-end' }}
          disableRipple
          disableElevation
          disableFocusRipple
          disableTouchRipple
          variant="secondary"
        >
          {/* <MotionSpanAnimated label="Download Full Menu PDF" /> */}
          Download Full Menu PDF &rarr;
        </Button>
      </Box>
    </Box>
  );
};
