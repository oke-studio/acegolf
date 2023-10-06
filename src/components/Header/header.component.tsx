'use client';
import * as React from 'react';
import {
  Box,
  styled,
  List,
  Link,
  ListItem,
  ListItemButton,
  ListItemText,
  createTheme,
  useMediaQuery,
  useTheme,
  Button,
} from '@mui/material';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { MotionSpanAnimated } from '../Helpers/motionSpanAnimation.component';
// import { useRouter } from 'next/router';
import { useRouter } from 'next/navigation';

const aceOrange = '#EB8B32';

const HeaderContainer = styled(Box)({
  backgroundColor: 'white',
  display: 'flex',
  borderRadius: '0 0 26px 26px',
  height: '50px',
  width: '100%',
  maxWidth: '1084px',
  color: 'black',
  alignItems: 'center',
  padding: '0 24px 0 24px',
});

const StyledListItemButton = styled(ListItemButton)(({ theme }) => ({
  '&.MuiListItemButton-root:hover': {
    backgroundColor: 'transparent',
    color: theme.palette.primary.main,
  },
  //   padding: '8px 0 8px 0',
}));

// console.log(theme.typography.body1);

interface NavOptions {
  label: string;
  to: string;
}
interface HeaderProps {
  navOptions: NavOptions[];
  headerBackground?: string;
}

export const Header = ({ navOptions }: HeaderProps) => {
  const theme = useTheme();
  const isMobile = useMediaQuery('(max-width:425px)');
  const [mobileDropDownEnabled, setMobileDropDownEnabled] =
    React.useState(false);
  const router = useRouter();

  // console.log(mobileDropDownEnabled);

  function toggleDropDown() {
    setMobileDropDownEnabled(!mobileDropDownEnabled);
    console.log('here');
  }

  return (
    <Box
      sx={{
        display: 'flex',
        width: '100%',
        fontFamily: 'new-hero',
        justifyContent: 'center',
        position: 'sticky',
        top: '0px',
        zIndex: theme.zIndex.appBar,
      }}
    >
      <HeaderContainer
        sx={{
          justifyContent: isMobile ? 'center' : 'space-between',
        }}
      >
        {isMobile ? (
          <Button onClick={() => toggleDropDown()}>
            <Image
              src="/images/ace-golf-logo.svg"
              alt="ace golf logo"
              width={50}
              height={50}
            />
          </Button>
        ) : (
          <Image
            src="/images/ace-golf-logo.svg"
            alt="ace golf logo"
            width={50}
            height={50}
          />
        )}
        {!isMobile && (
          <List
            sx={{
              display: 'flex',
              whiteSpace: 'nowrap',
              gap: '24px',
              overflow: 'scroll',
            }}
          >
            {navOptions.map((navLink, i) => (
              <ListItem disablePadding key={i}>
                <StyledListItemButton
                  onClick={() => {
                    router.push(navLink.to);
                  }}
                >
                  <MotionSpanAnimated label={navLink.label} />
                </StyledListItemButton>
              </ListItem>
            ))}
            <ListItem disablePadding>
              <motion.button
                style={{
                  borderRadius: '6.36px',
                  backgroundColor: aceOrange,
                  padding: '2px 14px 2px 14px',
                  color: 'white',
                  borderStyle: 'none',
                  fontFamily: 'new-hero',
                  fontSize: '12px',
                }}
                //   variants={navOptionHover}
                // initial="rest"
                // whileHover="hovered"
                // animate="rest"
              >
                <MotionSpanAnimated label="Book Now!" variant="book" />
              </motion.button>
            </ListItem>
          </List>
        )}
      </HeaderContainer>
    </Box>
  );
};
