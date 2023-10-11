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
import { RNG } from '@/util/RNG';
import { useRouter } from 'next/navigation';

const aceOrange = '#EB8B32';

const HeaderContainer = styled(Box)({
  display: 'flex',
  borderRadius: '0 0 26px 26px',
  height: '50px',
  width: '100%',
  maxWidth: '1084px',
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
  navBackgroundColor?: string;
  navTextColor?: string;
}

export const Header = ({
  navOptions,
  navBackgroundColor = 'black',
  navTextColor = 'white',
}: HeaderProps) => {
  const { palette, typography, zIndex } = useTheme();
  const isMobile = useMediaQuery('(max-width:425px)');
  const [mobileDropDownEnabled, setMobileDropDownEnabled] =
    React.useState(false);
  const router = useRouter();

  function toggleDropDown() {
    setMobileDropDownEnabled(!mobileDropDownEnabled);
    console.log('here');
  }

  const HoverAnimation = {
    top: { to: '5px', from: '0px' },
    color: {
      to: palette.aceOrange,
      from: '#ffffff',
    },
    rotate: { to: RNG(9, 21), from: 0 },
    fontWeight: {
      to: typography.hero_bold.fontWeight as string,
      from: typography.hero_semibold.fontWeight as string,
    },
    transition: {
      to: {
        duration: 0.5,
        type: 'tween',
        ease: 'easeOut',
      },
      from: {
        duration: 0.5,
        type: 'tween',
        ease: 'easeIn',
      },
    },
  };

  const RestAnimation = {
    top: { to: '-5px', from: '0px' },
    color: {
      to: palette.aceOrange,
      from: '#FFFFFF',
    },
    rotate: { to: RNG(-9, -21), from: 0 },
    fontWeight: {
      to: typography.hero_bold.fontWeight as string,
      from: typography.hero_semibold.fontWeight as string,
    },
    transition: {
      to: {
        duration: 0.5,
        type: 'tween',
        ease: 'easeOut',
      },
      from: {
        duration: 0.5,
        type: 'tween',
        ease: 'easeIn',
      },
    },
  };

  return (
    <Box
      sx={{
        display: 'flex',
        width: '100%',
        fontFamily: 'new-hero',
        justifyContent: 'center',
        position: 'sticky',
        top: '0px',
        zIndex: zIndex.appBar,
      }}
    >
      <HeaderContainer
        sx={{
          justifyContent: isMobile ? 'center' : 'space-between',
          backgroundColor: navBackgroundColor,
          color: navTextColor,
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
                  <MotionSpanAnimated
                    label={navLink.label}
                    hoverAnimation={HoverAnimation}
                    restAnimation={RestAnimation}
                  />
                </StyledListItemButton>
              </ListItem>
            ))}
            <ListItem disablePadding>
              {/* <motion.button
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
                <MotionSpanAnimated label="Book Now!" />
              </motion.button> */}
              <Button sx={{}} variant="primary">
                <MotionSpanAnimated
                  label="Book Now!"
                  hoverAnimation={HoverAnimation}
                  restAnimation={RestAnimation}
                />
              </Button>
            </ListItem>
          </List>
        )}
      </HeaderContainer>
    </Box>
  );
};
