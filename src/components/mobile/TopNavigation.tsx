import React from "react";
import { Search, Menu, ShoppingCart } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

interface TopNavigationProps {
  onSearch?: (value: string) => void;
  onCartClick?: () => void;
  cartItemCount?: number;
}

const TopNavigation = ({
  onSearch = () => {},
  onCartClick = () => {},
  cartItemCount = 2,
}: TopNavigationProps) => {
  return (
    <div className="fixed top-0 left-0 right-0 h-14 bg-white border-b border-gray-200 px-4 flex items-center justify-between z-50">
      <Sheet>
        <SheetTrigger asChild>
          <Button variant="ghost" size="icon" className="h-10 w-10">
            <Menu className="h-5 w-5" />
          </Button>
        </SheetTrigger>
        <SheetContent side="left">
          <SheetHeader>
            <SheetTitle>Categories</SheetTitle>
          </SheetHeader>
          <div className="py-4">
            <ul className="space-y-2">
              <li className="px-2 py-1 hover:bg-gray-100 rounded-md cursor-pointer">
                Men
              </li>
              <li className="px-2 py-1 hover:bg-gray-100 rounded-md cursor-pointer">
                Women
              </li>
              <li className="px-2 py-1 hover:bg-gray-100 rounded-md cursor-pointer">
                Accessories
              </li>
              <li className="px-2 py-1 hover:bg-gray-100 rounded-md cursor-pointer">
                Sale
              </li>
            </ul>
          </div>
        </SheetContent>
      </Sheet>

      <div className="flex-1 mx-4">
        <div className="relative">
          <Input
            type="search"
            placeholder="Search products..."
            className="w-full h-10 pl-10"
            onChange={(e) => onSearch(e.target.value)}
          />
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
        </div>
      </div>

      <Button
        variant="ghost"
        size="icon"
        className="h-10 w-10 relative"
        onClick={onCartClick}
      >
        <ShoppingCart className="h-5 w-5" />
        {cartItemCount > 0 && (
          <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
            {cartItemCount}
          </span>
        )}
      </Button>
    </div>
  );
};

export default TopNavigation;
