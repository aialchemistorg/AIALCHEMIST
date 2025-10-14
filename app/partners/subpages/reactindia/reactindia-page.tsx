// app/partners/subpages/reactindia-page/page.tsx
'use client';

import { ArrowLeft } from 'lucide-react';
import { useRouter } from 'next/navigation';

// The URL of the external website to embed
const REACT_INDIA_URL = 'https://www.reactindia.io';
const PAGE_TITLE = 'React India Conference';

const ReactIndiaEmbedPage = () => {
  const router = useRouter();

  return (
    // This container fills the entire viewport
    <div className="flex flex-col h-screen w-screen bg-black">
      {/* Custom Header */}
      <header className="flex items-center p-4 bg-black border-b border-red-600/20 shadow-lg sticky top-0 w-full z-50 h-16">
        <button
          onClick={() => router.back()}
          className="inline-flex items-center text-white hover:text-red-400 transition-colors mr-4"
        >
          <ArrowLeft className="mr-2" size={24} /> Back to Partners
        </button>
        <h1 className="text-xl font-bold text-white truncate">
          <span className="bg-gradient-to-r from-red-400 to-orange-400 bg-clip-text text-transparent">{PAGE_TITLE}</span>
        </h1>
      </header>
      
      {/* The Iframe element */}
      <iframe
        // The src is hardcoded to the external website
        src={REACT_INDIA_URL}
        title={PAGE_TITLE}
        // Tailwind classes to make the iframe fill the rest of the screen below the header
        className="flex-grow w-full border-0" 
        // Essential attributes for security and functionality
        // We allow some actions like scripts and popups, as needed for a fully functional embedded site
        sandbox="allow-scripts allow-same-origin allow-popups allow-forms allow-modals"
        allowFullScreen
      >
        <p className="text-white p-4">
            Your browser does not support iframes, or the external site's security policy prevents it from being displayed. 
            <a href={REACT_INDIA_URL} target="_blank" rel="noopener noreferrer" className="text-red-400 underline ml-1">Click here to open in a new tab.</a>
        </p>
      </iframe>
    </div>
  );
};

export default ReactIndiaEmbedPage;