import '@styles/globals.css';
import Navbar from '@components/navbar/Navbar';
import Footer from '@components/footer/Footer';
import Head from 'next/head';


export const viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#ffffff"
};
 
export const metadata= {
  metadataBase: new URL("https://trafy.ai"),
  openGraph: {
    siteName: "trafy - Privacy first Resilient AI at scale",
    type: "website",
    locale: "en_US"
  },
  robots: {
    index: true,
    follow: true,
    "max-image-preview": "large",
    "max-snippet": -1,
    "max-video-preview": -1,
    googleBot: "index, follow"
  },
  alternates: {
    types: {
      "application/rss+xml": "https://trafy.ai/rss.xml"
    }
  },
  appleWebApp: {
    title: "trafy - Privacy first Resilient AI at scaleYour Personalised AI mentor",
    statusBarStyle: "default",
    capable: true
  },
  icons: {
    icon: [
      {
        url: "/favicon.ico",
        type: "image/x-icon"
      },
    ],
    shortcut: [
      {
        url: "/favicon.ico",
        type: "image/x-icon"
      }
    ],
  }
};

export default function RootLayout({ children }) {
   
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src='https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);})(window,document,'script','dataLayer','GTM-NX8D4BFD');`
          }}
        />
        <script
          dangerouslySetInnerHTML={{
            __html: `!function(f,b,e,v,n,t,s)
            {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
            n.callMethod.apply(n,arguments):n.queue.push(arguments)};
            if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
            n.queue=[];t=b.createElement(e);t.async=!0;
            t.src=v;s=b.getElementsByTagName(e)[0];
            s.parentNode.insertBefore(t,s)}(window, document,'script',
            'https://connect.facebook.net/en_US/fbevents.js');
            fbq('init', '534717322824766');
            fbq('track', 'PageView');`
          }}
        />
        </head>
      <body>
        {/* <ThemeProvider attribute="class" defaultTheme="light"> */}
        <Navbar/>
        {children}
        <Footer/>
        {/* </ThemeProvider> */}
      </body>
    </html>
  );
}
