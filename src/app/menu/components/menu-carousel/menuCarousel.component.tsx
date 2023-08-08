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
  buttonClasses,
  buttonBaseClasses,
} from '@mui/material';
import { MotionSpanAnimated } from '@/components/Helpers/motionSpanAnimation.component';
import zIndex from '@mui/material/styles/zIndex';

const StyledMenuCarouselWrapper = styled(Box)(({ theme: t }) => ({
  borderRadius: '18px',
  border: 'solid black 2px',
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
  font-size: 18px;
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
  console.log(typography.hero_semibold);
  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
      <Box
        sx={{
          fontSize: '28px',
          ...typography.hero_semibold,
          fontFamily: typography.fontFamily,
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
            <Box sx={{ ...typography.hero_medium, fontSize: '14px' }}>
              {option.menuItem}
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

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  function a11yProps(index: number) {
    return {
      id: `simple-tab-${index}`,
      'aria-controls': `simple-tabpanel-${index}`,
    };
  }

  console.log(tabClasses);
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        position: 'relative',
        zIndex: 20,
      }}
    >
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          gap: '32px',
          margin: '100px auto',
          minWidth: '1084px',
        }}
      >
        <StyledMenuCarouselWrapper>
          <Box sx={{ margin: '24px' }}>
            <Box
              sx={{ fontWeight: '900', fontStyle: 'italic', fontSize: '100px' }}
            >
              GOLF & <br />
              &nbsp;&nbsp;&nbsp;GORUMET
            </Box>
            {/* Tab section */}
            <Box>
              <Tabs
                value={value}
                onChange={handleChange}
                aria-label="basic tabs example"
                sx={{ flexDirection: 'column' }}
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
                menuSection="SHAREABLES"
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
                menuSection="MAINS"
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
                menuSection="SANDWICHES"
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
        <StyledDownloadButton
          sx={{ width: 'max-content', alignSelf: 'flex-end' }}
          disableRipple
        >
          {/* <MotionSpanAnimated label="Download Full Menu PDF" /> */}
          Download Full Menu PDF
        </StyledDownloadButton>
      </Box>
    </Box>
  );
};
