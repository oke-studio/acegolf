'use client';

import * as React from 'react';
import { Box, useTheme, useMediaQuery } from '@mui/material';
import { Button, styled } from '@mui/material';
import { Header } from '@/components/Header/header.component';
import { TopBanner } from '@/components/topBanner/topBanner.component';
import { ImageWithBackdrop } from './components/backdrop/imageBackdrop.component';
import { TextWithBackdrop } from './components/backdrop/textBackdrop.component';
import { East } from '@mui/icons-material';

import { TigerImage } from './components/tigerImage/tigerImage.component';

const StackedTextComponent = ({
  wordStack,
  xOffSet,
  yOffSet,
  fontSize,
}: {
  wordStack: string[];
  xOffSet: number;
  yOffSet: number;
  fontSize: number;
}) => {
  return (
    <Box
      sx={{ position: 'relative', height: `${fontSize * wordStack.length}px` }}
    >
      {wordStack.map((word, index) => (
        <Box
          sx={{
            position: 'absolute',
            top: yOffSet * index,
            left: xOffSet * index,
            width: 'max-content',
          }}
          key={index}
        >
          {word}
        </Box>
      ))}
    </Box>
  );
};

const MapSVG = () => (
  <svg
    width="39"
    height="34"
    viewBox="0 0 39 34"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M13.625 32.5L2 26.6875V1.5L13.625 7.3125M13.625 32.5L25.25 26.6875M13.625 32.5V7.3125M13.625 7.3125L25.25 1.5M25.25 26.6875L36.875 32.5V7.3125L25.25 1.5M25.25 26.6875V1.5"
      stroke="white"
      strokeWidth="2.58333"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const ParkingSVG = () => (
  <svg
    width="33"
    height="33"
    viewBox="0 0 33 33"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M17.1771 5.48047H10.9031C9.89304 5.48047 9.07422 6.29929 9.07422 7.30934V25.6891C9.07422 26.6991 9.89304 27.518 10.9031 27.518C11.9131 27.518 12.732 26.6991 12.732 25.6891V19.5891H17.1771C20.8975 19.5891 23.9243 16.5624 23.9243 12.842V12.2276C23.9243 8.50728 20.8975 5.48047 17.1771 5.48047ZM20.2666 12.8421C20.2666 14.5456 18.8807 15.9315 17.1772 15.9315H12.732V9.13829H17.1772C18.8808 9.13829 20.2666 10.5242 20.2666 12.2277V12.8421Z"
      fill="white"
    />
    <rect
      x="1"
      y="1"
      width="31"
      height="31"
      rx="6"
      stroke="white"
      strokeWidth="2"
    />
  </svg>
);

const LandingImageBoxOne = () => {
  return <Box sx={{ backgroundColor: 'purple' }}></Box>;
};

const FindYourSwingRibbon = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery('(max-width:640px)');

  return (
    <Box
      sx={{
        width: '100%',
        position: 'absolute',
        left: 0,
        // top: isMobile ? '-240px' : '-280px',
        bottom: isMobile ? '95%' : '89%',
      }}
    >
      <svg
        width="100%"
        height="auto"
        viewBox="0 0 1440 410"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* <path
          d="M-457.558 370.202C-18.9085 -68.5298 221.826 57.7423 88.5316 210.856C-44.7626 363.97 258.103 315.64 571.475 203.565C884.847 91.4909 1416.86 88.3412 1126.6 285.436C906.226 435.078 1790.54 200.887 1895.98 169.212"
          stroke="white"
          strokeWidth="103"
          fill="blue"
        /> */}
        <path
          d="M -457.558 370.202 C -18.9085 -68.5298 221.826 57.7423 88.5316 210.856 C -44.7626 363.97 258.103 315.64 571.475 203.565 C 884.847 91.4909 1416.86 88.3412 1126.6 285.436 C 906.226 435.078 1790.54 200.887 1685 370.202"
          strokeWidth={103}
          stroke="white"
          fill={theme.palette.primary.main}
        />
        <path
          d="M-20.7071 36.6803C-14.2108 35.3558 -7.94084 35.8991 -3.1005 37.5147L-0.213659 51.6734C-4.78878 49.6567 -11.5754 49.132 -16.8225 50.2018C-22.0695 51.2717 -24.8438 53.8326 -24.2325 56.8309C-23.6381 59.7459 -20.2848 60.4502 -14.0796 61.5272C-4.85579 62.943 6.37013 64.818 8.91734 77.311C11.3117 89.0544 3.99794 99.1338 -10.6605 102.122C-18.4894 103.719 -26.1445 102.764 -31.187 100.582L-34.2267 85.674C-29.0483 88.5218 -21.7078 90.0614 -15.1281 88.7198C-9.29808 87.5311 -6.3758 84.4196 -7.05506 81.0881C-7.80224 77.4235 -12.4728 76.6408 -18.8616 75.5145C-26.6679 74.2434 -37.3448 72.0829 -39.7052 60.5061C-41.9297 49.5956 -35.0324 39.6011 -20.7071 36.6803Z"
          fill="black"
        />
        <path
          d="M66.1194 98.2896L59.3944 55.1886L59.3102 55.1773L41.6893 95.0039L25.0095 92.7606L14.76 27.4012L30.9344 29.5765L36.4268 74.8274L36.511 74.8387L54.7747 32.7829L69.517 34.7656L76.2617 80.2707L76.4302 80.2934L93.1889 37.9493L108.774 40.0453L82.2095 100.454L66.1194 98.2896Z"
          fill="black"
        />
        <path
          d="M82.9119 105.262L131.845 64.9338L142.116 77.3967L93.1833 117.725L82.9119 105.262Z"
          fill="black"
        />
        <path
          d="M152.108 171.331L89.3481 162.277L91.5329 147.134L132.636 127.128L132.648 127.044L95.2105 121.642L97.4073 106.415L160.168 115.47L157.959 130.781L117.553 150.716L117.541 150.8L154.305 156.104L152.108 171.331Z"
          fill="black"
        />
        <path
          d="M103.719 188.331C95.3696 181.761 84.7179 182.789 78.5152 190.671C76.6229 193.076 75.6329 195.433 75.082 197.92L90.3118 209.905L81.2706 221.394L58.6931 203.627C59.1378 196.189 61.5209 188.763 67.3031 181.415C78.3417 167.388 97.995 163.168 114.026 175.783C129.991 188.346 130.525 208.56 119.486 222.588C114.493 228.933 108.789 232.882 103.312 235.17L90.9542 225.445C97.644 223.679 102.946 219.415 106.416 215.006C113.67 205.788 111.935 194.797 103.719 188.331Z"
          fill="black"
        />
        <path
          d="M23.9358 290.664L73.0247 250.526L98.636 281.848L87.3837 291.049L71.9954 272.229L61.4012 280.892L75.7671 298.461L65.1729 307.124L50.8069 289.554L34.1588 303.167L23.9358 290.664Z"
          fill="black"
        />
        <path
          d="M78.6304 330.394L91.0939 268.221L106.929 271.395L94.4654 333.568L78.6304 330.394Z"
          fill="black"
        />
        <path
          d="M170.136 272.244L171.327 335.643L156.03 335.93L129.654 298.594L129.569 298.596L130.28 336.414L114.897 336.703L113.706 273.305L129.173 273.014L155.366 309.673L155.451 309.671L154.753 272.533L170.136 272.244Z"
          fill="black"
        />
        <path
          d="M198.59 268.366C219.066 265.65 234.803 276.338 237.307 295.213C239.822 314.172 227.32 328.52 206.929 331.225L187.043 333.863L178.704 271.004L198.59 268.366ZM201.13 317.247L205.596 316.654C216.297 315.235 222.559 308.144 221.129 297.359C219.687 286.489 211.793 281.277 201.091 282.697L196.626 283.289L201.13 317.247Z"
          fill="black"
        />
        <path
          d="M288.907 317.615L283.912 293.389L252.958 260.283L270.607 256.644L289.186 277.721L289.519 277.652L298.079 250.979L314.812 247.529L299.629 290.062L304.641 314.37L288.907 317.615Z"
          fill="black"
        />
        <path
          d="M358.743 288.453C367.079 286.4 373.563 277.888 370.738 266.416C367.913 254.944 358.199 250.332 349.863 252.385C341.362 254.478 334.982 263.052 337.806 274.524C340.631 285.997 350.242 290.546 358.743 288.453ZM322.042 278.406C317.388 259.505 328.21 242.659 346.368 238.189C364.608 233.698 381.848 243.634 386.502 262.534C391.135 281.352 380.499 298.24 362.259 302.731C344.019 307.222 326.675 297.224 322.042 278.406Z"
          fill="black"
        />
        <path
          d="M430.312 284.865C414.104 289.396 401.26 281.337 397.026 266.193L386.797 229.601L402.35 225.252L412.58 261.844C414.708 269.458 419.804 272.534 426.353 270.703C433.066 268.827 435.992 263.507 433.841 255.813L423.634 219.302L439.188 214.954L449.417 251.546C453.651 266.691 446.685 280.288 430.312 284.865Z"
          fill="black"
        />
        <path
          d="M467.616 272.677L449.102 212.03L469.508 205.801C484.385 201.259 496.331 205.167 500.451 218.662C502.412 225.084 501.878 234.401 491.995 241.328L515.743 257.985L497.452 263.569L477.42 247.733L476.932 247.882L483.062 267.962L467.616 272.677ZM473.359 236.175L477.993 234.76C483.846 232.973 486.685 229.174 485.221 224.377C483.732 219.5 479.117 218.065 473.508 219.777L468.792 221.216L473.359 236.175Z"
          fill="black"
        />
        <path
          d="M545.019 180.229C551.305 178.121 557.594 177.895 562.595 178.907L567.189 192.608C562.402 191.165 555.602 191.472 550.525 193.175C545.448 194.877 543.007 197.758 543.98 200.659C544.925 203.48 548.339 203.769 554.63 204.081C563.957 204.36 575.328 204.851 579.382 216.939C583.192 228.302 577.163 239.199 562.979 243.955C555.404 246.495 547.689 246.482 542.418 244.932L537.581 230.506C543.068 232.701 550.542 233.333 556.909 231.198C562.55 229.306 565.071 225.861 563.99 222.638C562.801 219.092 558.07 218.885 551.591 218.547C543.688 218.239 532.827 217.398 529.071 206.195C525.531 195.638 531.157 184.876 545.019 180.229Z"
          fill="black"
        />
        <path
          d="M647.682 216.315L624.527 179.346L624.445 179.368L623.932 222.916L607.717 227.423L572.557 171.381L588.281 167.011L611.149 206.442L611.231 206.419L611.457 160.57L625.789 156.587L649.909 195.758L650.073 195.713L648.802 150.191L663.953 145.98L663.324 211.968L647.682 216.315Z"
          fill="black"
        />
        <path
          d="M683.441 207.354L669.348 145.53L685.094 141.941L699.187 203.765L683.441 207.354Z"
          fill="black"
        />
        <path
          d="M754.548 127.894L766.552 190.158L751.529 193.054L719.162 160.773L719.079 160.789L726.239 197.93L711.132 200.842L699.128 138.579L714.319 135.65L746.389 167.296L746.473 167.28L739.441 130.807L754.548 127.894Z"
          fill="black"
        />
        <path
          d="M788.264 154.938C789.821 165.449 798.269 172.016 808.191 170.547C811.218 170.098 813.557 169.065 815.665 167.635L812.825 148.464L827.288 146.322L831.497 174.742C826.066 179.843 819.234 183.605 809.984 184.975C792.327 187.59 775.143 177.16 772.154 156.981C769.178 136.885 782.672 121.825 800.329 119.21C808.317 118.027 815.174 119.073 820.727 121.172L823.031 136.727C816.955 133.417 810.173 132.875 804.623 133.697C793.02 135.416 786.732 144.596 788.264 154.938Z"
          fill="black"
        />
        <path
          d="M883.602 174.37L878.392 111.174L918.715 107.85L919.909 122.336L895.682 124.333L896.806 137.972L919.424 136.107L920.549 149.746L897.93 151.61L899.697 173.043L883.602 174.37Z"
          fill="black"
        />
        <path
          d="M932.202 170.634L928.791 107.315L944.917 106.447L948.328 169.765L932.202 170.634Z"
          fill="black"
        />
        <path
          d="M1016.38 104.725L1017.2 168.13L1001.9 168.326L975.745 130.834L975.66 130.835L976.146 168.657L960.762 168.854L959.948 105.45L975.417 105.251L1001.39 142.066L1001.48 142.064L1001 104.923L1016.38 104.725Z"
          fill="black"
        />
        <path
          d="M1051.63 106.165C1072.25 107.427 1085.65 120.935 1084.48 139.94C1083.31 159.029 1068.29 170.713 1047.76 169.456L1027.74 168.231L1031.61 104.939L1051.63 106.165ZM1044.75 154.625L1049.25 154.9C1060.02 155.559 1067.53 149.802 1068.19 138.943C1068.86 127.998 1062.11 121.368 1051.34 120.709L1046.84 120.434L1044.75 154.625Z"
          fill="black"
        />
        <path
          d="M1125.06 178.706L1131.01 154.698L1117.38 111.473L1134.87 115.809L1142.53 142.842L1142.86 142.924L1162.1 122.559L1178.68 126.671L1146.62 158.481L1140.65 182.572L1125.06 178.706Z"
          fill="black"
        />
        <path
          d="M1185.88 191.074C1191.54 197.526 1202.08 199.357 1210.96 191.564C1219.84 183.77 1219.46 173.024 1213.8 166.571C1208.02 159.991 1197.47 158.28 1188.59 166.074C1179.71 173.867 1180.1 184.493 1185.88 191.074ZM1177.88 153.871C1192.51 141.032 1212.45 142.873 1224.78 156.928C1237.17 171.046 1236.3 190.926 1221.67 203.766C1207.11 216.549 1187.22 214.892 1174.83 200.773C1162.43 186.655 1163.32 166.655 1177.88 153.871Z"
          fill="black"
        />
        <path
          d="M1166.14 221.87C1176.95 208.964 1192.1 208.345 1204.15 218.438L1233.29 242.827L1222.92 255.21L1193.79 230.822C1187.73 225.748 1181.78 226.094 1177.42 231.309C1172.94 236.653 1173.54 242.695 1179.67 247.823L1208.74 272.157L1198.37 284.541L1169.24 260.153C1157.18 250.059 1155.23 234.905 1166.14 221.87Z"
          fill="black"
        />
        <path
          d="M1144.69 245.827L1182.06 297.052L1164.83 309.627C1152.26 318.795 1139.69 319.02 1131.38 307.622C1127.42 302.197 1124.87 293.22 1131.94 283.436L1104.04 275.485L1119.49 264.213L1143.61 272.607L1144.02 272.306L1131.64 255.345L1144.69 245.827ZM1151.23 282.194L1147.32 285.05C1142.37 288.657 1140.94 293.177 1143.89 297.229C1146.9 301.349 1151.73 301.191 1156.47 297.734L1160.45 294.829L1151.23 282.194Z"
          fill="black"
        />
        <path
          d="M1121.53 329.895C1122.97 336.365 1122.55 342.645 1121.02 347.515L1106.92 350.669C1108.85 346.057 1109.25 339.261 1108.08 334.036C1106.91 328.81 1104.3 326.084 1101.31 326.752C1098.41 327.402 1097.77 330.768 1096.81 336.993C1095.57 346.241 1093.91 357.501 1081.46 360.284C1069.77 362.901 1059.55 355.779 1056.29 341.18C1054.54 333.383 1055.35 325.711 1057.44 320.628L1072.28 317.307C1069.54 322.538 1068.14 329.906 1069.6 336.459C1070.9 342.266 1074.07 345.129 1077.38 344.386C1081.03 343.57 1081.73 338.885 1082.73 332.476C1083.86 324.647 1085.81 313.932 1097.34 311.352C1108.21 308.921 1118.33 315.628 1121.53 329.895Z"
          fill="black"
        />
        <path
          d="M1171.67 376.748L1156.64 335.796L1156.55 335.801L1147.07 378.306L1130.27 379.369L1107.43 317.278L1123.72 316.247L1137.96 359.549L1138.04 359.543L1147.73 314.727L1162.57 313.787L1178.09 357.093L1178.26 357.082L1186.41 312.278L1202.1 311.284L1187.87 375.722L1171.67 376.748Z"
          fill="black"
        />
        <path
          d="M1210.19 372.593L1201.94 309.721L1217.96 307.621L1226.2 370.493L1210.19 372.593Z"
          fill="black"
        />
        <path
          d="M1286.53 297.171L1296.49 359.794L1281.38 362.197L1250.09 328.873L1250 328.887L1255.94 366.242L1240.75 368.658L1230.79 306.035L1246.07 303.606L1277.09 336.285L1277.17 336.271L1271.34 299.587L1286.53 297.171Z"
          fill="black"
        />
        <path
          d="M1315.72 324.501C1317.63 334.953 1326.29 341.236 1336.16 339.436C1339.17 338.887 1341.47 337.775 1343.53 336.276L1340.05 317.211L1354.43 314.587L1359.59 342.851C1354.33 348.13 1347.63 352.118 1338.43 353.796C1320.87 356.999 1303.35 347.149 1299.69 327.08C1296.04 307.095 1309.03 291.593 1326.59 288.39C1334.53 286.94 1341.42 287.758 1347.04 289.67L1349.86 305.14C1343.68 302.034 1336.88 301.719 1331.36 302.725C1319.82 304.83 1313.84 314.216 1315.72 324.501Z"
          fill="black"
        />
      </svg>
    </Box>
  );
};

const HeroImageOne = () => {
  const isMobile = useMediaQuery('(max-width:640px)');

  return <Box></Box>;
};

const HowItWorksSection = () => {
  const { palette, typography } = useTheme();
  const isMobile = useMediaQuery('(max-width:640px)');

  // const StyledButton = styled(Button)(
  //   ({ theme }) => `
  //       color: white;
  //       gap: 12px;
  //       font-size: 24px;
  //       text-transform: none;
  //       background-color: #529DC8;
  //       width: max-content;
  //       font-style: bold;
  // `,
  // );
  return (
    <Box
      sx={{
        display: 'flex',
        position: 'relative',
        backgroundColor: palette.primary.main,
        height: '700px',
        fontFamily: typography.fontFamily,
      }}
    >
      <Box
        sx={{
          margin: '28px auto',
          maxWidth: '1084px',
          width: '100%',
          display: 'flex',
        }}
      >
        <FindYourSwingRibbon />
        <Box
          sx={{
            display: 'flex',
            margin: 'auto 24px',
            padding: '16px 0px',
            position: 'relative',
            width: 'auto',
          }}
        >
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'column',
              width: '100%',
              minWidth: '200px',
              gap: '52px',
              ...(isMobile && { justifyContent: 'space-between' }),
            }}
          >
            <Box sx={{ width: 'max-content' }}>
              <Box
                sx={{
                  fontWeight: '900',
                  fontStyle: 'italic',
                  color: 'black',
                  fontSize: isMobile ? '56.25px' : '120px',
                  lineHeight: '70%',
                }}
              >
                <Box>DRINKS</Box>
                <Box sx={{ marginLeft: isMobile ? '13px' : '26px' }}>FOOD</Box>
                <Box sx={{ marginLeft: '22px' }}>& GOLF</Box>
                {/* <StackedTextComponent
                wordStack={['DRINKS', 'FOOD', '& GOLF']}
                xOffSet={20}
                yOffSet={80}
                fontSize={120}
              /> */}
              </Box>
              <Box
                sx={{
                  color: 'white',
                  ...typography.hero_medium,
                  fontSize: isMobile ? '16px' : '24px',
                }}
              >
                Something about indoor golf
                <br /> Learn about our facilities. <br /> Find your swing
              </Box>
            </Box>
            <Box sx={{ width: isMobile ? '100%' : '300px' }}>
              <Button
                sx={{
                  backgroundColor: '#529DC8',
                  textTransform: 'none',
                  color: 'white',
                  borderRadius: '33px',
                  padding: '14px 14px',
                  ...typography.hero_bold,
                  fontSize: isMobile ? '20px' : '24px',
                  ':hover': {
                    backgroundColor: '#529DC8',
                  },
                }}
                fullWidth
                disableRipple
              >
                How it Works &rarr;
              </Button>
            </Box>
          </Box>
          <TigerImage />
        </Box>
        <Box></Box>
      </Box>
    </Box>
  );
};

const GolfLoungeCopyComponent = () => {
  const { palette, typography } = useTheme();
  const isMobile = useMediaQuery('(max-width:640px)');

  return (
    <Box
      sx={{
        fontFamily: typography.fontFamily,
        ...typography.hero_super_italic,
        fontSize: isMobile ? '48px' : '64px',
        // position: 'relative',
      }}
    >
      <Box sx={{ display: 'flex', flexDirection: 'column', lineHeight: '80%' }}>
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'row',
            gap: '0.2ch',
          }}
        >
          <Box>INDOOR</Box>
          <Box sx={{ position: 'relative', width: 'max-content' }}>
            <Box sx={{ position: 'absolute', top: '-15px', left: '-20px' }}>
              <svg
                width="120%"
                height="100%"
                viewBox="0 0 255 84"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M179.908 75.782L180.237 78.2602L179.908 75.782ZM121.32 23.2751C119.941 23.355 118.888 24.5371 118.968 25.9155C119.048 27.2939 120.23 28.3466 121.609 28.2668L121.32 23.2751ZM129.06 0.397408C85.7651 -0.0940189 52.5944 6.15636 30.819 15.4732C19.9429 20.1266 11.7562 25.6105 6.61014 31.5447C1.43474 37.5127 -0.788178 44.114 0.799796 50.6898C2.36453 57.1694 7.48359 62.9904 15.585 67.8247C23.7123 72.6745 35.107 76.7011 49.8086 79.5082C79.2237 85.1247 122.337 85.945 180.237 78.2602L179.579 73.3037C121.984 80.948 79.4505 80.0777 50.7464 74.5969C36.3885 71.8554 25.6056 67.9817 18.1471 63.531C10.6626 59.0649 6.78769 54.1855 5.66009 49.5161C4.55572 44.9429 5.94214 39.9468 10.3876 34.8205C14.8624 29.6604 22.3081 24.5531 32.7858 20.0701C53.718 11.1141 86.1406 4.91057 129.003 5.39709L129.06 0.397408ZM180.237 78.2602C200.115 75.622 218.494 70.4413 231.902 64.2745C238.595 61.1964 244.164 57.8203 248.066 54.3054C251.891 50.8601 254.552 46.8755 254.359 42.5948C254.16 38.1682 250.992 34.5672 245.88 31.7802C240.733 28.974 233.088 26.6738 222.68 24.9784C201.825 21.5812 169.153 20.504 121.32 23.2751L121.609 28.2668C169.315 25.503 201.559 26.6037 221.876 29.9133C232.054 31.5712 239.06 33.7566 243.487 36.1702C247.949 38.603 249.28 40.956 249.364 42.8196C249.455 44.8291 248.183 47.471 244.72 50.5903C241.334 53.6401 236.26 56.7668 229.813 59.7319C216.943 65.6513 199.063 70.7178 179.579 73.3037L180.237 78.2602Z"
                  fill="#EB8B32"
                />
              </svg>
            </Box>
            GOLF
          </Box>
        </Box>
        <Box>LOUNGE!</Box>
      </Box>
    </Box>
  );
};

export default function Home() {
  const { palette, typography } = useTheme();
  const isMobile = useMediaQuery('(max-width:640px)');

  return (
    <Box
      sx={{
        backgroundColor: 'black',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      <Header
        navOptions={[
          { label: 'Food + Drink', to: '/menu' },
          { label: 'Events', to: '/events' },
          { label: 'Pricing', to: '/pricing' },
          { label: 'About', to: '/about' },
        ]}
      />

      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          gap: '32px',
          margin: '28px auto',
          maxWidth: '1084px',
          width: '100%',
          height: isMobile ? '1150px' : '900px',
          alignItems: 'center',
        }}
      >
        <Box
          sx={{
            display: 'flex',
            fontFamily: typography.fontFamily,
            justifyContent: 'space-between',
            flexDirection: isMobile ? 'column' : 'row',
            alignItems: isMobile ? 'center' : 'flex-start',
            gap: isMobile ? '20px' : '40px',
            width: '100%',
          }}
        >
          <Box
            sx={{
              display: 'flex',
              gap: '20px',
              flexDirection: 'column',
              position: 'relative',
            }}
          >
            <Box
              sx={{
                width: 'max-content',
                height: 'max-content',
                whiteSpace: 'nowrap',
                backgroundColor: 'white',
                borderRadius: '10px',
                ...typography.hero_super,
                fontSize: isMobile ? '24px' : '51px',
                color: 'black',
                padding: '6px 24px',
                transform: 'rotate(-1.58deg)',
              }}
            >
              TORONTO&apos;S BEST
            </Box>
            <GolfLoungeCopyComponent />

            <Box
              sx={{
                position: 'absolute',
                bottom: isMobile ? '-470px' : '-330px',
                rotate: '-3.11deg',
                zIndex: isMobile ? '5' : '6',
              }}
            >
              <ImageWithBackdrop
                width={isMobile ? 350 : 500}
                height={300}
                color="#9A92C5"
                // img="test"
                xOffset={isMobile ? 7.99 : 14.63}
                yOffset={isMobile ? 5.55 : 10.16}
              >
                <Box
                  sx={{
                    position: 'absolute',
                    zIndex: 5,
                    rotate: '3.38deg',
                    top: 0,
                    right: 0,
                  }}
                >
                  {/* <Button
                    component={TextWithBackdrop}
                    width={400}
                    height={100}
                    backdropColor="#EB8B32"
                    contentColor="#39775E"
                    text="Practice on Trackman Simulators &rarr;"
                    xOffset={0}
                    yOffset={-7}
                    css={{ borderRadius: '17px' }}
                    afterProps={{
                      alignItems: 'center',
                      textAlign: 'center',
                      fontFamily: typography.fontFamily,
                      ...typography.hero_semibold,
                      fontSize: 30.64,
                    }}
                  >
                    click
                  </Button> */}
                  <TextWithBackdrop
                    width={isMobile ? 300 : 500}
                    height={isMobile ? 50 : 70}
                    backdropColor="#39775E"
                    contentColor="#EB8B32"
                    text="Book a booth with friends &rarr;"
                    xOffset={0}
                    yOffset={-7}
                    css={{ borderRadius: '17px' }}
                    afterProps={{
                      alignItems: 'center',
                      textAlign: 'center',
                      fontFamily: typography.fontFamily,
                      ...typography.hero_semibold,
                      fontSize: isMobile ? 16.73 : 30.64,
                      justifyContent: 'center',
                    }}
                  />
                </Box>
              </ImageWithBackdrop>
            </Box>
          </Box>

          <Box
            sx={{
              display: 'flex',
              ...typography.hero_regular,
              fontSize: isMobile ? '18px' : '24px',
              flexDirection: 'column',
              gap: '8px',
              position: 'relative',
            }}
          >
            <Box sx={{ display: 'flex', gap: '18px' }}>
              <MapSVG />
              <Box sx={{ textDecoration: 'underline' }}>
                765 Address St, Toronto
              </Box>
            </Box>
            <Box sx={{ display: 'flex', gap: '18px' }}>
              <ParkingSVG />
              Parking Available at
              <br /> Heward Ave & Eastern Ave
            </Box>
            <Box sx={{ display: 'flex', gap: '1ch' }}>
              Open Monday &rarr; Saturday
              <Box sx={{ textDecoration: 'underline' }}>9am - 12pm</Box>{' '}
            </Box>
            <Box
              sx={{
                position: 'absolute',
                bottom: isMobile ? '-700px' : '-450px',
                right: '0px',
                rotate: '5.67deg',
                zIndex: isMobile ? '6' : '5',
              }}
            >
              <ImageWithBackdrop
                width={300}
                height={400}
                color="#F0E68C"
                // img="test"
                xOffset={isMobile ? -6.15 : -13.22}
                yOffset={isMobile ? 5.12 : 24.42}
              >
                <Box
                  sx={{
                    position: 'absolute',
                    zIndex: 5,
                    rotate: '-7.35deg',
                    bottom: isMobile ? -40 : -50,
                    left: isMobile ? 50 : -50,
                  }}
                >
                  {/* <Button
                    component={TextWithBackdrop}
                    width={400}
                    height={100}
                    backdropColor="#EB8B32"
                    contentColor="#39775E"
                    text="Practice on Trackman Simulators &rarr;"
                    xOffset={0}
                    yOffset={-7}
                    css={{ borderRadius: '17px' }}
                    afterProps={{
                      alignItems: 'center',
                      textAlign: 'center',
                      fontFamily: typography.fontFamily,
                      ...typography.hero_semibold,
                      fontSize: 30.64,
                    }}
                  >
                    click
                  </Button> */}
                  <TextWithBackdrop
                    width={isMobile ? 280 : 400}
                    height={isMobile ? 70 : 120}
                    backdropColor="#EB8B32"
                    contentColor="#39775E"
                    text="Practice on Trackman Simulators &rarr;"
                    xOffset={0}
                    yOffset={-7}
                    css={{ borderRadius: '17px' }}
                    afterProps={{
                      alignItems: 'center',
                      textAlign: 'center',
                      fontFamily: typography.fontFamily,
                      ...typography.hero_semibold,
                      fontSize: isMobile ? 16.73 : 30.64,
                    }}
                  />
                </Box>
              </ImageWithBackdrop>
            </Box>
          </Box>
        </Box>
        {/* // Image box */}

        {/* <TopBanner
          width="100%"
          height="100%"
          viewBox="0 0 1973 293"
          pathProps={{
            d: 'M 0.3257 244.537 C 21 244.537 28.5 238.5 142.377 169.919 C 343 49.0589 549.615 31.5 474.992 123.111 C 380.659 238.919 596.811 193.13 832.992 123.11 C 1255 -1.9998 1630.81 38.1808 1413.49 179.111 C 1248.49 286.111 1913 102.502 1972 102.502',
          }}
          text=" · COMING SOON · TORONTO'S BEST INDOOR GOLF LOUNGE  "
          textCount={3}
          strokeColor="#EB8B32"
        /> */}
      </Box>

      <HowItWorksSection />
    </Box>
  );
}
