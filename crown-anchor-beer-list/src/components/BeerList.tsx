"use client";

import { Beer, BeerType } from "@/types/beer";
import { BeerCard } from "./BeerCard";
import { useState } from "react";

type BeerListProps = {
  beers: Beer[];
};

export const BeerList = ({ beers }: BeerListProps) => {
  const [filter, setFilter] = useState<string>("all");
  const [showOnlyOnTap, setShowOnlyOnTap] = useState(false);

  const filteredBeers = beers.filter((beer) => {
    if (showOnlyOnTap && !beer.onTap) {
      return false;
    }
    
    if (filter === "all") {
      return true;
    }
    
    return beer.type === filter;
  });

  const beerTypes = Object.values(BeerType);

  return (
    <div className="w-full">
      <div className="mb-6 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <label htmlFor="type-filter" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
            Filter by Type
          </label>
          <select
            id="type-filter"
            value={filter}
            onChange={(e) => setFilter(e.target.value)}
            className="bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-700 rounded-md py-2 px-3 text-sm shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
          >
            <option value="all">All Types</option>
            {beerTypes.map((type) => (
              <option key={type} value={type}>
                {type}
              </option>
            ))}
          </select>
        </div>
        
        <div className="flex items-center">
          <input
            type="checkbox"
            id="on-tap-filter"
            checked={showOnlyOnTap}
            onChange={() => setShowOnlyOnTap(!showOnlyOnTap)}
            className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"
          />
          <label htmlFor="on-tap-filter" className="ml-2 block text-sm text-gray-700 dark:text-gray-300">
            Show only beers on tap
          </label>
        </div>
      </div>

      {filteredBeers.length === 0 ? (
        <p className="text-center text-gray-500 dark:text-gray-400 my-8">No beers match your current filters.</p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredBeers.map((beer) => (
            <BeerCard key={beer.id} beer={beer} />
          ))}
        </div>
      )}
    </div>
  );
}; 