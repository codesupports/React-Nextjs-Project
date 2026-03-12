'use client';  // This makes the component client-side only

import { useState, useEffect } from 'react';
import Head from 'next/head';



interface ClientMetaTagsProps {
  title: string
}

const ClientMetaTags = ({ title }: ClientMetaTagsProps) => {
  const [metaTitle, setMetaTitle] = useState(title);

  // Optionally, you can update metadata dynamically here
  useEffect(() => {
    setMetaTitle(title);
  }, [title]);

  return (
    <Head>
      <meta property="og:title" content={metaTitle} />
      <title>{metaTitle}</title>
    </Head>
  );
};

export default ClientMetaTags;
