// 'use client'
// import React, { useEffect, useState } from 'react';
// import '@styles/footer/Footer.css';
// import Image from 'next/image';
// import Link from 'next/link';
// import logo from '@public/assets/images/navbar/trafy-black-logo.png';

// const Footer = () => {
//   const [theme, setTheme] = useState('light');

//   useEffect(() => {
//     // Check system preference
//     const systemPreference = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
//     const storedPreference = localStorage.getItem('theme') || systemPreference;
//     setTheme(storedPreference);
//     document.documentElement.classList.add(storedPreference);
//   }, []);

//   const toggleTheme = (selectedTheme) => {
//     setTheme(selectedTheme);
//     localStorage.setItem('theme', selectedTheme);
//     document.documentElement.classList.remove('light', 'dark');
//     document.documentElement.classList.add(selectedTheme);
//   };

//   return (
//     <div className="footer">
//       <div className="footer-container">
//         <div className="footer-left">
//           <Image src={logo} alt="trafy logo" />
//         </div>
//         <div className="footer-right">
//           <div className="footer-right-contents">
//             <Link href="/">Terms of Services</Link>
//             <Link href="/">Privacy Policy</Link>
//             <Link href="/">Cancellation Policy</Link>
//           </div>
//           <div className="footer-right-contents">
//             <Link href="/">LinkedIn</Link>
//             <Link href="/">Instagram</Link>
//             <Link href="/">X</Link>
//           </div>
//           <div className="footer-right-contents">
//             <p>© 2025, trafy</p>
//             <div className="footer-theme">
//               <p>Theme</p>
//               {/* <div className="theme-change-button">
//                 <span
//                   className={`light-theme ${theme === 'light' ? 'active' : ''}`}
//                   onClick={() => toggleTheme('light')}
//                 ></span>
//                 <span
//                   className={`dark-theme ${theme === 'dark' ? 'active' : ''}`}
//                   onClick={() => toggleTheme('dark')}
//                 ></span>
//               </div> */}
//               <div
//   className="theme-change-button"
//   onClick={() => toggleTheme(theme === 'light' ? 'dark' : 'light')}
// >
//   <span className={`light-theme ${theme === 'light' ? 'active' : ''}`}></span>
//   <span className={`dark-theme ${theme === 'dark' ? 'active' : ''}`}></span>
// </div>

//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Footer;


'use client';
import React, {useState, useEffect} from 'react';
import '@styles/footer/Footer.css';
import Image from 'next/image';
import Link from 'next/link';
// import { useTheme } from '@/context/ThemeContext'; // Adjust the path as needed
import { useTheme } from 'next-themes';
import logoBlack from '@public/assets/images/navbar/trafy-black-logo.png';
import logoWhite from '@public/assets/images/navbar/trafy-white-logo.png';

const Footer = () => {
  const { theme, setTheme, resolvedTheme } = useTheme();
  const [storedTheme, setStoredTheme] = useState(null);
 const [isThemeReady, setIsThemeReady] = useState(false);

  useEffect(() => {
    // Wait for the theme to be fully resolved before rendering the icons
    setIsThemeReady(true);
  }, [theme]);
  // Retrieve the theme from localStorage when the component mounts
  useEffect(() => {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
      setStoredTheme(savedTheme);
    } else {
      setStoredTheme(resolvedTheme);  // Fallback to resolvedTheme if no theme is saved
    }
  }, []);

  // Update the localStorage whenever the resolvedTheme changes
  useEffect(() => {
    if (resolvedTheme) {
      localStorage.setItem('theme', resolvedTheme);
    }
  }, [resolvedTheme]);

  const logo = isThemeReady && theme=== 'light' ? logoBlack : logoWhite;

  return (
    <div className="footer">
      <div className="footer-container">
        <div className="footer-left">
          <Image src={logo} alt="trafy logo" />
        </div>
        <div className="footer-right">
          <div className="footer-right-contents">
            <Link href="/terms-of-service">Terms of Services</Link>
            <Link href="/privacy-policy">Privacy Policy</Link>
            <Link href="/cancellation-policy">Cancellation Policy</Link>
          </div>
          <div className="footer-right-contents">
            <Link href="https://www.linkedin.com/company/trafyai">LinkedIn</Link>
            <Link href="https://www.instagram.com/trafyai">Instagram</Link>
            <Link href="https://twitter.com/trafyai">X</Link>
          </div>
          <div className="footer-right-contents">
            <p>© 2025, trafy</p>
            <div className="footer-theme">
              <p>Theme</p>
              <div
                className="theme-change-button"
                onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}
              >
                <span className={`light-theme ${theme === 'light' ? 'active' : ''}`}></span>
                <span className={`dark-theme ${theme === 'dark' ? 'active' : ''}`}></span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;

