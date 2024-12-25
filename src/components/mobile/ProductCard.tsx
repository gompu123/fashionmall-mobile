import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

interface ProductCardProps {
  imageUrl?: string;
  brandName?: string;
  productName?: string;
  price?: number;
  discountRate?: number;
}

const ProductCard = ({
  imageUrl = "https://images.unsplash.com/photo-1523381210434-271e8be1f52b",
  brandName = "Fashion Brand",
  productName = "Classic White T-Shirt",
  price = 29900,
  discountRate = 20,
}: ProductCardProps) => {
  const discountedPrice = price * (1 - discountRate / 100);

  return (
    <Card className="w-[180px] h-[280px] bg-white overflow-hidden">
      <div className="relative h-[180px] overflow-hidden">
        <img
          src={imageUrl}
          alt={productName}
          className="w-full h-full object-cover"
        />
      </div>
      <CardContent className="p-2 space-y-1">
        <h3 className="text-sm font-semibold text-gray-900 truncate">
          {brandName}
        </h3>
        <p className="text-xs text-gray-600 truncate">{productName}</p>
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-1">
            <span className="text-sm font-bold">
              ￦{Math.round(discountedPrice).toLocaleString()}
            </span>
            {discountRate > 0 && (
              <Badge variant="destructive" className="h-5">
                {discountRate}%
              </Badge>
            )}
          </div>
          <span className="text-xs text-gray-400 line-through">
            ￦{price.toLocaleString()}
          </span>
        </div>
      </CardContent>
    </Card>
  );
};

export default ProductCard;
