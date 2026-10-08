"use client";

import { useState } from "react";

type ProductGalleryProps = {
  images: string[];
  name: string;
};

export default function ProductGallery({
  images,
  name,
}: ProductGalleryProps) {
  const [selectedImage, setSelectedImage] = useState(images[0]);

  return (
    <div className="grid gap-4 sm:grid-cols-[80px_1fr]">
      <div className="order-2 flex gap-3 overflow-x-auto sm:order-1 sm:flex-col">
        {images.map((image, index) => (
          <button
            key={`${image}-${index}`}
            type="button"
            onClick={() => setSelectedImage(image)}
            className={`h-20 w-20 shrink-0 overflow-hidden border-2 ${
              selectedImage === image
                ? "border-black"
                : "border-transparent"
            }`}
          >
            <img
              src={image}
              alt={`${name} ${index + 1}`}
              className="h-full w-full object-cover"
            />
          </button>
        ))}
      </div>

      <div className="order-1 aspect-square overflow-hidden bg-gray-100 sm:order-2">
        <img
          src={selectedImage}
          alt={name}
          className="h-full w-full object-cover"
        />
      </div>
    </div>
  );
}