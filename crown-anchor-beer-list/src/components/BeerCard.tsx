import { Beer } from "@/types/beer";

type BeerCardProps = {
  beer: Beer;
};

export const BeerCard = ({ beer }: BeerCardProps) => {
  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden border border-gray-200 dark:border-gray-700 transition-all hover:shadow-lg">
      <div className="p-5">
        <div className="flex justify-between items-start">
          <h3 className="text-xl font-bold text-gray-900 dark:text-white">{beer.name}</h3>
          <span className={`px-2 py-1 text-xs font-semibold rounded-full ${beer.onTap ? 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200' : 'bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200'}`}>
            {beer.onTap ? 'On Tap' : 'Coming Soon'}
          </span>
        </div>
        
        <div className="mt-2 flex items-center">
          <span className="text-sm font-medium text-indigo-600 dark:text-indigo-400 mr-3">{beer.type}</span>
          <span className="text-sm text-gray-500 dark:text-gray-400">{beer.abv}% ABV</span>
        </div>
        
        <p className="mt-3 text-gray-600 dark:text-gray-300 text-sm">{beer.description}</p>
        
        <div className="mt-4 flex justify-between items-center">
          <span className="text-sm text-gray-500 dark:text-gray-400">Origin: {beer.origin}</span>
          <span className="font-bold text-gray-900 dark:text-white">${beer.price.toFixed(2)}</span>
        </div>
      </div>
    </div>
  );
}; 