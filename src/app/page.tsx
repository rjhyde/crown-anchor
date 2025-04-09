import { beers } from "@/data/beers";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Hero } from "@/components/Hero";
import { BeerList } from "@/components/BeerList";
import { About } from "@/components/About";
import { Location } from "@/components/Location";
import { TestImage } from "@/components/TestImage";

export default function Home() {
  return (
    <div className="min-h-screen bg-amber-50 dark:bg-gray-900">
      <Header />
      
      <main>
        <Hero />
        
        {/* Test Image Component */}
        <div className="container mx-auto px-4 my-4">
          <h2 className="text-xl font-bold mb-2">Test Image</h2>
          <TestImage />
        </div>
        
        <section id="beer-list" className="py-16 bg-amber-50 dark:bg-gray-900">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-10">
              <h2 className="text-3xl font-bold text-amber-800 dark:text-amber-500">Our Beer Selection</h2>
              <div className="w-24 h-1 bg-amber-800 dark:bg-amber-500 mx-auto mt-4 mb-6"></div>
              <p className="max-w-2xl mx-auto text-lg text-gray-600 dark:text-gray-300">
                Explore our carefully curated selection of craft beers. From local brews to international favorites.
              </p>
            </div>
            
            <BeerList beers={beers} />
          </div>
        </section>
        
        <About />
        
        <Location />
      </main>
      
      <Footer />
    </div>
  );
}
