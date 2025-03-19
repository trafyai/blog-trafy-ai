'use client'
import React,{useState, useEffect} from 'react'
import '@styles/landing-page/LandingPage.css';
import arrow from '@public/assets/images/navbar/arrow-outward-black.svg';
import { HiMiniArrowUpRight } from "react-icons/hi2";
import Image from 'next/image';
import Link from 'next/link';
// import { useTheme } from '@context/ThemeContext';
import { useTheme } from 'next-themes';

const LandingHeroSection = () => {
  const { theme, setTheme } = useTheme();
  const [isThemeReady, setIsThemeReady] = useState(false);

  useEffect(() => {
    // Wait for the theme to be fully resolved before rendering the icons
    setIsThemeReady(true);
  }, [theme]);

    // const arrow = isThemeReady && theme === 'light' ? arrowWhite: arrowBlack
  
  return (
    <div className='landing-hero'>
        <div className='landing-hero-container'>
            <h1>Privacy first Resilient AI at scale</h1>
            <p>Build for Easy Agent Development</p>
            <Link href='http://app.trafy.ai/' className='landing-hero-button'>
                Try trafy
                <HiMiniArrowUpRight style={{width:"24px",height:"24px",color:"var(--h-white)"}} />
            </Link>
        </div>
    </div>
  )
}

export default LandingHeroSection