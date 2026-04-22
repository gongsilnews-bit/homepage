'use client';

import { useState, useMemo } from 'react';
import { usePathname } from 'next/navigation';
import { FiChevronLeft, FiChevronRight, FiHeart } from 'react-icons/fi';
import { FaMapMarkerAlt } from 'react-icons/fa';
import type { Property } from '@/data/sampleData';

interface PropertyCardProps {
  property: Property;
}

export default function PropertyCard02({ property }: PropertyCardProps) {
  const pathname = usePathname();

  const [currentImage, setCurrentImage] = useState(0);
  const [liked, setLiked] = useState(false);

  const nextImage = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setCurrentImage((prev) => (prev + 1) % property.images.length);
  };

  const prevImage = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setCurrentImage((prev) => (prev - 1 + property.images.length) % property.images.length);
  };

  const toggleLike = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setLiked(!liked);
  };

  const showNewBadge = property.badge === 'NEW' || property.badge === 'NEW+추천';
  const showRecommendBadge = property.badge === '추천' || property.badge === 'NEW+추천';

  return (
    <a href={`/theme02/${property.id}`} className="block group">
      {/* Image Slider */}
      <div className="relative aspect-[4/3] rounded-lg overflow-hidden bg-gray-200">
        <img
          src={property.images[currentImage]}
          alt={property.location}
          className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
        />

        {/* Navigation Arrows */}
        {property.images.length > 1 && (
          <>
            <button
              onClick={prevImage}
              className="absolute left-2 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-black/40 hover:bg-black/60 text-white flex items-center justify-center transition-all opacity-0 group-hover:opacity-100"
              aria-label="이전 이미지"
            >
              <FiChevronLeft size={16} />
            </button>
            <button
              onClick={nextImage}
              className="absolute right-2 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-black/40 hover:bg-black/60 text-white flex items-center justify-center transition-all opacity-0 group-hover:opacity-100"
              aria-label="다음 이미지"
            >
              <FiChevronRight size={16} />
            </button>
          </>
        )}

        {/* Badges */}
        <div className="absolute top-3 right-3 flex gap-1.5">
          {showRecommendBadge && (
            <span className="bg-orange text-white text-[11px] font-bold px-2.5 py-1 rounded">
              추천
            </span>
          )}
          {showNewBadge && (
            <span className="bg-teal text-white text-[11px] font-bold px-2.5 py-1 rounded">
              NEW
            </span>
          )}
        </div>

        {/* Like Button */}
        <button
          onClick={toggleLike}
          className="absolute bottom-3 right-3 text-white hover:text-teal transition-colors"
          aria-label="찜하기"
        >
          <FiHeart
            size={22}
            className={liked ? 'fill-teal text-teal' : ''}
          />
        </button>

        {/* Image dots */}
        {property.images.length > 1 && (
          <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-1">
            {property.images.map((_, idx) => (
              <div
                key={idx}
                className={`w-1.5 h-1.5 rounded-full transition-all ${
                  idx === currentImage ? 'bg-teal w-3' : 'bg-white/60'
                }`}
              />
            ))}
          </div>
        )}
      </div>

      {/* Property Info */}
      <div className="mt-3 px-0.5">
        <div className="flex items-start gap-2 mb-1">
          <span className="text-[12px] text-gray-medium font-medium shrink-0 mt-0.5 bg-gray-100 px-1.5 py-0.5 rounded">
            {property.number}
          </span>
          <div className="flex items-center gap-1">
            <FaMapMarkerAlt className="text-teal shrink-0" size={12} />
            <h3 className="text-[15px] font-bold text-dark">{property.location}</h3>
          </div>
        </div>

        <p className="text-[13px] text-gray-medium leading-relaxed mb-3 line-clamp-1">
          {property.description}
        </p>

        {property.themes && property.themes.length > 0 && (
          <div className="flex flex-wrap gap-1 mb-3">
            {property.themes.map((theme, idx) => (
              <span key={idx} className="text-[11px] text-gray-500 bg-gray-50 border border-gray-200 px-2 py-0.5 rounded">
                #{theme}
              </span>
            ))}
          </div>
        )}

        <div className="grid grid-cols-2 gap-x-4 gap-y-1 text-[13px]">
          <div className="flex justify-between">
            <span className="text-gray-medium">전용면적</span>
            <span className="font-semibold text-dark">{property.area}<span className="text-[11px] text-gray-medium">({property.areaPyeong})</span></span>
          </div>
          <div>
            <span className="text-[12px] text-gray-medium">주변정보</span>
          </div>
          <div className="flex justify-between">
            <span className="text-gray-medium">보증금</span>
            <span className="font-semibold text-dark">{property.deposit}</span>
          </div>
          <p className="text-[11px] text-gray-medium leading-relaxed line-clamp-2 row-span-2">
            {property.nearbyInfo}
          </p>
          <div className="flex justify-between">
            <span className="text-gray-medium">월임대료</span>
            <span className="font-bold text-dark">{property.monthlyRent}</span>
          </div>
        </div>
      </div>
    </a>
  );
}
