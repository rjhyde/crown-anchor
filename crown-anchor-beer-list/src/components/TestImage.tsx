"use client";

import Image from 'next/image';

export const TestImage = () => {
  return (
    <div className="w-full h-64 relative">
      <Image 
        src="/images/bar-slide-2_11.jpg"
        alt="Test image"
        width={800}
        height={600}
        unoptimized
        style={{
          objectFit: 'cover',
          width: '100%',
          height: '100%'
        }}
      />
    </div>
  );
};
