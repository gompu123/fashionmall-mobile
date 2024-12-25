import React from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Card, CardContent } from "@/components/ui/card";

interface BannerItem {
  id: number;
  imageUrl: string;
  title: string;
  description: string;
}

interface MainCarouselProps {
  banners?: BannerItem[];
}

const defaultBanners: BannerItem[] = [
  {
    id: 1,
    imageUrl: "https://images.unsplash.com/photo-1445205170230-053b83016050",
    title: "New Collection",
    description: "Discover our latest arrivals",
  },
  {
    id: 2,
    imageUrl: "https://images.unsplash.com/photo-1469334031218-e382a71b716b",
    title: "Summer Sale",
    description: "Up to 50% off on selected items",
  },
  {
    id: 3,
    imageUrl: "https://images.unsplash.com/photo-1441984904996-e0b6ba687e04",
    title: "Exclusive Deals",
    description: "Members only special offers",
  },
];

const MainCarousel = ({ banners = defaultBanners }: MainCarouselProps) => {
  return (
    <div className="w-[390px] h-[200px] bg-white">
      <Carousel className="w-full h-full">
        <CarouselContent>
          {banners.map((banner) => (
            <CarouselItem key={banner.id}>
              <Card className="border-none">
                <CardContent className="relative p-0 h-[200px] aspect-[390/200]">
                  <img
                    src={banner.imageUrl}
                    alt={banner.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/60 to-transparent text-white">
                    <h2 className="text-xl font-bold">{banner.title}</h2>
                    <p className="text-sm">{banner.description}</p>
                  </div>
                </CardContent>
              </Card>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="left-2" />
        <CarouselNext className="right-2" />
      </Carousel>
    </div>
  );
};

export default MainCarousel;
