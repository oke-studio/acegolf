import './globals.css';
// import '/Users/onanefeosah/Desktop/acegolf/public/fonts/style.css';
import localfont from 'next/font/local';
import { Providers } from './Providers';
import { Header } from '@/components/Header/header.component';
import { Footer } from '@/components/Footer/footer.component';
import { DynamicPageBackground } from '@/components/Helpers/dynamicPageBackground.component';
import { FooterV2 } from '@/components/Footer/footerV2.component';

const aceFont = localfont({
  src: [
    {
      path: 'fonts/Hero New HairLine.woff',
      weight: '100',
    },
    {
      path: 'fonts/Hero New HairLine Italic.woff',
      weight: '100',
      style: 'italic',
    },
    {
      path: 'fonts/Hero New Thin.woff',
      weight: '100',
    },
    {
      path: 'fonts/Hero New Thin Italic.woff',
      weight: '100',
      style: 'italic',
    },
    {
      path: 'fonts/Hero New UltraLight.woff',
      weight: '200',
    },
    {
      path: 'fonts/Hero New UltraLight Italic.woff',
      weight: '200',
      style: 'italic',
    },
    {
      path: 'fonts/Hero New Light.woff',
      weight: '300',
    },
    {
      path: 'fonts/Hero New Light Italic.woff',
      weight: '300',
      style: 'italic',
    },
    {
      path: 'fonts/Hero New Regular.woff',
      weight: '400',
    },
    {
      path: 'fonts/Hero New Regular Italic.woff',
      weight: '400',
      style: 'italic',
    },
    {
      path: 'fonts/Hero New Medium.woff',
      weight: '500',
    },
    {
      path: 'fonts/Hero New Medium Italic.woff',
      weight: '500',
      style: 'italic',
    },
    {
      path: 'fonts/Hero New SemiBold.woff',
      weight: '600',
    },
    {
      path: 'fonts/Hero New SemiBold Italic.woff',
      weight: '600',
      style: 'italic',
    },
    {
      path: 'fonts/Hero New Bold.woff',
      weight: '700',
    },
    {
      path: 'fonts/Hero New Bold Italic.woff',
      weight: '700',
      style: 'italic',
    },
    {
      path: 'fonts/Hero New ExtraBold.woff',
      weight: '800',
    },
    {
      path: 'fonts/Hero New ExtraBold Italic.woff',
      weight: '800',
      style: 'italic',
    },
    {
      path: 'fonts/Hero New Super.woff',
      weight: '900',
    },
    {
      path: 'fonts/Hero New Super Italic.woff',
      weight: '900',
      style: 'italic',
    },
  ],
});

export const metadata = {
  title: 'Ace Golf Bar',
  description: "Ace golf bar - Toronto's first ever indoor golf lounge",
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
