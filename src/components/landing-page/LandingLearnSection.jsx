'use client'
import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import blogImage from '@public/assets/images/blog/BlogImage/evolve-intelligence-card.png';

const LandingLearnSection = () => {
  return (
    <div className='landing-learn'>
      <Link href="/research/evolve-intelligence-transmutable-resilient-ai" className='landing-learn-container'>
        <div className='landing-learn-image'>
          <Image src={blogImage} alt='Evolve Intelligence - Transmutable Resilient AI'/>
        </div>
        <div className='landing-learn-content'>
          <h3>Research</h3>
          <h2>Evolve Intelligence - Transmutable Resilient AI</h2>
          <p>Improving the AI study to train the models that can adapt, overcome challenges in learning and generating bias-free information, and evolve to provide distinguished types of narrative information to every query.</p>
          <span>Learn more</span>
        </div>
      </Link>
    </div>
  );
};

export default LandingLearnSection;
