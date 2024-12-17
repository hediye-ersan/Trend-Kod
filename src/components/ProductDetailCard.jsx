import React, { useState } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight, Heart, ShoppingCart, Eye } from 'lucide-react';
import { Button } from "@/components/ui/button";
import Image from 'next/image';
import { Card, CardContent } from "@/components/ui/card";
import { useRouter } from 'next/router';

function ProductDetail() {
  const [currentImage, setCurrentImage] = useState(0);
  const router = useRouter();
  
  const images = [
    "/placeholder.svg?height=400&width=600",
    "/placeholder.svg?height=400&width=600",
  ];

  const thumbnails = [
    "/placeholder.svg?height=100&width=100",
    "/placeholder.svg?height=100&width=100",
  ];

  const nextImage = () => {
    setCurrentImage((prev) => (prev + 1) % images.length);
  };

  const previousImage = () => {
    setCurrentImage((prev) => (prev - 1 + images.length) % images.length);
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="grid gap-8 md:grid-cols-2">
        {/* Image Slider */}
        <div className="relative">
          <div className="relative aspect-square overflow-hidden rounded-lg">
            <Image
              src={images[currentImage]}
              alt="Product image"
              layout="fill"
              className="object-cover"
              priority
            />
            <button
              onClick={previousImage}
              className="absolute left-4 top-1/2 -translate-y-1/2 rounded-full bg-white p-2 shadow-lg"
              aria-label="Previous image"
            >
              <ChevronLeft className="h-6 w-6" />
            </button>
            <button
              onClick={nextImage}
              className="absolute right-4 top-1/2 -translate-y-1/2 rounded-full bg-white p-2 shadow-lg"
              aria-label="Next image"
            >
              <ChevronRight className="h-6 w-6" />
            </button>
          </div>
          <div className="mt-4 flex gap-4 overflow-auto">
            {thumbnails.map((thumb, index) => (
              <button
                key={index}
                onClick={() => setCurrentImage(index)}
                className={`relative h-20 w-20 overflow-hidden rounded-lg ${
                  currentImage === index ? "ring-2 ring-primary" : ""
                }`}
              >
                <Image
                  src={thumb}
                  alt={`Product thumbnail ${index + 1}`}
                  layout="fill"
                  className="object-cover"
                />
              </button>
            ))}
          </div>
        </div>

        {/* Product Details */}
        <div className="space-y-6">
          <div>
            <h1 className="text-3xl font-bold">Floating Phone</h1>
            <div className="mt-2 flex items-center gap-2">
              <div className="flex">
                {[...Array(4)].map((_, i) => (
                  <svg
                    key={i}
                    className="h-5 w-5 fill-primary"
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
                <svg className="h-5 w-5 fill-muted stroke-muted-foreground" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              </div>
              <span className="text-sm text-muted-foreground">10 Reviews</span>
            </div>
          </div>

          <div className="space-y-2">
            <p className="text-3xl font-bold">$1,139.33</p>
            <p className="text-sm">
              Availability: <span className="text-primary">In Stock</span>
            </p>
          </div>

          <p className="text-muted-foreground">
            Met minim Mollie non desert Alamo est sit cliquey dolor do met sent. RELIT
            official consequent door ENIM RELIT Mollie. Excitation venial consequent
            sent nostrum met.
          </p>

          <div className="space-y-4">
            <p className="font-medium">Colors</p>
            <div className="flex gap-2">
              {["bg-[#4A90E2]", "bg-[#2ECC71]", "bg-[#E67E22]", "bg-[#2C3E50]"].map(
                (color, index) => (
                  <button
                    key={index}
                    className={`h-8 w-8 rounded-full ${color} ring-2 ring-offset-2 ring-offset-background ${
                      index === 0 ? "ring-primary" : "ring-transparent"
                    }`}
                    aria-label={`Select color ${index + 1}`}
                  />
                )
              )}
            </div>
          </div>

          <div className="flex flex-wrap gap-4">
            <Button size="lg" className="flex-1">
              Select Options
            </Button>
            <Button size="lg" variant="outline">
              <Heart className="h-5 w-5" />
            </Button>
            <Button size="lg" variant="outline">
              <ShoppingCart className="h-5 w-5" />
            </Button>
            <Button size="lg" variant="outline">
              <Eye className="h-5 w-5" />
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
export default ProductDetail;
