'use client';

import * as React from 'react';
import { Box, useTheme } from '@mui/material';

import { FooterLinks } from './footer-links/footerLinks.component';

// console.log(theme.typography);

export const Footer = () => {
	const { typography } = useTheme();
	// console.log(inputClasses);
	return (
		<Box
			sx={{
				display: 'flex',
				flexDirection: 'column',
				backgroundColor: 'black',

				zIndex: 5,
				position: 'relative',
			}}
		>
			{/* TOP email section */}
			{/* <Box
          sx={{
            backgroundColor: 'black',
            display: 'flex',
            minHeight: '500px',
            borderRadius: '28px',
          }}
        >
          <Box
            sx={{
              display: 'flex',
              margin: '24px auto',
              flexDirection: 'column',
              gap: '12px',
            }}
          >
            <Box
              component="span"
              sx={{
                fontWeight: theme.typography.fontWeightBold,
                // fontSize: '24px',
              }}
            >
              Be the first to know about the latest ACE Gold promos and events!
            </Box>
            <FooterEmail />
            <Box
              component="span"
              sx={{
                fontWeight: theme.typography.fontWeightLight,
                fontSize: '0.6rem',
                marginTop: '16px',
                maxWidth: '50%',
              }}
            >
              By clicking <q>sign up</q> you consent to Ace golf using your
              email address to recieve emails about products, events and
              promotions
            </Box>
          </Box>
        </Box> */}
			{/* MID info section */}
			{/* <Box
          sx={{
            backgroundColor: theme.palette.primary.main,
            display: 'flex',
            minHeight: '500px',
          }}
        >
          <Box
            sx={{
              minHeight: '80%',
              width: '100%',
              backgroundColor: 'white',
              borderRadius: '50% 50% 0 0 / 100% 100% 0 0;',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              alignItems: 'center',
              textAlign: 'center',
              color: 'black',
              alignSelf: 'flex-end',
            }}
          >
            <Box
              sx={{
                margin: '0 auto 0 auto',
                display: 'flex',
                flexDirection: 'column',
                width: '50vw',
                height: '100%',
                alignItems: 'center',
              }}
            >
              <Box
                sx={{
                  typography: theme.typography.body1,
                  fontSize: '2rem',
                  fontWeight: theme.typography.fontWeightBold,
                }}
              >
                ACE GOLF
              </Box>
              <Box
                sx={{
                  typography: theme.typography.body1,
                  fontSize: '5rem',
                  fontWeight: theme.typography.fontWeightBold,
                  marginBottom: '12px',
                }}
              >
                FIND YOUR SWING
              </Box>
              <Box
                sx={{
                  typography: theme.typography.body1,
                }}
              >
                Hours:
                <TableContainer>
                  <Table
                    sx={{ minWidth: '100%' }}
                    size="small"
                    aria-label="hours table"
                  >
                    <TableBody>
                      <TableRow
                        sx={{
                          'td, th': {
                            borderBottom: '0 none black',
                            color: 'black',
                          },
                        }}
                      >
                        <TableCell component="th" scope="row" align="right">
                          MONDAY - SATURDAY
                        </TableCell>
                        <TableCell align="left">10AM ~ 12AM</TableCell>
                      </TableRow>
                      <TableRow
                        sx={{
                          'td, th': {
                            borderBottom: '0 none black',
                            color: 'black',
                          },
                        }}
                      >
                        <TableCell component="th" scope="row" align="right">
                          SUNDAY
                        </TableCell>
                        <TableCell align="left">12PM ~ 7PM</TableCell>
                      </TableRow>
                    </TableBody>
                  </Table>
                </TableContainer>
              </Box>
            </Box>
          </Box>
        </Box> */}
			{/* BOTTOM links section */}
			<FooterLinks />
		</Box>
	);
};
