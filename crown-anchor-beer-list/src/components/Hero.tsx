export const Hero = () => {
  return (
    <div className="relative bg-amber-900 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-amber-800 to-amber-950 opacity-90"></div>
      
      <div className="relative max-w-7xl mx-auto py-24 px-4 sm:px-6 lg:px-8 flex flex-col items-center justify-center min-h-[50vh]">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white text-center tracking-tight">
          The Crown & Anchor Pub
        </h1>
        
        <p className="mt-6 text-xl md:text-2xl text-amber-100 text-center max-w-3xl">
          Monterey's finest selection of craft beers and traditional pub atmosphere
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
      
      <div className="absolute bottom-0 w-full h-16 bg-gradient-to-t from-amber-50 dark:from-gray-900 to-transparent"></div>
    </div>
  );
}; 