import './globals.css';
// import '/Users/onanefeosah/Desktop/acegolf/public/fonts/style.css';
import localfont from 'next/font/local';
import { Providers } from './Providers';
import { Header } from '@/components/Header/header.component';
import { Footer } from '@/components/Footer/footer.component';
import { DynamicPageBackground } from '@/components/Helpers/dynamicPageBackground.component';
import { FooterV2 } from '@/components/Footer/footerV2.component';

import { aceFont } from '@/components/Theme-Context/fontValues';

export const metadata = {
  title: 'Ace Golf Bar',
  description: "Ace golf bar - Toronto's Coolest Indoor Golf & Lounge",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <Providers>
        <body
          className={aceFont.className}
          style={{ backgroundColor: '#171717' }}
        >
          {/* <DynamicPageBackground> */}
          <Header />
          {children}
          <FooterV2 />
          {/* </DynamicPageBackground> */}

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
