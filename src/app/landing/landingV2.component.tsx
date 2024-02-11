// 'use client';

// import * as React from 'react';
// import { Box, useTheme, useMediaQuery } from '@mui/material';
// import { Button, styled } from '@mui/material';
// import { Header } from '@/components/Header/header.component';
// import { ImageWithBackdrop } from './components/backdrop/imageBackdrop.component';
// import { TextWithBackdrop } from './components/backdrop/textBackdrop.component';
// import { East } from '@mui/icons-material';
// import { Typography } from '@/components/Typography/typography.component';

// // import { TigerImage } from './components/tigerImage/tigerImage.component';
// import Image from 'next/image';
// import { Noise } from '@/util/Noise';
// import { LandingCards } from './components/landingCards/landingCards.component';
// import { HowItWorks } from '../../components/howItWorks/howItWorks.component';
// import { LandingVideo } from './components/video/video.component';
// import { AceBanner } from '../../components/aceBanner/aceBanner.component';
// import { Promotions } from './components/promotions/promotions.component';
// import { MailingList } from './components/mailingList/mailingList.component';
// // import { WhatsTheVibe } from './components/whatsTheVibe/whatsTheVibe.component';
// import { NintendoSwitch } from '@/components/nintendoSwitch/nintendoSwitch.component';

// const MapSVG = () => (
//   <svg
//     width="39"
//     height="34"
//     viewBox="0 0 39 34"
//     fill="none"
//     xmlns="http://www.w3.org/2000/svg"
//   >
//     <path
//       d="M13.625 32.5L2 26.6875V1.5L13.625 7.3125M13.625 32.5L25.25 26.6875M13.625 32.5V7.3125M13.625 7.3125L25.25 1.5M25.25 26.6875L36.875 32.5V7.3125L25.25 1.5M25.25 26.6875V1.5"
//       stroke="black"
//       strokeWidth="2.58333"
//       strokeLinecap="round"
//       strokeLinejoin="round"
//     />
//   </svg>
// );

// export default function LandingV2() {
//   const { palette, typography, breakpoints } = useTheme();
//   const isMobile = useMediaQuery(breakpoints.down('sm'));
//   const isSmallDesktop = useMediaQuery('(max-width:950px)');
//   const isLargeDesktop = useMediaQuery('(min-width:1440px)');

//   return (
//     <Box
//       sx={{
//         //backgroundColor: '#171717',
//         position: 'relative',
//         overflow: 'hidden',
//       }}
//     >
//       {/* <Header
//         navOptions={[
//           { label: 'Menu', to: '/menu' },
//           { label: 'How it works', to: '/how-it-works' },
//           { label: 'About', to: '/about' },
//           { label: 'Parties & Events', to: '/pricing' },
//         ]}
//       /> */}

//       {/* Hero Section*/}
//       <Box
//         sx={{
//           display: 'flex',
//           flexDirection: 'column',
//           alignItems: 'center',
//           margin: isLargeDesktop ? '15px 10% 5px' : '15px 5% 5px',
//           borderRadius: '25px',
//           backgroundColor: 'white',
//           paddingBottom: '20px',
//         }}
//       >
//         {/* Hero Inner Section*/}
//         <Box
//           sx={{
//             width: '100%',
//             color: 'black',
//             padding: '5% 5%',
//             display: 'flex',
//             flexDirection: 'column',
//             border: 'solid white 6px',
//             borderRadius: '25px',
//           }}
//         >
//           {/* Hero Top Content*/}
//           <Box
//             sx={{
//               display: 'flex',
//               margin: isMobile ? '0px' : '32px 32px',
//               justifyContent: 'space-around',
//               ...(isMobile && { flexDirection: 'column' }),
//             }}
//           >
//             {/* Hero Logo Cluster*/}
//             <Box
//               sx={{
//                 display: 'flex',
//                 flexDirection: 'column',
//                 alignItems: 'center',
//                 justifyContent: 'center',
//                 width: isMobile ? '100%' : '400px',
//               }}
//             >
//               <Box
//                 sx={{
//                   width: '100%',
//                   marginBottom: '10%',
//                   display: 'flex',
//                   justifyContent: 'center',
//                 }}
//               >
//                 <Image
//                   //expose svg to have the logo scale accordingly
//                   src="/images/ace-landing-logo.svg"
//                   width={400}
//                   height={150}
//                   //style={{height: '100%' , width: '100%'}}
//                   alt="ace logo"
//                 />
//               </Box>
//               <Box component="span">BAYS BY TRACKMAN</Box>
//             </Box>

//             {/* Hero Info Cluster*/}
//             <Box
//               sx={{
//                 display: 'flex',
//                 flexDirection: 'column',
//                 alignItems: 'center',
//                 justifyContent: 'center',
//                 width: isMobile ? '100%' : '400px',
//               }}
//             >
//               <Typography
//                 variant="base"
//                 sx={{
//                   backgroundColor: palette.aceTeal,
//                   color: 'white',
//                   borderRadius: '6.82px',
//                   padding: '4px 10px',
//                   width: 'max-content',
//                 }}
//               >
//                 TORONTO&apos;S BEST
//               </Typography>
//               <Typography
//                 variant="base"
//                 sx={{
//                   textAlign: 'center',
//                   fontSize: isMobile ? '32px' : '48px',
//                   lineHeight: '110%',
//                 }}
//               >
//                 INDOOR GOLF
//                 <br />
//                 LOUNGE!
//               </Typography>
//               <Box
//                 sx={{
//                   display: 'flex',
//                   flexDirection: 'column',
//                   gap: '8px',
//                   position: 'relative',
//                 }}
//               >
//                 <Box sx={{ display: 'flex', gap: '18px' }}>
//                   <MapSVG />
//                   <Box
//                     sx={{
//                       textDecoration: 'underline',
//                       color: palette.aceOrange,
//                     }}
//                   >
//                     765 Address St, Toronto
//                   </Box>
//                 </Box>
//                 <Box sx={{ display: 'flex', gap: '1ch' }}>
//                   Open Mon &rarr; Sat
//                   <Box
//                     sx={{
//                       color: palette.aceOrange,
//                     }}
//                   >
//                     9am - 12pm
//                   </Box>{' '}
//                 </Box>
//               </Box>
//             </Box>
//           </Box>

//           {/* Hero Bottom Content*/}
//           <Box
//             sx={{
//               display: 'flex',
//               justifyContent: 'center',
//               flexDirection: 'column',
//               alignItems: 'center',
//               ...(isMobile && { marginTop: '44px' }),
//             }}
//           >
//             {/* Hero Photo Splash*/}
//             <Box
//               sx={{
//                 display: 'flex',
//                 flexDirection: 'row',
//                 ...(isMobile && { flexWrap: 'wrap' }),
//               }}
//             >
//               <Box
//                 sx={{
//                   width: isSmallDesktop ? '150px' : '200px',
//                   height: isSmallDesktop ? '150px' : '200px',
//                   //flex: '1 1 auto',
//                   // backgroundColor: 'aqua',
//                   background: 'url(/images/Spin-photo4.webp)',
//                   backgroundRepeat: 'no-repeat',
//                   backgroundSize: 'cover',
//                   rotate: isMobile ? '-5deg' : '10deg',
//                 }}
//               ></Box>
//               <Box
//                 sx={{
//                   width: isSmallDesktop ? '150px' : '200px',
//                   height: isSmallDesktop ? '150px' : '200px',
//                   //flex: '1 1 auto',
//                   //backgroundColor: 'aqua',
//                   background: 'url(/images/Spin-photo3.webp)',
//                   backgroundRepeat: 'no-repeat',
//                   backgroundSize: 'cover',
//                   rotate: isMobile ? '5deg' : '-10deg',
//                 }}
//               ></Box>
//               <Box
//                 sx={{
//                   width: isSmallDesktop ? '150px' : '200px',
//                   height: isSmallDesktop ? '150px' : '200px',
//                   //flex: '1 1 auto',
//                   //backgroundColor: 'aqua',
//                   background: 'url(/images/Spin-photo2.webp)',
//                   backgroundRepeat: 'no-repeat',
//                   backgroundSize: 'cover',
//                   rotate: isMobile ? '5deg' : '10deg',
//                 }}
//               ></Box>
//               <Box
//                 sx={{
//                   width: isSmallDesktop ? '150px' : '200px',
//                   height: isSmallDesktop ? '150px' : '200px',
//                   //flex: '1 1 auto',
//                   //backgroundColor: 'aqua',
//                   background: 'url(/images/Spin-photo1.webp)',
//                   backgroundRepeat: 'no-repeat',
//                   backgroundSize: 'cover',
//                   rotate: isMobile ? '-5deg' : '-10deg',
//                 }}
//               ></Box>
//             </Box>

//             {/* Hero Button*/}
//             <Button
//               disableElevation
//               disableFocusRipple
//               disableRipple
//               disableTouchRipple
//               variant="primary"
//               sx={{
//                 textTransform: 'none',
//                 backgroundColor: palette.aceOrange,
//                 color: 'white',
//                 borderRadius: '78px',
//                 padding: '12px 60px',
//                 position: 'relative',
//                 top: '-60px',
//                 zIndex: 5,
//                 ':hover:': {
//                   backgroundColor: '#eb8b32c9',
//                   color: 'white',
//                 },
//                 //
//               }}
//             >
//               <Typography variant="base">
//                 <a
//                   href="https://www.sevenrooms.com/reservations/acegolf?duration-picker=True"
//                   target="_blank"
//                 >
//                   {' '}
//                   Reserve a bay &rarr;
//                 </a>
//               </Typography>
//             </Button>
//           </Box>
//         </Box>
//       </Box>
//       {/* Banner Iterlude */}
//       {/* <Box
//         sx={{
//           position: 'relative',
//           top: isMobile ? '-200px' : '-160px',
//           zIndex: '1',
//         }}
//       >
//         <Box
//           sx={{
//             height: '500px',
//             width: '100vw',
//             ...(isMobile && { scale: '2' }),
//           }}
//         >
//           <AceBanner
//             width="100%"
//             height="100%"
//             viewBox="0 0 1440 400"
//             pathProps={{
//               d: 'M 0.3257 244.537 C 21 244.537 28.5 238.5 142.377 169.919 C 343 49.0589 549.615 31.5 474.992 123.111 C 380.659 238.919 596.811 193.13 832.992 123.11 C 1255 -1.9998 1630.81 38.1808 1413.49 179.111 C 1248.49 286.111 1913 102.502 1924 222',
//               fill: '#EB8B32',
//             }}
//             text=" "
//             textCount={1}
//             strokeColor="#36DAD5"
//           />
//         </Box>

//         <Box
//           sx={{
//             height: '500px',
//             width: '100vw',
//             position: 'relative',
//             top: isMobile ? '-515px' : '-530px',
//             ...(isMobile && { scale: '2' }),
//           }}
//         >
//           <AceBanner
//             width="100%"
//             height="100%"
//             viewBox="0 0 1440 400"
//             pathProps={{
//               d: 'M 0.3257 244.537 C 21 244.537 28.5 238.5 142.377 169.919 C 343 49.0589 549.615 31.5 474.992 123.111 C 380.659 238.919 596.811 193.13 832.992 123.11 C 1255 -1.9998 1630.81 38.1808 1413.49 179.111 C 1248.49 286.111 1913 102.502 1924 222',
//             }}
//             text="FOOD  DRINKS FUN "
//             textCount={5}
//             strokeColor="#171717"
//           />
//         </Box>
//       </Box> */}
//       {/* Orange Section */}
//       <Box
//         sx={{
//           backgroundColor: '#EB8B32',
//           backgroundSize: '100%',
//           display: 'flex',
//           width: '100vw',
//           //   height: '2000px',
//           justifyContent: 'center',
//           padding: '48px 48px',

//           //   position: 'relative',
//           //   top: '-940px',
//           right: 0,
//           left: 0,
//           alignContent: 'center',
//           flexWrap: 'wrap',
//           borderRadius: '25px',
//           ...(isMobile && { padding: '12px 12px' }),
//         }}
//       >
//         {/* This is where the collages are */}
//         {/* <Box
//           sx={{
//             position: 'absolute',
//             zIndex: 1,
//             display: 'flex',
//             justifyContent: 'space-around',
//             alignContent: 'space-around',
//             width: '100vw',
//             height: '1500px',
//             flexWrap: 'wrap',
//             background: isSmallDesktop
//               ? 'url(/images/background-collage_928.svg)'
//               : 'url(/images/background-collage_1226.svg)',
//             backgroundRepeat: 'no-repeat',
//             backgroundSize: 'fit',
//           }}
//         >

//         </Box> */}
//         <Box
//           sx={{
//             zIndex: 2,
//             // position: 'relative',
//             // top: '-600px',
//             width: '100vw',
//             padding: '10px',
//           }}
//         >
//           {/* <LandingTabs /> */}
//           <LandingCards />
//         </Box>
//       </Box>

//       {/* How it works, promotions, etc... */}
//       <Box
//         sx={{
//           display: 'flex',
//           flexDirection: 'column',
//           padding: '24px',
//           //   position: 'relative',
//           //   top: '-790px',
//           margin: isLargeDesktop ? '15px 10% 5px' : '15px 5% 5px',
//         }}
//       >
//         <HowItWorks isLanding />
//       </Box>

//       <Box
//         sx={{
//           display: 'flex',
//           flexDirection: 'column',
//           backgroundColor: '#39775E',
//           height: '100%',
//           borderRadius: '25px',
//         }}
//       >
//         <Promotions />
//         {/* mailing list comp */}
//         <MailingList />
//       </Box>

//       <Box>
//         <WhatsTheVibe />
//       </Box>

//       <NintendoSwitch />

//       {/* <HowItWorksSection /> */}
//     </Box>
//   );
// }
