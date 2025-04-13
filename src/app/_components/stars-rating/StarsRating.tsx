import { Product } from '@/types/product.type.';
import { Star } from 'lucide-react';
import React from 'react'

type PropType = {
    product : Product
}


export default function StarsRating({product} : PropType) {

    const maxStars = 5;
    const fullStars = Math.floor(product.rateAvg); // Whole number of filled stars
    const hasHalfStar = product.rateAvg % 1 >= 0.5; // Show half star if decimal >= 0.5
    const emptyStars = maxStars - fullStars - (hasHalfStar ? 1 : 0); // Remaining empty stars
    return (
        <div className="stars flex gap-1 my-2">
          {/* Full stars */}
          {Array.from({ length: fullStars }, (_, index) => (
            <Star
              key={`full-${index}`}
              className="text-sm text-yellow-400 fill-yellow-400"
            />
          ))}
          {/* Half star (if applicable) */}
          {hasHalfStar && (
            <Star
              key="half"
              className="text-sm text-yellow-400 fill-yellow-400"
            />
          )}
          {/* Empty stars */}
          {Array.from({ length: emptyStars }, (_, index) => (
            <Star
              key={`empty-${index}`}
              className="text-sm text-yellow-400 "
            />
          ))}
          {/* Optional: Display rating count */}
          {product.rateCount > 0 && (
            <span className="text-sm text-gray-500 ml-1">
              ({product.rateCount})
            </span>
          )}
        </div>
      );
}
