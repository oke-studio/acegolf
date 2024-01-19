import * as React from 'react';
import { SxProps, Box, CSSObject } from '@mui/material';

export const TextWithBackdrop = ({
  backdropColor,
  contentColor,
  height,
  xOffset,
  yOffset,
  width,
  text,
  children,
  css,
  afterProps,
}: {
  text: string;
  backdropColor: string;
  contentColor: string;
  height: string | number;
  width: string | number;
  xOffset: number;
  yOffset: number;
  children?: React.ReactNode;
  css?: SxProps;
  afterProps?: CSSObject;
}) => {
  return (
    <Box
      sx={{
        ...css,
        width: width,
        height: height,
        backgroundColor: backdropColor,
        position: 'relative',
        '::after': {
          ...afterProps,
          content: `"${text}"`,
          width: '100%',
          height: '100%',
          display: 'inline-flex',
          top: `${yOffset}px`,
          left: `${xOffset}px`,
          position: 'absolute',
          // background: isImage ? `url(${img})` : 'blue',
          background: contentColor,
          borderRadius: 'inherit',
        },
      }}
    >
      {/* <Box
          sx={{
            backgroundColor: 'orange',
            position: 'relative',
            height: 'inherit',
            width: 'inherit',
            top: '10px',
            left: '15px',
          }}
        > */}
      {children}
      {/* </Box> */}
    </Box>
  );
};
