import * as React from 'react';
import { Box, styled, Grid, useMediaQuery, useTheme } from '@mui/material';

import { Section } from '@/components/layout/section.component';



export const LandingHero = () => {

    return(
        <Section
            SectionName= "Landing Hero"
            SectionWidth= "normal"
            SectionColor='red'
            CornerRadius= 'on'
            sx={{
              color: 'blue'  
            }}
        > 
        this is a section
        multiple things can go in here
        
        </Section>
    );
};