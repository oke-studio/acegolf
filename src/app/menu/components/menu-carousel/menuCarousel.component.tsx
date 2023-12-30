'use client';
import * as React from 'react';
import {
  Box,
  styled,
  Tab,
  Tabs,
  tabClasses,
  useTheme,
  Button,
  useMediaQuery,
} from '@mui/material';
import { motion } from 'framer-motion';
import { MotionSpanAnimated } from '@/components/Helpers/motionSpanAnimation.component';
import { Typography } from '@/components/Typography/typography.component';
import zIndex from '@mui/material/styles/zIndex';

const StyledMenuCarouselWrapper = styled(Box)(({ theme: t }) => ({
  borderRadius: '25px',
  border: 'solid black 6px',
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
      {value === index && <Box sx={{ p: 3 }}>{children}</Box>}
      {value === index && <Box sx={{ p: 3 }}>{children}</Box>}
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
  const isLargeDesktop = useMediaQuery('(min-width:1440px)');
  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
      <Typography
        variant="largeH1"
        weight="900"
        fontStyle="italic"
        id={`${menuSection}_list`}
      >
        {menuSection}
      </Typography>
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
              <Typography
                variant="base"
                sx={{
                  display: 'flex',
                  alignItems: 'center',
                }}
              >
                {option.menuItem}
              </Typography>
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
              <Typography variant="base">{option.price}</Typography>
            </Box>
            <Typography variant="base">{option.ingredients}</Typography>
            <Typography variant="base">{option.ingredients}</Typography>
          </Box>
        ))}
      </Box>
    </Box>
  );
};

const SpinningMenuHeading = () => {
  const SpinningBox = ({
    front,
    bottom,
    back,
    top,
  }: {
    front: string;
    bottom: string;
    back: string;
    top: string;
  }) => {
    return (
      <Box
        component={motion.span}
        className="relative h-20 w-72 font-black uppercase"
        sx={{
          width: '24rem',
          height: '6rem',
          fontWeight: 900,
          textTransform: 'uppercase',
        }}
        style={{
          transformStyle: 'preserve-3d',
          transformOrigin: 'center center -40px',
        }}
        initial={{ rotateX: '0deg' }}
        animate={{
          rotateX: [
            '0deg',
            '90deg',
            '90deg',
            '180deg',
            '180deg',
            '270deg',
            '270deg',
            '360deg',
          ],
        }}
        transition={{
          repeat: Infinity,
          duration: 10,
          ease: 'backInOut',
          times: [0, 0.2, 0.25, 0.45, 0.5, 0.7, 0.75, 1],
        }}
      >
        {/* FRONT */}
        <Typography
          variant="largeH1"
          sx={{
            position: 'absolute',
            display: 'flex',
            height: '100%',
            width: '100%',
            justifyContent: 'center',
            borderWidth: '2px',
            borderColor: '#818CF8',
            color: '#ffffff',
            backgroundColor: '#4F46E5',
          }}
          weight="900"
        >
          {front}
        </Typography>

        {/* BOTTOM */}
        <Typography
          variant="largeH1"
          style={{ transform: 'translateY(5rem) rotateX(-90deg)' }}
          sx={{
            position: 'absolute',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            borderWidth: '2px',
            borderColor: '#818CF8',
            width: '100%',
            height: '100%',
            color: '#ffffff',
            backgroundColor: '#4F46E5',
            transformOrigin: 'top',
          }}
          weight="900"
        >
          {bottom}
        </Typography>

        {/* TOP */}
        <Typography
          variant="largeH1"
          style={{ transform: 'translateY(-5rem) rotateX(90deg)' }}
          sx={{
            position: 'absolute',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            borderWidth: '2px',
            borderColor: '#818CF8',
            width: '100%',
            height: '100%',
            color: '#ffffff',
            backgroundColor: '#4F46E5',
            transformOrigin: 'bottom',
          }}
          weight="900"
        >
          {top}
        </Typography>

        {/* BACK */}
        <Typography
          variant="largeH1"
          style={{
            transform: 'translateZ(-5rem) rotateZ(-180deg) rotateY(180deg)',
          }}
          sx={{
            position: 'absolute',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            borderWidth: '2px',
            borderColor: '#818CF8',
            width: '100%',
            height: '100%',
            color: '#ffffff',
            backgroundColor: '#4F46E5',
            transformOrigin: 'center',
          }}
          weight="900"
        >
          {back}
        </Typography>
      </Box>
    );
  };

  return (
    <Typography
      variant="largeH1"
      weight="900"
      fontStyle="italic"
      // lineHeight="70%"
      display="flex"
      flexDirection="column"
    >
      GOLF &{' '}
      <SpinningBox
        front="Gourmet"
        bottom="Drinks"
        back="Desserts"
        top="Gourmet"
      />
    </Typography>
  );
};

export const MenuCarousel = () => {
  const [value, setValue] = React.useState(0);
  const isMobile = useMediaQuery('(max-width:640px)');
  const isLargeDesktop = useMediaQuery('(min-width:1440px)');
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
            // ...typography.hero_super_italic,
            // fontSize: isMobile ? '60px' : '100px',
            // lineHeight: '70%',
            // marginBottom: '30px',
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'space-between',
          }}
        >
          {/* <Typography variant="base" lineHeight="70%" marginBottom="30px">
            GOLF & <br />
            GOURMET
          </Typography> */}
          <SpinningMenuHeading />
          <Typography variant="base" alignSelf="center">
            Swing into flavour with our culinary delights
          </Typography>
        </Box>
        <StyledMenuCarouselWrapper>
          <Box
            sx={{
              //margin: '24px',
              padding: '5%',
              display: 'flex',
              flexDirection: 'column',
              gap: '32px',
            }}
          >
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
                <StyledTab
                  label={<MotionSpanAnimated label="Desert" />}
                  {...a11yProps(1)}
                />
              </Tabs>
            </Box>
            <CustomTabPanel value={value} index={0}>
              <MenuSection
                menuSection="BIG BITES"
                menuOptions={[
                  {
                    menuItem:
                      'Nori dusted Kettle Chips w/ Yuzu Kosho and Chive Sour Cream',
                    ingredients: 'TOMATO SAUCE, BASIL, MOZZARELLA, PARMESAN',
                    price: '$50.00',
                  },
                  {
                    menuItem: 'Rice Paper Slaw with sakura shrimp',
                    ingredients: 'TOMATO SAUCE, BASIL, MOZZARELLA, PARMESAN',
                    price: '$50.00',
                  },
                  {
                    menuItem: 'Tamarind Leche de Tigre with prawn chips',
                    ingredients: 'TOMATO SAUCE, BASIL, MOZZARELLA, PARMESAN',
                    price: '$50.00',
                  },
                  {
                    menuItem: 'Black Garlic Bruschetta w/ homemade riccota',
                    ingredients: 'TOMATO SAUCE, BASIL, MOZZARELLA, PARMESAN',
                    price: '$50.00',
                  },
                  {
                    menuItem:
                      'Burrata w/ House chili crisp and Cucumber salad with black vinegar and Scallion pancake',
                    ingredients: 'TOMATO SAUCE, BASIL, MOZZARELLA, PARMESAN',
                    price: '$50.00',
                  },
                  {
                    menuItem: 'Build your own taco board',
                    ingredients: 'TOMATO SAUCE, BASIL, MOZZARELLA, PARMESAN',
                    price: '$50.00',
                  },
                  {
                    menuItem: '5 spice duck breast',
                    ingredients: 'TOMATO SAUCE, BASIL, MOZZARELLA, PARMESAN',
                    price: '$50.00',
                  },
                  {
                    menuItem: 'Curry and salted egg fish taco',
                    ingredients: 'TOMATO SAUCE, BASIL, MOZZARELLA, PARMESAN',
                    price: '$50.00',
                  },
                  {
                    menuItem: 'Bun bo hue Taco',
                    ingredients: 'TOMATO SAUCE, BASIL, MOZZARELLA, PARMESAN',
                    price: '$50.00',
                  },
                ]}
              />
            </CustomTabPanel>
            <CustomTabPanel value={value} index={1}>
              <MenuSection
                menuSection="SMALL BITES"
                menuOptions={[
                  {
                    menuItem:
                      'Nori dusted Kettle Chips w/ Yuzu Kosho and Chive Sour Cream',
                    ingredients: 'TOMATO SAUCE, BASIL, MOZZARELLA, PARMESAN',
                    price: '$50.00',
                  },
                  {
                    menuItem: 'Rice Paper Slaw with sakura shrimp',
                    ingredients: 'TOMATO SAUCE, BASIL, MOZZARELLA, PARMESAN',
                    price: '$50.00',
                  },
                  {
                    menuItem: 'Tamarind Leche de Tigre with prawn chips',
                    ingredients: 'TOMATO SAUCE, BASIL, MOZZARELLA, PARMESAN',
                    price: '$50.00',
                  },
                  {
                    menuItem: 'Black Garlic Bruschetta w/ homemade riccota',
                    ingredients: 'TOMATO SAUCE, BASIL, MOZZARELLA, PARMESAN',
                    price: '$50.00',
                  },
                  {
                    menuItem:
                      'Burrata w/ House chili crisp and Cucumber salad with black vinegar and Scallion pancake',
                    ingredients: 'TOMATO SAUCE, BASIL, MOZZARELLA, PARMESAN',
                    price: '$50.00',
                  },
                  {
                    menuItem: 'Build your own taco board',
                    ingredients: 'TOMATO SAUCE, BASIL, MOZZARELLA, PARMESAN',
                    price: '$50.00',
                  },
                  {
                    menuItem: '5 spice duck breast',
                    ingredients: 'TOMATO SAUCE, BASIL, MOZZARELLA, PARMESAN',
                    price: '$50.00',
                  },
                  {
                    menuItem: 'Curry and salted egg fish taco',
                    ingredients: 'TOMATO SAUCE, BASIL, MOZZARELLA, PARMESAN',
                    price: '$50.00',
                  },
                  {
                    menuItem: 'Bun bo hue Taco',
                    ingredients: 'TOMATO SAUCE, BASIL, MOZZARELLA, PARMESAN',
                    price: '$50.00',
                  },
                ]}
              />
            </CustomTabPanel>
            <CustomTabPanel value={value} index={2}>
              <MenuSection
                menuSection="BIG BITES"
                menuOptions={[
                  {
                    menuItem:
                      'Nori dusted Kettle Chips w/ Yuzu Kosho and Chive Sour Cream',
                    ingredients: 'TOMATO SAUCE, BASIL, MOZZARELLA, PARMESAN',
                    price: '$50.00',
                  },
                  {
                    menuItem: 'Rice Paper Slaw with sakura shrimp',
                    ingredients: 'TOMATO SAUCE, BASIL, MOZZARELLA, PARMESAN',
                    price: '$50.00',
                  },
                  {
                    menuItem: 'Tamarind Leche de Tigre with prawn chips',
                    ingredients: 'TOMATO SAUCE, BASIL, MOZZARELLA, PARMESAN',
                    price: '$50.00',
                  },
                  {
                    menuItem: 'Black Garlic Bruschetta w/ homemade riccota',
                    ingredients: 'TOMATO SAUCE, BASIL, MOZZARELLA, PARMESAN',
                    price: '$50.00',
                  },
                  {
                    menuItem:
                      'Burrata w/ House chili crisp and Cucumber salad with black vinegar and Scallion pancake',
                    ingredients: 'TOMATO SAUCE, BASIL, MOZZARELLA, PARMESAN',
                    price: '$50.00',
                  },
                  {
                    menuItem: 'Build your own taco board',
                    ingredients: 'TOMATO SAUCE, BASIL, MOZZARELLA, PARMESAN',
                    price: '$50.00',
                  },
                  {
                    menuItem: '5 spice duck breast',
                    ingredients: 'TOMATO SAUCE, BASIL, MOZZARELLA, PARMESAN',
                    price: '$50.00',
                  },
                  {
                    menuItem: 'Curry and salted egg fish taco',
                    ingredients: 'TOMATO SAUCE, BASIL, MOZZARELLA, PARMESAN',
                    price: '$50.00',
                  },
                  {
                    menuItem: 'Bun bo hue Taco',
                    ingredients: 'TOMATO SAUCE, BASIL, MOZZARELLA, PARMESAN',
                    price: '$50.00',
                  },
                ]}
              />
            </CustomTabPanel>

            <Box sx={{ display: 'flex', flexDirection: 'column', gap: '56px' }}>
              {/* <MenuSection
                menuSection="BIG BITES"
                menuOptions={[
                  {
                    menuItem:
                      'Nori dusted Kettle Chips w/ Yuzu Kosho and Chive Sour Cream',
                    ingredients: 'TOMATO SAUCE, BASIL, MOZZARELLA, PARMESAN',
                    price: '$50.00',
                  },
                  {
                    menuItem: 'Rice Paper Slaw with sakura shrimp',
                    ingredients: 'TOMATO SAUCE, BASIL, MOZZARELLA, PARMESAN',
                    price: '$50.00',
                  },
                  {
                    menuItem: 'Tamarind Leche de Tigre with prawn chips',
                    ingredients: 'TOMATO SAUCE, BASIL, MOZZARELLA, PARMESAN',
                    price: '$50.00',
                  },
                  {
                    menuItem: 'Black Garlic Bruschetta w/ homemade riccota',
                    ingredients: 'TOMATO SAUCE, BASIL, MOZZARELLA, PARMESAN',
                    price: '$50.00',
                  },
                  {
                    menuItem:
                      'Burrata w/ House chili crisp and Cucumber salad with black vinegar and Scallion pancake',
                    ingredients: 'TOMATO SAUCE, BASIL, MOZZARELLA, PARMESAN',
                    price: '$50.00',
                  },
                  {
                    menuItem: 'Build your own taco board',
                    ingredients: 'TOMATO SAUCE, BASIL, MOZZARELLA, PARMESAN',
                    price: '$50.00',
                  },
                  {
                    menuItem: '5 spice duck breast',
                    ingredients: 'TOMATO SAUCE, BASIL, MOZZARELLA, PARMESAN',
                    price: '$50.00',
                  },
                  {
                    menuItem: 'Curry and salted egg fish taco',
                    ingredients: 'TOMATO SAUCE, BASIL, MOZZARELLA, PARMESAN',
                    price: '$50.00',
                  },
                  {
                    menuItem: 'Bun bo hue Taco',
                    ingredients: 'TOMATO SAUCE, BASIL, MOZZARELLA, PARMESAN',
                    price: '$50.00',
                  },
                ]}
              /> */}
              {/* <MenuSection
                menuSection="SMALL BITES"
                menuOptions={[
                  {
                    menuItem: 'Bread and butter board ',
                    ingredients: 'TOMATO SAUCE, BASIL, MOZZARELLA, PARMESAN',
                    price: '$50.00',
                  },
                  {
                    menuItem: 'Brown butter honey truffle butter',
                    ingredients: 'TOMATO SAUCE, BASIL, MOZZARELLA, PARMESAN',
                    price: '$50.00',
                  },
                  {
                    menuItem: 'Cowboy butter',
                    ingredients: 'TOMATO SAUCE, BASIL, MOZZARELLA, PARMESAN',
                    price: '$50.00',
                  },
                  {
                    menuItem: 'Miso chili butter',
                    ingredients: 'TOMATO SAUCE, BASIL, MOZZARELLA, PARMESAN',
                    price: '$50.00',
                  },
                  {
                    menuItem: 'Enoki Trees with Super garlic aioli',
                    ingredients: 'TOMATO SAUCE, BASIL, MOZZARELLA, PARMESAN',
                    price: '$50.00',
                  },
                  {
                    menuItem: 'Braised charsiu Slider',
                    ingredients: 'TOMATO SAUCE, BASIL, MOZZARELLA, PARMESAN',
                    price: '$50.00',
                  },
                  {
                    menuItem: 'Hot Honey Karaage Slider x3',
                    ingredients: 'TOMATO SAUCE, BASIL, MOZZARELLA, PARMESAN',
                    price: '$50.00',
                  },
                  {
                    menuItem: 'Bulgolgi Slider',
                    ingredients: 'TOMATO SAUCE, BASIL, MOZZARELLA, PARMESAN',
                    price: '$50.00',
                  },
                  {
                    menuItem: 'Ike Karaage w/yuzu kosho aioli ',
                    ingredients: 'TOMATO SAUCE, BASIL, MOZZARELLA, PARMESAN',
                    price: '$50.00',
                  },
                  {
                    menuItem: 'Frybasket ',
                    ingredients: 'TOMATO SAUCE, BASIL, MOZZARELLA, PARMESAN',
                    price: '$50.00',
                  },
                  {
                    menuItem: 'Truffle salted yolk fry',
                    ingredients: 'TOMATO SAUCE, BASIL, MOZZARELLA, PARMESAN',
                    price: '$50.00',
                  },
                  {
                    menuItem: 'Kimchi ',
                    ingredients: 'TOMATO SAUCE, BASIL, MOZZARELLA, PARMESAN',
                    price: '$50.00',
                  },
                ]}
              />

              <MenuSection
                menuSection="DESERT"
                menuOptions={[
                  {
                    menuItem: 'Panna cotta with black sesame truffle cream ',
                    ingredients: 'TOMATO SAUCE, BASIL, MOZZARELLA, PARMESAN',
                    price: '$50.00',
                  },
                  {
                    menuItem: 'Beignets',
                    ingredients: 'TOMATO SAUCE, BASIL, MOZZARELLA, PARMESAN',
                    price: '$50.00',
                  },
                  {
                    menuItem: 'Ube',
                    ingredients: 'TOMATO SAUCE, BASIL, MOZZARELLA, PARMESAN',
                    price: '$50.00',
                  },
                  {
                    menuItem: 'Matcha',
                    ingredients: 'TOMATO SAUCE, BASIL, MOZZARELLA, PARMESAN',
                    price: '$50.00',
                  },
                  {
                    menuItem: 'Miso Caramel',
                    ingredients: 'TOMATO SAUCE, BASIL, MOZZARELLA, PARMESAN',
                    price: '$50.00',
                  },
                  {
                    menuItem: 'Mango prosecco sorbet',
                    ingredients: 'TOMATO SAUCE, BASIL, MOZZARELLA, PARMESAN',
                    price: '$50.00',
                  },
                ]}
              /> */}
            </Box>
          </Box>
        </StyledMenuCarouselWrapper>
        <Button
          sx={{ alignSelf: 'center' }}
          disableRipple
          disableElevation
          disableFocusRipple
          disableTouchRipple
          variant="secondary"
        >
          {/* <MotionSpanAnimated label="Download Full Menu PDF" /> */}
          Reserve a bay &rarr;
        </Button>
        <Box
          sx={{
            display: 'flex',
            flexDirection: isMobile ? 'column' : 'row',
            gap: '24px',
          }}
        >
          <Box sx={{ display: 'flex', gap: '12px', flexDirection: 'column' }}>
            <Typography variant="base">About the kitchen</Typography>
            <Typography variant="base">
              This is a piece of text about the kitchen, it will tell the people
              how the kitchen. Introduce the chefs and their approach. It will
              aso tell information on when the kitchen is open for everyday for
              golfers and for just dinners. it will also show that the kitchen
              is on uber eats{' '}
            </Typography>
          </Box>
          <Box
            sx={{
              borderRadius: '8px',
              backgroundColor: 'grey',
              width: '100%',
              height: 'auto',
            }}
          ></Box>
        </Box>
        <Box
          sx={{
            display: 'flex',
            flexDirection: isMobile ? 'column' : 'row-reverse',
            gap: '24px',
          }}
        >
          <Box sx={{ display: 'flex', gap: '12px', flexDirection: 'column' }}>
            <Typography variant="base">About the bar</Typography>
            <Typography variant="base">
              This is a piece of text about the kitchen, it will tell the people
              how the kitchen. Introduce the chefs and their approach. It will
              aso tell information on when the kitchen is open for everyday for
              golfers and for just dinners. it will also show that the kitchen
              is on uber eats{' '}
            </Typography>
          </Box>
          <Box
            sx={{
              borderRadius: '8px',
              backgroundColor: 'grey',
              width: '100%',
              height: 'auto',
            }}
          ></Box>
        </Box>
      </Box>
    </Box>
  );
};
