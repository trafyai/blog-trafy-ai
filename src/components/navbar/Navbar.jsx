'use client';
import React, { useState, useRef, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import '@styles/navbar/Navbar.css';
import logoBlack from '@public/assets/images/navbar/trafy.png';
import logoColor from '@public/assets/images/navbar/trafy.png';
import arrow from '@public/assets/images/navbar/arrow-outward-black.svg';
import arrowWhite from '@public/assets/images/navbar/arrow-outward-white.svg';
import hamburgerBlack from '@public/assets/images/navbar/hamburger-black.svg';
import closeBlack from '@public/assets/images/navbar/close-black.svg';
import hamburgerIcon from '@public/assets/images/navbar/hamburger-white.svg';
import closeIcon from '@public/assets/images/navbar/close-white.svg';
import { useRouter } from "next/navigation";
import { MdOutlineMenu } from "react-icons/md";
import { IoMdClose } from "react-icons/io";
import { HiMiniArrowUpRight } from "react-icons/hi2";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const menuRef = useRef(null);
  const router = useRouter();

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
    document.body.classList.remove("overflow");
  
    if (targetPath.startsWith("#")) {
      const element = document.querySelector(targetPath);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    } else {
      router.push(targetPath); // Use Next.js navigation
    }
  };

  return (
    <div className={`navbar ${isScrolled ? 'scrolled' : ''}`}>
      <div className="navbar-container" ref={menuRef}>
        <Link href='/' className="navbar-logo">
          <Image src={logoColor} alt="trafy logo" />
        </Link>

        <div className="navbar-contents">
          <div className="navbar-research" onClick={() => handleNavigation('/research/evolve-intelligence-transmutable-resilient-ai')}>
            Research
          </div>
          {/* <div className="navbar-resources" onClick={() => handleNavigation('https://blog.trafy.ai/')}>
            Resources
          </div> */}
          <div className="navbar-community" onClick={() => handleNavigation('/')}>
            Community
          </div>
          <Link href='http://app.trafy.ai/' className="navbar-button">
            Signup
            {/* <Image src={arrow} alt="chat-icon" width={16} height={16} /> */}
          </Link>
        </div>

        <div className="navbar-contents-menu">
         {!menuOpen && <MdOutlineMenu  alt={menuOpen ? 'close-icon' : 'hamburger-icon'}
          onClick={() => setMenuOpen(!menuOpen)} style={{color:"#6c6c6c",width:"24px",height:"24px"}}/>}
          {menuOpen &&  <IoMdClose alt={menuOpen ? 'close-icon' : 'hamburger-icon'}   width={40} height={40} onClick={() => setMenuOpen(!menuOpen)}
            style={{color:"#6c6c6c",width:"24px",height:"24px"}}/>}

        </div>
      </div>
      <div className={`navbar-contents-drop ${menuOpen ? 'open' : ''}`}>
        <div className="navbar-contents-mobile">
          <div className="navbar-research" onClick={() => handleNavigation('/research/evolve-intelligence-transmutable-resilient-ai')}>
            Research
          </div>
          {/* <div className="navbar-resources" onClick={() => handleNavigation('https://blog.trafy.ai/')}>
            Resources
          </div> */}
          <div className="navbar-community" onClick={() => handleNavigation('/')}>
            Community
          </div>
          <Link href='http://app.trafy.ai/' className="navbar-button">
            Signup
            <HiMiniArrowUpRight style={{width:"20px",height:"20px",color:"var(--p-black)"}} />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
