import * as React from 'react';
import { Header } from '@/components/Header/header.component';
import { Footer } from '@/components/Footer/footer.component';

export default function HomeLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Header
        navOptions={[
          { label: 'Food + Drink', to: '/menu' },
          { label: 'Events', to: '/events' },
          { label: 'Pricing', to: '/pricing' },
          { label: 'About', to: '/about' },
        ]}
      />
      {children}
      <Footer />
    </>
  );
}
