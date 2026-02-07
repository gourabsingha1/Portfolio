import './globals.css';
import { Outfit, Inter } from 'next/font/google';

const outfit = Outfit({ subsets: ['latin'], variable: '--font-heading', display: 'swap' });
const inter = Inter({ subsets: ['latin'], variable: '--font-body', display: 'swap' });

export const metadata = {
    title: 'Gourab Singha | Creative Developer & Software Engineer',
    description: 'Portfolio of Gourab Singha. Software Engineer at Visa, former intern at CRED. Specialized in Android, Web Development, and creating immersive digital experiences.',
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <html lang="en" className={`${outfit.variable} ${inter.variable}`}>
            <body>{children}</body>
        </html>
    );
}
