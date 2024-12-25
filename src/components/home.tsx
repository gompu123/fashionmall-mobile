import React from "react";
import TopNavigation from "./mobile/TopNavigation";
import MainCarousel from "./mobile/MainCarousel";
import ProductGrid from "./mobile/ProductGrid";
import BottomTabBar from "./mobile/BottomTabBar";

interface HomePageProps {
  onSearch?: (value: string) => void;
  onCartClick?: () => void;
  onTabChange?: (tab: "home" | "category" | "likes" | "mypage") => void;
}

const HomePage = ({
  onSearch = () => {},
  onCartClick = () => {},
  onTabChange = () => {},
}: HomePageProps) => {
  return (
    <div className="w-[390px] h-[844px] bg-white relative overflow-hidden">
      <TopNavigation onSearch={onSearch} onCartClick={onCartClick} />
      <div className="mt-14 mb-14 h-[calc(100%-112px)] overflow-y-auto">
        <MainCarousel />
        <ProductGrid />
      </div>
      <BottomTabBar onTabChange={onTabChange} />
    </div>
  );
};

export default HomePage;
