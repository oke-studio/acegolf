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
    borderColor: theme.palette.aceGreen,
    borderWidth: '3px',
    '& .MuiTabs-indicator': {
      backgroundColor: 'transparent',
    },
    'button:not(:last-child)': {
      borderColor: theme.palette.aceGreen,
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
      backgroundColor: 'rgba(57, 119, 94, 0.5)',
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
  }
  
  interface PricesTabsContentSkeletonProps {
    title: string;
    description: string;
    priceContainerOne: PriceContainer;
    priceContainerTwo: PriceContainer;
    privatePriceContainer: Omit<
      PriceContainer,
      'timeFrom' | 'timeTo' | 'backgroundColor' | 'bar' | 'kitchen'
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
      color = 'black',
      bar = false,
      kitchen = false,
    }: PriceContainer) => {
      return (
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'row',
            gap: '24px',
            color: color,
          }}
        >
          <Box
            sx={{
              backgroundColor: backgroundColor ?? theme.palette.aceOrange,
              display: 'flex',
              flexDirection: 'column',
              width: 'max-content',
              minWidth: '150px',
              borderRadius: '8px',
              padding: '24px',
              gap: '8px',
            }}
          >
            <Typography variant="base">{`${timeFrom} - ${timeTo}`}</Typography>
            <Typography variant="base">
              <b>${price}</b>/hr
            </Typography>
            <Typography variant="base">per bay, per person</Typography>
          </Box>
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
            }}
          >
            <Typography variant="base" color="black">
              *Bar {bar ? 'Open' : 'Closed'}
            </Typography>
            <Typography variant="base" color="black">
              *Kitchen {kitchen ? 'Open' : 'Closed'}
            </Typography>
          </Box>
        </Box>
      );
    };
    return (
        <Box sx={{ display: 'flex', gap: '12px', flexDirection: 'column' }}>
          <Typography variant="headingOne">{title}</Typography>
          <Typography variant="base">{description}</Typography>
          <Box sx={{ display: 'flex', gap: '24px', flexWrap: 'wrap' }}>
            <PriceInfoBox {...priceContainerOne} />
            <PriceInfoBox {...priceContainerTwo} />
          </Box>
          <Box
            sx={{
              display: 'flex',
              padding: '24px',
              flexDirection: 'column',
              backgroundColor: 'white',
              borderRadius: '8px',
              borderWidth: '3px',
              borderStyle: 'solid',
              borderColor: theme.palette.aceTeal,
            }}
          >
            <Typography variant="base">Private Bay</Typography>
            <Typography variant="base">
              <b>${privatePriceContainer.price}</b>/hr
            </Typography>
          </Box>
        </Box>
      );
    };


export default function PriceTabCard(){

    const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  const currentDate = new Date();

    const [value, setValue] = React.useState(currentDate.getDay());

    const handleChange = (event: React.SyntheticEvent, newValue: number) => {
        setValue(newValue);
      };

    return(

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
                description="Some stuff that goes on on sunday"
                priceContainerOne={{
                  price: 50,
                  timeFrom: '5pm',
                  timeTo: '9pm',
                  color: 'white',
                }}
                priceContainerTwo={{
                  price: 50.99,
                  timeFrom: '5pm',
                  timeTo: '9pm',
                  color: 'black',
                  backgroundColor: theme.palette.aceGreen,
                }}
                privatePriceContainer={{ price: 59.99 }}
              />
            </TabPanel>
            <TabPanel value={value} index={1} dir={theme.direction}>
              Item Two
            </TabPanel>
            <TabPanel value={value} index={2} dir={theme.direction}>
              Item Three
            </TabPanel>
          </Box>

    );
};