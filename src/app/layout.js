import '@styles/globals.css';
import Navbar from '@components/navbar/Navbar';
import Footer from '@components/footer/Footer';
// import { ThemeProvider } from '@context/ThemeContext';
import { ThemeProvider } from 'next-themes';

export const metadata = {
  title: "trafy AI",
  description: "trafy AI",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <ThemeProvider attribute="class" defaultTheme="light">
        <Navbar/>
        {children}
        <Footer/>
        </ThemeProvider>
      </body>
    </html>
  );
}
