import './globals.css';
import Navbar from '../components/Navbar';
import AlertBanner from '../components/AlertBanner';
import Footer from '../components/Footer';

export const metadata = {
    title: 'Republik Federal Zirigan',
    description: 'Portal Resmi Pemerintahan Republik Federal Zirigan',
    icons: {
        icon: '/favicon.ico',
    }
};

export default function RootLayout({ children }) {
    return (
        <html lang="id">
         <body suppressHydrationWarning={true}>
                <AlertBanner />
                <Navbar />
                {children}
                <Footer/>
            </body>
        </html>
    );
}
