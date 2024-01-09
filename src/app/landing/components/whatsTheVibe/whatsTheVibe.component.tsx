'use client';

import * as React from 'react';
import { Box, ImageList, ImageListItem } from '@mui/material';
import { MusicPlayer } from './components/musicPlayer/musicPlayer.component';
import { Typography } from '@/components/Typography/typography.component';
import { Section } from '@/components/layout/section.component';
import Image from 'next/image';

const ImageSrc = [
  // #1
  {
    src: '/images/whatsTheVibeAssets/ezgif-2-0095f2ad03.gif',
    title: 'img_01',
    alt: 'whats_the_vibe_image',
    height: 450,
    width: 250,
  },
  // #2
  {
    src: '/images/whatsTheVibeAssets/ace-pink.png',
    title: 'img_01',
    alt: 'whats_the_vibe_image',
    height: 250,
    width: 250,
  },
  // #3
  {
    src: '/images/whatsTheVibeAssets/wtv-02.jpg',
    title: 'img_01',
    alt: 'whats_the_vibe_image',
    height: 400,
    width: 250,
  },
  // #4
  {
    src: '/images/whatsTheVibeAssets/wtv-03.jpg',
    title: 'img_01',
    alt: 'whats_the_vibe_image',
    height: 450,
    width: 250,
  },

  {
    src: '/images/whatsTheVibeAssets/ezgifvideo-to-gif-converter.gif',
    title: 'img_01',
    alt: 'whats_the_vibe_image',
    height: 450,
    width: 250,
  },

  {
    src: '/images/whatsTheVibeAssets/wtv-04.jpg',

    title: 'img_01',
    alt: 'whats_the_vibe_image',
    height: 350,
    width: 250,
  },

  {
    src: '/images/whatsTheVibeAssets/wtv-01.jpg',
    title: 'img_01',
    alt: 'whats_the_vibe_image',
    height: 400,
    width: 250,
  },

  {
    src: '/images/ace-banner-chromatic-white.jpg',
    title: 'img_01',
    alt: 'whats_the_vibe_image',
    height: 450,
    width: 250,
  },
];

const ImageContainer = ({ img }: { img: typeof ImageSrc[0] }) => {
  const widthHeightRatio = img.height / img.width;
  const galleryHeight = Math.ceil(250 * widthHeightRatio);
  const photoSpans = Math.ceil(galleryHeight / 10) + 1;

  return (
    <Box
      sx={{
        width: '250px',
        justifySelf: 'center',

        gridRow: `span ${photoSpans}`,
      }}
    >
      <Box sx={{ borderRadius: '0.75rem', overflow: 'hidden' }}>
        <Image
          src={img.src}
          alt={img.alt}
          width={250}
          height={galleryHeight}
          sizes="250px"
        />
      </Box>
    </Box>
  );
};

export const WhatsTheVibe = () => {
  const gridLayoutGap = '10px';
  const gridColumnCount = 4;
  const gridItemMinWidth = '250px';

  const gapCount = `calc(${gridColumnCount} - 1)`;
  const totalGapWidth = `calc(${gapCount} * ${gridLayoutGap})`;
  const gridItemMaxWidth = `calc((100% - ${totalGapWidth})/${gridColumnCount})`;

  return (
    <Section
      SectionName="Whats the Vibe"
      SectionWidth="fullViewport"
      SectionColor=""
      CornerRadius={false}
      ScrollAnimations={false}
      sx={{
        display: 'flex',
        flexDirection: 'column',
      }}
    >
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          gap: '24px',
          backgroundColor: '#171717',
        }}
      >
        <Typography
          variant="largeH1"
          weight="900"
          sx={{
            textTransform: 'uppercase',
            textWrap: 'wrap',
            textAlign: 'center',
          }}
        >
          What&apos;s the Vibe?
        </Typography>
        <MusicPlayer />

        {/* Image grid */}
        <Box
          component="section"
          sx={{
            padding: '0 0.5rem',
            margin: '0.75rem 0',
            display: 'grid',
            gridTemplateColumns: `repeat(auto-fit, minmax(max(${gridItemMinWidth}, ${gridItemMaxWidth}), 1fr))`,
            gridAutoRows: '10px',
            width: '80%',
          }}
        >
          {ImageSrc.map((img, index) => (
            <ImageContainer img={img} key={`img_${index}`} />
          ))}
        </Box>
      </Box>
    </Section>
  );
};
