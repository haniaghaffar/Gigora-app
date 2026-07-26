import React from 'react';
import { Helmet } from 'react-helmet-async';

export default function Seo() {
  return (
    <Helmet>
      <title>Gigora – AI‑Powered Proposal Generator</title>
      <meta name="description" content="Create winning freelance proposals instantly with AI. Boost conversion rates, save time, and win more projects." />
      <meta name="theme-color" content="#1A56DB" />
      <link rel="icon" href="/favicon.png" />
      {/* Open Graph */}
      <meta property="og:title" content="Gigora – AI Proposal Generator" />
      <meta property="og:description" content="Generate professional proposals instantly with AI. Try Gigora for free!" />
      <meta property="og:image" content="/og-image.png" />
      <meta property="og:url" content="https://gigora.com" />
      <meta property="og:type" content="website" />
      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content="Gigora – AI Proposal Generator" />
      <meta name="twitter:description" content="Create winning freelance proposals instantly with AI." />
      <meta name="twitter:image" content="/og-image.png" />
    </Helmet>
  );
}
