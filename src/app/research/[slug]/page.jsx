import React from 'react';
import dynamic from 'next/dynamic';
import ResearchData from '@data/research/ResearchData.js';
import ResearchPage from '@components/research/ResearchPage';
export async function generateMetadata({params}) {
  const id = params.slug;
  const product = ResearchData.find(blog => blog.id === id);

  return {
    title: product.title,
    description: product.metaDescription,
    metadataBase: `https://trafy.ai/research/${product.id}`,
    type: 'article',
    openGraph: {
      title: product.title, 
      description: product.metaDescription,
      url: `https://trafy.ai/research/${product.id}`,
      images: [
        {
          url: product.metaImage,
          width: 1200,
          height: 630,
          alt: "trafy AI",
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: product.title,
      description: product.metaDescription,
      url: `https://trafy.ai/research/${product.id}`,
      image: product.metaImage, 
    },
  };
}

// Client component part
export default function Page({ params }) {
  const id = params.slug;
  const product = ResearchData.find(blog => blog.id === id);

  return (
    <ResearchPage {...product}/>
  );
}

