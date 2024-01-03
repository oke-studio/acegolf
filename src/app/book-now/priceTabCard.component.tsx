'use client';
import * as React from 'react';

import {
  Box,
  useMediaQuery,
  useTheme,
  Tabs,
  Select,
  Tab,
  styled,
  Button,
  FormControl,
  SelectChangeEvent,
  InputLabel,
  InputBase,
  SvgIcon,
} from '@mui/material';

import { Typography } from '@/components/Typography/typography.component';
import dayjs from 'dayjs';

interface TabPanelProps {
  children?: React.ReactNode;
  dir?: string;
  index: number;
  value: number;
}

function TabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`full-width-tabpanel-${index}`}
      aria-labelledby={`full-width-tab-${index}`}
      {...other}
    >
      {value === index && <Box sx={{ pt: 3 }}>{children}</Box>}
    </div>
  );
}

const StyledTabs = styled(Tabs)(({ theme }) => ({
  borderRadius: '12px',
  borderStyle: 'solid',
  borderColor: theme.palette.sharpTeal,
  borderWidth: '3px',
  '& .MuiTabs-indicator': {
    backgroundColor: 'transparent',
  },
  'button:not(:last-child)': {
    borderColor: theme.palette.sharpTeal,
    borderStyle: 'solid',
    borderRightWidth: '3px',
  },
}));

interface StyledTabProps {
  label: string;
  value: number;
}

const StyledTab = styled((props: StyledTabProps) => (
  <Tab disableRipple {...props} />
))(({ theme }) => ({
  textTransform: 'none',
  ...theme.typography.base,
  // fontSize: theme.typography.pxToRem(15),
  // marginRight: theme.spacing(1),
  // color: 'rgba(255, 255, 255, 0.7)',
  '&.Mui-selected': {
    backgroundColor: theme.palette.sharpTeal,
    color: 'black',
  },
  '&.Mui-focusVisible': {
    // backgroundColor: 'rgba(100, 95, 228, 0.32)',
  },
}));

interface PriceContainer {
  price: number;
  color?: 'black' | 'white';
  timeFrom: string;
  timeTo: string;
  backgroundColor?: string;
  bar?: boolean;
  kitchen?: boolean;
  cafe?: boolean;
}

interface PricesTabsContentSkeletonProps {
  title: string;
  description: string;
  priceContainerOne: PriceContainer;
  priceContainerTwo: PriceContainer;
  privatePriceContainer: Omit<
    PriceContainer,
    'timeFrom' | 'timeTo' | 'backgroundColor' | 'bar' | 'kitchen' | 'bar'
  >;
}

const PricesTabsContentSkeleton = ({
  title,
  description,
  priceContainerOne,
  priceContainerTwo,
  privatePriceContainer,
}: PricesTabsContentSkeletonProps) => {
  const theme = useTheme();
  const PriceInfoBox = ({
    price,
    timeFrom,
    timeTo,
    backgroundColor,
    color = 'white',
    bar = false,
    kitchen = false,
    cafe = true,
  }: PriceContainer) => {
    return (
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          gap: '8px',
          color: color,
          width: '100%',
        }}
      >
        <Box
          sx={{
            backgroundColor: backgroundColor ?? theme.palette.green,
            display: 'flex',
            flexDirection: 'column',
            width: '100%',
            minWidth: 'max-content',
            borderRadius: '8px',
            padding: '16px',
            //gap: '8px',
          }}
        >
          <Typography
            variant="miniscule"
            weight="600"
            sx={{
              // color: 'black',
              textTransform: 'uppercase',
            }}
          >{`${timeFrom} - ${timeTo}`}</Typography>
          <Typography variant="headingFour" weight="800">
            ${price}{' '}
            <Typography variant="small" weight="400" sx={{ display: 'inline' }}>
              /hr
            </Typography>
          </Typography>

          <Typography
            variant="miniscule"
            weight="600"
            sx={{
              // color: 'black',
              textTransform: 'uppercase',
            }}
          >
            Standard Bay
          </Typography>
        </Box>
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            // justifyContent: 'center',
          }}
        >
          <Typography variant="miniscule" color="black">
            *Bar {bar ? 'Open' : 'Closed'}, Cafe {cafe ? 'Open' : 'Closed'},
            Kitchen {kitchen ? 'Open' : 'Closed'}
          </Typography>
        </Box>
      </Box>
    );
  };
  return (
    <Box sx={{ display: 'flex', gap: '8px', flexDirection: 'column' }}>
      <Box
        sx={{
          display: 'flex',
          gap: '4px',
          flexDirection: 'column',
          flexWrap: 'wrap',
        }}
      >
        <Typography variant="extralarge" weight="600">
          {title} Pricing
        </Typography>
        <Typography variant="base">{description}</Typography>
      </Box>
      <Box
        sx={{
          display: 'flex',
          gap: '16px',
          flexWrap: 'wrap',
          justifyContent: 'space-between',
        }}
      >
        <PriceInfoBox {...priceContainerOne} />
        <PriceInfoBox {...priceContainerTwo} />
      </Box>
      <Box
        sx={{
          display: 'flex',
          padding: '16px',
          flexDirection: 'column',
          backgroundColor: 'white',
          borderRadius: '8px',
          borderWidth: '3px',
          borderStyle: 'solid',
          borderColor: theme.palette.green,
          width: '100%',
          minHeight: 'max-content',
          height: 'max-content',
          marginBottom: '10px',
        }}
      >
        <Typography variant="headingFour" weight="800">
          ${privatePriceContainer.price}
          <Typography variant="small" weight="400" sx={{ display: 'inline' }}>
            /hr
          </Typography>
        </Typography>
        <Typography
          variant="miniscule"
          weight="600"
          sx={{
            // color: 'black',
            textTransform: 'uppercase',
          }}
        >
          Private Bay
        </Typography>
      </Box>
    </Box>
  );
};

export default function PriceTabCard() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  const currentDate = new Date();

  const [value, setValue] = React.useState(currentDate.getDay());

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: '100%' }}>
      <StyledTabs
        value={value}
        onChange={handleChange}
        textColor="secondary"
        indicatorColor="secondary"
        aria-label="secondary tabs example"
        variant="scrollable"
        scrollButtons="auto"
        sx={{ overflowX: 'scroll', scrollBehavior: 'smooth' }}
      >
        <StyledTab value={1} label="Mon" />
        <StyledTab value={2} label="Tue" />
        <StyledTab value={3} label="Wed" />
        <StyledTab value={4} label="Thu" />
        <StyledTab value={5} label="Fri" />
        <StyledTab value={6} label="Sat" />
        <StyledTab value={0} label="Sun" />
      </StyledTabs>

      <TabPanel value={value} index={0} dir={theme.direction}>
        <PricesTabsContentSkeleton
          title="Sunday"
          description="Prices are per hour, per bay. Each bay accommodates up to 6 players. Prices do not include tax."
          priceContainerOne={{
            price: 39.99,
            timeFrom: '8am',
            timeTo: '5pm',
          }}
          priceContainerTwo={{
            price: 40.99,
            timeFrom: '5pm',
            timeTo: '12am',
          }}
          privatePriceContainer={{ price: 59.99 }}
        />
      </TabPanel>
      <TabPanel value={value} index={1} dir={theme.direction}>
        <PricesTabsContentSkeleton
          title="Monday"
          description="Prices are per hour, per bay. Each bay accommodates up to 6 players. Prices do not include tax."
          priceContainerOne={{
            price: 39.99,
            timeFrom: '8am',
            timeTo: '5pm',
            bar: false,
            cafe: true,
          }}
          priceContainerTwo={{
            price: 40.99,
            timeFrom: '5pm',
            timeTo: '12am',
          }}
          privatePriceContainer={{ price: 59.99 }}
        />
      </TabPanel>
      <TabPanel value={value} index={2} dir={theme.direction}>
        <PricesTabsContentSkeleton
          title="Tuesday"
          description="Prices are per hour, per bay. Each bay accommodates up to 6 players. Prices do not include tax."
          priceContainerOne={{
            price: 50,
            timeFrom: '5pm',
            timeTo: '9pm',
          }}
          priceContainerTwo={{
            price: 50.99,
            timeFrom: '5pm',
            timeTo: '9pm',
          }}
          privatePriceContainer={{ price: 59.99 }}
        />
      </TabPanel>
      <TabPanel value={value} index={3} dir={theme.direction}>
        <PricesTabsContentSkeleton
          title="Wednesday"
          description="Prices are per hour, per bay. Each bay accommodates up to 6 players. Prices do not include tax."
          priceContainerOne={{
            price: 50,
            timeFrom: '5pm',
            timeTo: '9pm',
          }}
          priceContainerTwo={{
            price: 50.99,
            timeFrom: '5pm',
            timeTo: '9pm',
          }}
          privatePriceContainer={{ price: 59.99 }}
        />
      </TabPanel>
      <TabPanel value={value} index={4} dir={theme.direction}>
        <PricesTabsContentSkeleton
          title="Thursday"
          description="Prices are per hour, per bay. Each bay accommodates up to 6 players. Prices do not include tax."
          priceContainerOne={{
            price: 50,
            timeFrom: '5pm',
            timeTo: '9pm',
          }}
          priceContainerTwo={{
            price: 50.99,
            timeFrom: '5pm',
            timeTo: '9pm',
          }}
          privatePriceContainer={{ price: 59.99 }}
        />
      </TabPanel>
      <TabPanel value={value} index={5} dir={theme.direction}>
        <PricesTabsContentSkeleton
          title="Friday"
          description="Prices are per hour, per bay. Each bay accommodates up to 6 players. Prices do not include tax."
          priceContainerOne={{
            price: 50,
            timeFrom: '5pm',
            timeTo: '9pm',
          }}
          priceContainerTwo={{
            price: 50.99,
            timeFrom: '5pm',
            timeTo: '9pm',
          }}
          privatePriceContainer={{ price: 59.99 }}
        />
      </TabPanel>
      <TabPanel value={value} index={6} dir={theme.direction}>
        <PricesTabsContentSkeleton
          title="Saturday"
          description="Prices are per hour, per bay. Each bay accommodates up to 6 players. Prices do not include tax."
          priceContainerOne={{
            price: 50,
            timeFrom: '5pm',
            timeTo: '9pm',
          }}
          priceContainerTwo={{
            price: 50.99,
            timeFrom: '5pm',
            timeTo: '9pm',
          }}
          privatePriceContainer={{ price: 59.99 }}
        />
      </TabPanel>
    </Box>
  );
}
