import React from "react";
import ProductCard from "./ProductCard";

interface Product {
  id: string;
  imageUrl: string;
  brandName: string;
  productName: string;
  price: number;
  discountRate: number;
}

interface ProductGridProps {
  products?: Product[];
  onLoadMore?: () => void;
}

const ProductGrid = ({
  products = [
    {
      id: "1",
      imageUrl: "https://images.unsplash.com/photo-1523381210434-271e8be1f52b",
      brandName: "Urban Style",
      productName: "Classic White T-Shirt",
      price: 29900,
      discountRate: 20,
    },
    {
      id: "2",
      imageUrl: "https://images.unsplash.com/photo-1551028719-00167b16eac5",
      brandName: "Denim Co",
      productName: "Slim Fit Jeans",
      price: 89000,
      discountRate: 15,
    },
    {
      id: "3",
      imageUrl: "https://images.unsplash.com/photo-1544441893-675973e31985",
      brandName: "Sneaker Hub",
      productName: "Classic Sneakers",
      price: 79000,
      discountRate: 0,
    },
    {
      id: "4",
      imageUrl: "https://images.unsplash.com/photo-1591047139829-d91aecb6caea",
      brandName: "Jacket Master",
      productName: "Leather Jacket",
      price: 199000,
      discountRate: 30,
    },
  ],
  onLoadMore = () => console.log("Load more products"),
}: ProductGridProps) => {
  const handleScroll = (e: React.UIEvent<HTMLDivElement>) => {
    const { scrollTop, clientHeight, scrollHeight } = e.currentTarget;
    if (scrollHeight - scrollTop === clientHeight) {
      onLoadMore();
    }
  };

  return (
    <div
      className="w-full h-[532px] bg-gray-50 overflow-y-auto px-4 py-2"
      onScroll={handleScroll}
    >
      <div className="grid grid-cols-2 gap-4 auto-rows-max">
        {products.map((product) => (
          <div key={product.id} className="flex justify-center">
            <ProductCard
              imageUrl={product.imageUrl}
              brandName={product.brandName}
              productName={product.productName}
              price={product.price}
              discountRate={product.discountRate}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductGrid;
