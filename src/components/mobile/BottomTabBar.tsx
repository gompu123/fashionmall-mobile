import React from "react";
import { Home, Grid, Heart, User } from "lucide-react";
import { cn } from "@/lib/utils";

interface BottomTabBarProps {
  activeTab?: "home" | "category" | "likes" | "mypage";
  onTabChange?: (tab: "home" | "category" | "likes" | "mypage") => void;
}

const BottomTabBar = ({
  activeTab = "home",
  onTabChange = () => {},
}: BottomTabBarProps) => {
  const tabs = [
    { id: "home", icon: Home, label: "홈" },
    { id: "category", icon: Grid, label: "카테고리" },
    { id: "likes", icon: Heart, label: "좋아요" },
    { id: "mypage", icon: User, label: "마이페이지" },
  ] as const;

  return (
    <div className="fixed bottom-0 left-0 right-0 h-[56px] bg-white border-t border-gray-200 flex items-center justify-around px-2">
      {tabs.map((tab) => {
        const Icon = tab.icon;
        const isActive = activeTab === tab.id;

        return (
          <button
            key={tab.id}
            onClick={() => onTabChange(tab.id)}
            className="flex flex-col items-center justify-center w-[72px] h-full"
          >
            <Icon
              className={cn(
                "w-6 h-6 mb-1",
                isActive ? "text-black" : "text-gray-400",
              )}
            />
            <span
              className={cn(
                "text-xs",
                isActive ? "text-black font-medium" : "text-gray-400",
              )}
            >
              {tab.label}
            </span>
          </button>
        );
      })}
    </div>
  );
};

export default BottomTabBar;
