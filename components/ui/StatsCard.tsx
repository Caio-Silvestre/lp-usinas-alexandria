import { ComponentType } from "react";
import { IconWeight } from "@phosphor-icons/react";

interface StatsCardProps {
  icon: ComponentType<{ size?: number; weight?: IconWeight }>;
  title: string;
  subtitle: string;
  className?: string;
}

export default function StatsCard({
  icon: IconComponent,
  title,
  subtitle,
  className = "",
}: StatsCardProps) {
  return (
    <div
      className={`text-white bg-transparent flex flex-col items-start justify-start ${className}`}
    >
      <div className="rounded-full aspect-square bg-white/10 backdrop-blur p-4">
        <IconComponent size={32} weight="fill" />
      </div>
      <div className="text-left w-max-content">
        <p className="text-[20px] pt-[12px] font-semibold">{title}</p>
        <p className="text-[16px] pt-[4px] text-gray-200">{subtitle}</p>
      </div>
    </div>
  );
}
