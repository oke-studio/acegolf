import './globals.css';
// import { Metadata } from 'next';
// import localfont from 'next/font/local';
import { Providers } from './Providers';
import { Header } from '@/components/Header/header.component';
// import { Footer } from '@/components/Footer/footer.component';
import { DynamicPageBackground } from '@/components/Helpers/dynamicPageBackground.component';
import { FooterV2 } from '@/components/Footer/footerV2.component';

import { aceFont } from '@/components/Theme-Context/fontValues';
import { HeaderBanner } from '@/components/Header/headerBanner.component';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
export const metadata = {
  title: 'Ace Golf Bar',
  description: "Ace golf bar - Toronto's Coolest Indoor Golf & Lounge",
};
// export const safariBrowserTheme: Metadata ={

//   name: 'theme-color',
//   content: '#ecd96f',

// }

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" style={{ overflowX: 'hidden' }}>
      <Providers>
        <meta name="theme-color" content="#39775E"></meta>
        <body
          className={aceFont.className}
          style={{ backgroundColor: '#171717' }}
        >
          <DynamicPageBackground>
            <HeaderBanner />
            <Header />
            {children}
            <FooterV2 />
          </DynamicPageBackground>
          <ReactQueryDevtools
            initialIsOpen={false}
            buttonPosition="bottom-left"
            position="bottom"
            styleNonce=""
          />
          <div
            className={'subtleNoise'}
            style={{
              // zIndex: 100,
              pointerEvents: 'none',
            }}
          ></div>
        </body>
      </Providers>
    </html>
  );
}
