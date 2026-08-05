import React from "react";
import { Helmet } from "react-helmet-async";


export default function Seo() {

  return (

    <Helmet>


      {/* Primary SEO */}

      <title>
        Gigora – AI Proposal Generator for Freelancers
      </title>


      <meta
        name="description"
        content="Gigora helps freelancers create winning proposals, optimize gigs with AI SEO, and improve profiles to attract more clients."
      />


      <meta
        name="keywords"
        content="AI proposal generator, freelancer tools, gig SEO optimizer, freelance AI assistant, Upwork proposals, Fiverr gigs"
      />


      <meta
        name="author"
        content="Gigora"
      />


      <meta
        name="robots"
        content="index, follow"
      />


      <meta
        name="theme-color"
        content="#1A56DB"
      />



      {/* Canonical */}

      <link
        rel="canonical"
        href="https://gigora.com"
      />



      {/* Favicon */}

      <link
        rel="icon"
        href="/favicon.png"
      />





      {/* Open Graph */}

      <meta
        property="og:title"
        content="Gigora – AI Tools for Freelancers"
      />


      <meta
        property="og:description"
        content="Create professional proposals, optimize gigs, and grow your freelance career with AI."
      />


      <meta
        property="og:image"
        content="/og-image.png"
      />


      <meta
        property="og:url"
        content="https://gigora.com"
      />


      <meta
        property="og:type"
        content="website"
      />





      {/* Twitter Card */}

      <meta
        name="twitter:card"
        content="summary_large_image"
      />


      <meta
        name="twitter:title"
        content="Gigora – AI Proposal Generator"
      />


      <meta
        name="twitter:description"
        content="Generate winning freelance proposals and optimize your gigs with AI."
      />


      <meta
        name="twitter:image"
        content="/og-image.png"
      />



    </Helmet>

  );

}