// 'use client';
// import React, { useState, useRef, useEffect } from 'react';
// import Image from 'next/image';
// import Link from 'next/link';
// import '@styles/navbar/Navbar.css';
// import logoBlack from '@public/assets/images/navbar/trafy-black-logo.png';
// import logoColor from '@public/assets/images/navbar/trafy-white-logo.svg';
// import arrow from '@public/assets/images/navbar/arrow-outward-black.svg';
// import arrowWhite from '@public/assets/images/navbar/arrow-outward-white.svg';
// import hamburgerBlack from '@public/assets/images/navbar/hamburger-black.svg';
// import closeBlack from '@public/assets/images/navbar/close-black.svg';
// import hamburgerIcon from '@public/assets/images/navbar/hamburger-white.svg';
// import closeIcon from '@public/assets/images/navbar/close-white.svg';
// // import { useTheme } from '@context/ThemeContext';
// import { useTheme } from 'next-themes';

// const Navbar = () => {
//   const [menuOpen, setMenuOpen] = useState(false);
//   const menuRef = useRef(null);
//   const { theme, setTheme } = useTheme();
//   const [isThemeReady, setIsThemeReady] = useState(false);

//   useEffect(() => {
//     setIsThemeReady(true);
//   }, [theme]);

//   // useEffect(() => {
//   //   const handleOutsideClick = (event) => {
//   //     if (menuRef.current && !menuRef.current.contains(event.target)) {
//   //       setMenuOpen(false);
//   //     }
//   //   };

//   //   document.addEventListener('mousedown', handleOutsideClick);
//   //   return () => {
//   //     document.removeEventListener('mousedown', handleOutsideClick);
//   //   };
//   // }, []);

//   const handleNavigation = (targetPath) => {
//     setMenuOpen(false);
//     if (targetPath.startsWith('#')) {
//       document.body.classList.remove('overflow');
//       const element = document.querySelector(targetPath);
//       if (element) {
//         element.scrollIntoView({ behavior: 'smooth' });
//       }
//     } else if (targetPath.startsWith('http')) {
//       window.location.href = targetPath;
//     } else {
//       document.body.classList.remove('overflow');
//     }
//   };

//   // // Select icons based on the current theme
//   // const hamburgerIcon = isThemeReady && theme === 'light' ? hamburgerBlack : hamburgerWhite;
//   // const closeIcon = isThemeReady && theme=== 'light' ? closeBlack : closeWhite;
//   // const logoColor = isThemeReady && theme === 'light' ? logoBlack : logoWhite;
//   // const arrow = isThemeReady && theme=== 'light' ? arrowWhite: arrowBlack

//   return (
//     <div className="navbar">
//       <div className="navbar-container" ref={menuRef}>
//         <Link href='/' className="navbar-logo">
//           <Image src={logoColor} alt="trafy logo" />
//         </Link>

//         <div className="navbar-contents">
//           <div className="navbar-research" onClick={() => handleNavigation('/')}>
//             Research
//           </div>
//           <div className="navbar-academy" onClick={() => handleNavigation('https://academy.trafy.ai/')}>
//             Academy
//           </div>
//           <div className="navbar-resources" onClick={() => handleNavigation('https://blog.trafy.ai/')}>
//             Resources
//           </div>
//           <div className="navbar-community" onClick={() => handleNavigation('/')}>
//             Community
//           </div>
//           <Link href='http://app.trafy.ai/' className="navbar-button">
//             Try trafy
//             <Image src={arrow} alt="chat-icon" width={16} height={16} />
//           </Link>
//         </div>

//         <div className="navbar-contents-menu">
//           <Image src={menuOpen ? closeIcon : hamburgerIcon} alt={menuOpen ? 'close-icon' : 'hamburger-icon'}
//             width={24} height={24} onClick={() => setMenuOpen(!menuOpen)}/>
//         </div>
//       </div>
//       <div className={`navbar-contents-drop ${menuOpen ? 'open' : ''}`}>
//         <div className="navbar-contents-mobile">
//           <div className="navbar-research" onClick={() => handleNavigation('/')}>
//             Research
//           </div>
//           <div className="navbar-academy" onClick={() => handleNavigation('https://academy.trafy.ai/')}>
//             Academy
//           </div>
//           <div className="navbar-resources" onClick={() => handleNavigation('https://blog.trafy.ai/')}>
//             Resources
//           </div>
//           <div className="navbar-community" onClick={() => handleNavigation('/')}>
//             Community
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Navbar;

'use client';
import React, { useState, useRef, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import '@styles/navbar/Navbar.css';
import logoBlack from '@public/assets/images/navbar/trafy-black-logo.png';
import logoColor from '@public/assets/images/navbar/trafy-white-logo.png';
import arrow from '@public/assets/images/navbar/arrow-outward-black.svg';
import arrowWhite from '@public/assets/images/navbar/arrow-outward-white.svg';
import hamburgerBlack from '@public/assets/images/navbar/hamburger-black.svg';
import closeBlack from '@public/assets/images/navbar/close-black.svg';
import hamburgerIcon from '@public/assets/images/navbar/hamburger-white.svg';
import closeIcon from '@public/assets/images/navbar/close-white.svg';
import { useTheme } from 'next-themes';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const menuRef = useRef(null);
  const { theme, setTheme } = useTheme();
  const [isThemeReady, setIsThemeReady] = useState(false);

  useEffect(() => {
    setIsThemeReady(true);
  }, [theme]);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handleNavigation = (targetPath) => {
    setMenuOpen(false);
    if (targetPath.startsWith('#')) {
      document.body.classList.remove('overflow');
      const element = document.querySelector(targetPath);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    } else if (targetPath.startsWith('http')) {
      window.location.href = targetPath;
    } else {
      document.body.classList.remove('overflow');
    }
  };

  return (
    <div className={`navbar ${isScrolled ? 'scrolled' : ''}`}>
      <div className="navbar-container" ref={menuRef}>
        <Link href='/' className="navbar-logo">
          <Image src={logoColor} alt="trafy logo" />
        </Link>

        <div className="navbar-contents">
          <div className="navbar-research" onClick={() => handleNavigation('/')}>
            Research
          </div>
          <div className="navbar-academy" onClick={() => handleNavigation('https://academy.trafy.ai/')}>
            Academy
          </div>
          <div className="navbar-resources" onClick={() => handleNavigation('https://blog.trafy.ai/')}>
            Resources
          </div>
          <div className="navbar-community" onClick={() => handleNavigation('/')}>
            Community
          </div>
          <Link href='http://app.trafy.ai/' className="navbar-button">
            Try trafy
            <Image src={arrow} alt="chat-icon" width={16} height={16} />
          </Link>
        </div>

        <div className="navbar-contents-menu">
          <Image src={menuOpen ? closeIcon : hamburgerIcon} alt={menuOpen ? 'close-icon' : 'hamburger-icon'}
            width={24} height={24} onClick={() => setMenuOpen(!menuOpen)}/>
        </div>
      </div>
      <div className={`navbar-contents-drop ${menuOpen ? 'open' : ''}`}>
        <div className="navbar-contents-mobile">
          <div className="navbar-research" onClick={() => handleNavigation('/')}>
            Research
          </div>
          <div className="navbar-academy" onClick={() => handleNavigation('https://academy.trafy.ai/')}>
            Academy
          </div>
          <div className="navbar-resources" onClick={() => handleNavigation('https://blog.trafy.ai/')}>
            Resources
          </div>
          <div className="navbar-community" onClick={() => handleNavigation('/')}>
            Community
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
