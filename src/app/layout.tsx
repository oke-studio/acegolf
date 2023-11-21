import './globals.css';
// import '/Users/onanefeosah/Desktop/acegolf/public/fonts/style.css';
import { Inter } from 'next/font/google';
import { ThemeContextProvider } from '@/components/Theme-Context/themeContext.component';
import { Header } from '@/components/Header/header.component';
import { Footer } from '@/components/Footer/footer.component';
import { DynamicPageBackground } from '@/components/Helpers/dynamicPageBackground.component';

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
          <Footer />
          {/* </DynamicPageBackground> */}
        </body>
      </ThemeContextProvider>
    </html>
  );
}
