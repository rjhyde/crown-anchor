"use client";

export const Hero = () => {
  return (
    <div className="relative overflow-hidden">
      {/* Background image with regular img tag */}
      <div className="absolute inset-0 z-0">
        <div className="relative w-full h-full">
          <img
            src="/images/bar-slide-2_11.jpg"
            alt="Crown &amp; Anchor Pub interior"
            className="object-cover w-full h-full"
          />
        </div>
        {/* Overlay to darken image and improve text readability */}
        <div className="absolute inset-0 bg-gradient-to-b from-amber-950/80 via-amber-900/70 to-amber-950/80"></div>
      </div>
      
      <div className="relative z-10 max-w-7xl mx-auto py-24 px-4 sm:px-6 lg:px-8 flex flex-col items-center justify-center min-h-[70vh]">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white text-center tracking-tight shadow-text">
          The Crown &amp; Anchor Pub
        </h1>
        
        <p className="mt-6 text-xl md:text-2xl text-amber-100 text-center max-w-3xl shadow-text">
          Monterey&apos;s finest selection of craft beers and traditional pub atmosphere
        </p>
        
        <div className="mt-12 flex flex-col sm:flex-row gap-4 justify-center">
          <a 
            href="#beer-list" 
            className="px-8 py-3 text-lg font-medium rounded-md text-amber-900 bg-amber-100 hover:bg-white transition duration-300 shadow-md"
          >
            View Our Beer List
          </a>
          
          <a 
            href="#about" 
            className="px-8 py-3 text-lg font-medium rounded-md text-white border-2 border-amber-100 hover:bg-amber-800 transition duration-300"
          >
            About Us
          </a>
        </div>
      </div>
    </div>
  );
}; 