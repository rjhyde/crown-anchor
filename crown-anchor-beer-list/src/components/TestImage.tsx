"use client";

export const TestImage = () => {
  return (
    <div className="w-full h-64 relative bg-gray-200 dark:bg-gray-700 rounded-lg overflow-hidden">
      <img 
        src="/images/bar-slide-2_11.jpg"
        alt="Test image"
        className="w-full h-full object-cover"
      />
      <div className="absolute bottom-0 left-0 bg-black bg-opacity-50 text-white p-2 text-sm">
        Image path: /images/bar-slide-2_11.jpg
      </div>
    </div>
  );
};
