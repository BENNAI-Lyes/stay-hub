import type { Metadata } from 'next';
import { Nunito } from 'next/font/google';
import './globals.css';

const nunito = Nunito({ subsets: ['latin'] });

export const metadata: Metadata = {
	title: 'stayHub',
	description:
		'StayHub is a meticulously crafted hospitality platform designed to redefine the way we experience travel and accommodations. With a seamless blend of modern design, user-friendly functionality, and a diverse array of listings',
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang="en">
			<body className={nunito.className}>{children}</body>
		</html>
	);
}
