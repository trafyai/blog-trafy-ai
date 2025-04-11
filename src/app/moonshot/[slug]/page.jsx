import React from 'react';
import dynamic from 'next/dynamic';
import BlogMetaData from '@data/blog/BlogMetaData';

export async function generateMetadata({params}) {
  const id = params.slug;
  const product = BlogMetaData.find(blog => blog.id === id);

  return {
    title: product.title,
    description: product.metaDescription,
    metadataBase: `https://blog.trafy.ai/${product.id}`,
    type: 'article',
    openGraph: {
      title: product.title, 
      description: product.metaDescription,
      url: `https://blog.trafy.ai/${product.id}`,
      images: [
        {
          url: product.metaImage,
          width: 1200,
          height: 630,
          alt: "trafy",
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: product.title,
      description: product.metaDescription,
      url: `https://blog.trafy.ai/${product.id}`,
      image: product.metaImage, 
    },
  };
}

// Client component part
export default function Page({ params }) {
  const id = params.slug;

  return (
    <DynamicBlogComponent slug={id} />
  );
}

// Dynamic import for client component
const DynamicBlogComponent = dynamic(() => import('./DynamicBlogComponent'));
