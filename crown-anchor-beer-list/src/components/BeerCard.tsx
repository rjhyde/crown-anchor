"use client";

import { Beer } from "@/types/beer";
import { useState } from "react";

type BeerCardProps = {
  beer: Beer;
};

export const BeerCard = ({ beer }: BeerCardProps) => {
  const [showDetails, setShowDetails] = useState(false);

  const toggleDetails = () => {
    setShowDetails(!showDetails);
  };

  // Helper function for color styling based on beer color
  const getColorStyle = (colorDescription: string | undefined) => {
    if (!colorDescription) return "bg-amber-100";
    
    if (colorDescription.includes("black")) return "bg-gray-900";
    if (colorDescription.includes("brown")) return "bg-amber-900";
    if (colorDescription.includes("amber")) return "bg-amber-600";
    if (colorDescription.includes("gold")) return "bg-amber-300";
    if (colorDescription.includes("straw")) return "bg-amber-100";
    if (colorDescription.includes("pink") || colorDescription.includes("red")) return "bg-red-300";
    if (colorDescription.includes("hazy")) return "bg-yellow-200 opacity-80";
    
    return "bg-amber-200";
  };

  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden border border-gray-200 dark:border-gray-700 transition-all hover:shadow-lg">
      <div className="p-5">
        <div className="flex justify-between items-start">
          <h3 className="text-xl font-bold text-gray-900 dark:text-white">{beer.name}</h3>
          <span className={`px-2 py-1 text-xs font-semibold rounded-full ${beer.onTap ? 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200' : 'bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200'}`}>
            {beer.onTap ? 'On Tap' : 'Coming Soon'}
          </span>
        </div>
        
        <div className="flex items-center mt-2">
          <div className="flex flex-wrap gap-2 items-center">
            <span className="text-sm font-medium text-indigo-600 dark:text-indigo-400">{beer.type}</span>
            <span className="text-sm text-gray-500 dark:text-gray-400">{beer.abv}% ABV</span>
            {beer.ibu && (
              <span className="text-sm text-gray-500 dark:text-gray-400">{beer.ibu} IBU</span>
            )}
            {beer.breweryName && (
              <span className="text-sm text-gray-600 dark:text-gray-300">
                <span className="text-gray-400 dark:text-gray-500">by</span> {beer.breweryName}
              </span>
            )}
          </div>
        </div>
        
        {/* Beer color indicator */}
        <div className="my-3 flex items-center gap-2">
          <div className={`w-6 h-6 rounded-full ${getColorStyle(beer.color)}`}></div>
          <span className="text-xs text-gray-500 dark:text-gray-400">{beer.color}</span>
        </div>
        
        <p className="mt-2 text-gray-600 dark:text-gray-300 text-sm">{beer.description}</p>
        
        <div className="mt-4 flex justify-between items-center">
          <span className="text-sm text-gray-500 dark:text-gray-400">Origin: {beer.origin}</span>
          <span className="font-bold text-gray-900 dark:text-white">${beer.price.toFixed(2)}</span>
        </div>
        
        <button 
          onClick={toggleDetails} 
          className="mt-4 w-full py-2 text-sm text-indigo-600 dark:text-indigo-400 hover:text-indigo-800 dark:hover:text-indigo-300 transition-colors flex items-center justify-center focus:outline-none"
        >
          {showDetails ? 'Hide Details' : 'Show Details'} 
          <svg className={`ml-1 h-4 w-4 transition-transform ${showDetails ? 'rotate-180' : ''}`} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
          </svg>
        </button>
        
        {showDetails && (
          <div className="mt-4 pt-4 border-t border-gray-200 dark:border-gray-700">
            {/* Flavor notes */}
            {beer.flavorNotes && beer.flavorNotes.length > 0 && (
              <div className="mb-4">
                <h4 className="text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Flavor Notes</h4>
                <div className="flex flex-wrap gap-2">
                  {beer.flavorNotes.map((note, index) => (
                    <span 
                      key={index} 
                      className="px-2 py-1 bg-amber-50 dark:bg-gray-700 text-amber-800 dark:text-amber-200 text-xs rounded-full"
                    >
                      {note}
                    </span>
                  ))}
                </div>
              </div>
            )}
            
            {/* Recommended glass type */}
            {beer.glassType && (
              <div className="mb-4">
                <h4 className="text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Recommended Glass</h4>
                <p className="text-sm text-gray-600 dark:text-gray-400">{beer.glassType}</p>
              </div>
            )}
            
            {/* Food pairings */}
            {beer.pairings && beer.pairings.length > 0 && (
              <div>
                <h4 className="text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Pairs Well With</h4>
                <div className="flex flex-wrap gap-2">
                  {beer.pairings.map((pairing, index) => (
                    <span 
                      key={index} 
                      className="px-2 py-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 text-xs rounded-full"
                    >
                      {pairing}
                    </span>
                  ))}
                </div>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
}; 