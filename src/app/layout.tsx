import './globals.css';
// import '/Users/onanefeosah/Desktop/acegolf/public/fonts/style.css';
import { Inter } from 'next/font/google';
import { ThemeContextProvider } from '@/components/Theme-Context/themeContext.component';
import { Header } from '@/components/Header/header.component';
import { Footer } from '@/components/Footer/footer.component';
import { DynamicPageBackground } from '@/components/Helpers/dynamicPageBackground.component';
import { FooterV2 } from '@/components/Footer/footerV2.component';
const inter = Inter({ subsets: ['latin'] });

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
      <ThemeContextProvider>
        <body className={inter.className}>
          {/* <DynamicPageBackground> */}
          <Header />
          {children}
          <FooterV2 />
          {/* </DynamicPageBackground> */}
        </body>
      </ThemeContextProvider>
      <div className={ "subtleNoise" } ></div>
    </html>
  );
}
