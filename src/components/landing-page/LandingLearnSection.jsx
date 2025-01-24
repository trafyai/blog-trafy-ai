// 'use client'
// import React from 'react'
// import Image from 'next/image'
// import arrowBlack from '@public/assets/images/navbar/arrow-outward-black.svg';
// import arrowWhite from '@public/assets/images/navbar/arrow-outward-white.svg';
// // import { useTheme } from '@context/ThemeContext'; // Adjust the path as needed
// import { useTheme } from 'next-themes';

// const LandingLearnSection = () => {
//       const { resolvedTheme } = useTheme();
//       console.log("Theme",resolvedTheme);
//       const arrow = resolvedTheme === 'light' ? arrowWhite: arrowBlack;
//       console.log("Arrow",arrow);

//   return (
//     <div className='landing-learn'>
//         <div className='landing-learn-container'>
//             <h2>Gain AI Skills and Learn how AI is transforming Industries  </h2>
//              <div className='landing-learn-button'>
//                Explore Courses 
//                 <Image src={arrow} width={20} height={20} alt='arrow-right' key={resolvedTheme}/>
//             </div>
//         </div>
//     </div>
//   )
// }

// export default LandingLearnSection

'use client'
import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import arrowBlack from '@public/assets/images/navbar/arrow-outward-black.svg';
import arrowWhite from '@public/assets/images/navbar/arrow-outward-white.svg';
import { useTheme } from 'next-themes';

const LandingLearnSection = () => {
  const { theme, setTheme } = useTheme();
  const [isThemeReady, setIsThemeReady] = useState(false);

  useEffect(() => {
    // Wait for the theme to be fully resolved before rendering the icons
    setIsThemeReady(true);
  }, [theme]);

  const arrow = isThemeReady && theme === 'light' ? arrowWhite : arrowBlack;

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
      // Assuming router.push() logic here
    }
  };
  return (
    <div className='landing-learn'>
      <div className='landing-learn-container'>
        <h2>Gain AI Skills and Learn how AI is transforming Industries</h2>
        <div className='landing-learn-button' onClick={() => handleNavigation('https://academy.trafy.ai/')}>
          Explore Courses
          <Image src={arrow} width={20} height={20} alt='arrow-right' />
        </div>
      </div>
    </div>
  );
};

export default LandingLearnSection;
