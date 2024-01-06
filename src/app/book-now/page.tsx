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
import { Card } from '@/components/Cards/cards.component';
import { Promotions } from '../landing/components/promotions/promotions.component';
import { MailingList } from '../landing/components/mailingList/mailingList.component';
import { BookNowForm } from '@/components/BookNowForm/bookNowForm.component';
import dayjs from 'dayjs';
import { useBookNowForm } from '@/components/BookNowForm/hooks/useBookNowForm.hook';
import { NintendoSwitch } from '@/components/nintendoSwitch/nintendoSwitch.component';

import PriceTabCard from './priceTabCard.component';
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

export default function BookNow() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const {
    handleBookNowButtonLink,
    handleDateTimePickerChange,
    handleReserveFormOnChange,
    reserveABayObject,
  } = useBookNowForm({
    guests: '1',
    duration: '1',
    date: dayjs(new Date()).format(),
    time: dayjs(new Date()).format(),
  });
  const currentDate = new Date();

  const [value, setValue] = React.useState(currentDate.getDay());

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ margin: 'auto', overflow: 'hidden' }}>
      <Box
        sx={{
          display: 'flex',
          flexDirection: isMobile ? 'column' : 'row',
          width: '100%',
          gap: '24px',
          padding: '24px',
        }}
      >
        <Card
          buttonOne={{
            children: (
              <Typography variant="base">
                <a href={handleBookNowButtonLink()} target="_blank">
                  Find a Bay&nbsp;
                </a>
              </Typography>
            ),
            variant: 'secondary',
            fullWidth: true,
          }}
          CardTitle="Book a bay now"
          ColorVariant="dark"
          BackgroundColor={theme.palette.aceOrange}
          sx={{
            flexBasis: '110%',
          }}
        >
          <BookNowForm
            reserveABayObject={reserveABayObject}
            handleDateTimePickerChange={handleDateTimePickerChange}
            handleReserveFormOnChange={handleReserveFormOnChange}
            isWide={false}
          />
        </Card>
        <Card
          buttonOne={{ children: 'How it works', variant: 'secondary' }}
          CardTitle="Prices & Rates"
          sx={{ minHeight: '600px' }}
          BackgroundColor="#F6F6F6"
        >
          <PriceTabCard />
        </Card>
      </Box>
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',

          height: '100%',
          borderRadius: '25px',
        }}
      >
        <Promotions />
        {/* mailing list comp */}
        <MailingList />
      </Box>

      {/* TODO */}
      <NintendoSwitch />
    </Box>
  );
}