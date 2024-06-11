import * as React from 'react';
// import { Header } from '@/components/Header/header.component';
// import { Footer } from '@/components/Footer/footer.component';
import { FooterV2 } from '@/components/Footer/footerV2.component';
export default function HomeLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<>
			{children}
			<FooterV2 />
		</>
	);
}
