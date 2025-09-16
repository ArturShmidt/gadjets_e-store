import React, { useCallback, useEffect, useState } from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import { EmblaCarouselType } from 'embla-carousel';
import Image from 'next/image';

interface Prop {
  name: string;
  images: string[];
}

const ProductDetailsHeroSectionSlider: React.FC<Prop> = ({ name, images }) => {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true });
  const [selectedIndex, setSelectedIndex] = useState(0);

  const onThumbClick = useCallback(
    (index: number) => {
      if (!emblaApi) return;
      emblaApi.scrollTo(index);
    },
    [emblaApi],
  );

  const onSelect = useCallback((emblaApi: EmblaCarouselType) => {
    setSelectedIndex(emblaApi.selectedScrollSnap());
  }, []);

  useEffect(() => {
    if (!emblaApi) return;
    onSelect(emblaApi);
    emblaApi.on('select', onSelect);
    emblaApi.on('reInit', onSelect);
  }, [emblaApi, onSelect]);

  return (
    <div className="image-gallery">
      <div
        className="embla overflow-hidden rounded-lg mb-4"
        ref={emblaRef}
      >
        <div className="embla__container flex">
          {images.map((img) => (
            <div
              className="embla__slide flex-[0_0_100%]"
              key={img}
            >
              <Image
                width={400}
                height={400}
                src={`/${img}`}
                alt={name}
                className="w-full h-auto object-cover"
              />
            </div>
          ))}
        </div>
      </div>

      <div className="flex justify-center gap-2">
        {images.map((img, index) => {
          const isSelected = index === selectedIndex;
          return (
            <button
              key={img}
              onClick={() => onThumbClick(index)}
              className={`
                rounded-md overflow-hidden transition-all duration-200
                ${isSelected ? 'border-2 border-white' : 'border-2 border-transparent hover:border-gray-500'}
              `}
            >
              <Image
                width={64}
                height={64}
                src={`/${img}`}
                alt={`${name} thumbnail`}
                className="object-cover"
              />
            </button>
          );
        })}
      </div>
    </div>
  );
};

export default ProductDetailsHeroSectionSlider;
