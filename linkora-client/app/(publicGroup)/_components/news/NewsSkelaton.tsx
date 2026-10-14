import React from 'react';

const NewsSkeleton = ({ count = 6 }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 p-4 max-w-7xl mx-auto">
      {Array.from({ length: count }).map((_, index) => (
        <div
          key={index}
          className="border border-gray-200 rounded-xl p-5 shadow-sm bg-white animate-pulse flex flex-col justify-between"
        >
          <div>
            {/* Thumbnail Placeholder */}
            <div className="w-full h-48 bg-gray-200 rounded-lg mb-4"></div>

            {/* Title & Badge Placeholder */}
            <div className="flex items-center justify-between gap-2 mb-3">
              <div className="h-6 bg-gray-200 rounded-md w-3/4"></div>
              <div className="h-5 bg-gray-200 rounded-full w-16"></div>
            </div>

            {/* Content Lines Placeholder */}
            <div className="space-y-2 mb-4">
              <div className="h-4 bg-gray-200 rounded w-full"></div>
              <div className="h-4 bg-gray-200 rounded w-5/6"></div>
            </div>

            {/* Tags Placeholder */}
            <div className="flex flex-wrap gap-2 mb-4">
              <div className="h-6 bg-gray-200 rounded-md w-16"></div>
              <div className="h-6 bg-gray-200 rounded-md w-14"></div>
              <div className="h-6 bg-gray-200 rounded-md w-20"></div>
            </div>
          </div>

          {/* Footer Meta Info Placeholder */}
          <div className="pt-3 border-t border-gray-100 flex items-center justify-between text-xs">
            <div className="h-3 bg-gray-200 rounded w-16"></div>
            <div className="h-3 bg-gray-200 rounded w-12"></div>
            <div className="h-3 bg-gray-200 rounded w-20"></div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default NewsSkeleton;