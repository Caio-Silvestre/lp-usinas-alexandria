"use client";

import { useRef } from "react";
import {
  ChartLineDownIcon,
  HandCoinsIcon,
  UsersIcon,
} from "@phosphor-icons/react/dist/ssr";
import StatsCard from "./ui/StatsCard";

const baseStatsData = [
  {
    icon: UsersIcon,
    title: "65 mil clientes",
    subtitle: "em apenas 8 meses",
  },
  {
    icon: HandCoinsIcon,
    title: "R$ 46 milhões",
    subtitle: "faturado por mês",
  },
  {
    icon: ChartLineDownIcon,
    title: "1.06%",
    subtitle: "de inadimplência",
  },
];

// const statsData = Array(10)
//   .fill(null)
//   .flatMap(() => baseStatsData);

const statsData = baseStatsData;

export default function StatsCarousel() {
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  // Função para iniciar o auto-scroll
  // const startAutoScroll = () => {
  //   if (timeoutRef.current) {
  //     clearTimeout(timeoutRef.current);
  //   }

  //   timeoutRef.current = setTimeout(() => {
  //     if (scrollContainerRef.current) {
  //       scrollContainerRef.current.style.animation =
  //         "scroll 15s linear infinite";
  //       setIsScrolling(true);
  //     }
  //   }, 500); // 0.5 segundos
  // };

  // Função para parar o auto-scroll
  // const stopAutoScroll = () => {
  //   if (timeoutRef.current) {
  //     clearTimeout(timeoutRef.current);
  //   }
  //   if (scrollContainerRef.current) {
  //     scrollContainerRef.current.style.animation = "none";
  //     setIsScrolling(false);
  //   }
  // };

  // Função para resetar o timer
  // const resetTimer = () => {
  //   stopAutoScroll();
  //   startAutoScroll();
  // };

  // Event listeners para interação
  // useEffect(() => {
  //   const container = scrollContainerRef.current;
  //   if (!container) return;

  //   const handleScroll = () => {
  //     resetTimer();
  //   };

  //   const handleMouseEnter = () => {
  //     stopAutoScroll();
  //   };

  //   const handleMouseLeave = () => {
  //     startAutoScroll();
  //   };

  //   const handleTouchStart = () => {
  //     stopAutoScroll();
  //   };

  //   const handleTouchEnd = () => {
  //     startAutoScroll();
  //   };

  //   container.addEventListener("scroll", handleScroll);
  //   container.addEventListener("mouseenter", handleMouseEnter);
  //   container.addEventListener("mouseleave", handleMouseLeave);
  //   container.addEventListener("touchstart", handleTouchStart);
  //   container.addEventListener("touchend", handleTouchEnd);

  //   // Iniciar auto-scroll após 0.5s
  //   startAutoScroll();

  //   return () => {
  //     container.removeEventListener("scroll", handleScroll);
  //     container.removeEventListener("mouseenter", handleMouseEnter);
  //     container.removeEventListener("mouseleave", handleMouseLeave);
  //     container.removeEventListener("touchstart", handleTouchStart);
  //     container.removeEventListener("touchend", handleTouchEnd);
  //     if (timeoutRef.current) {
  //       clearTimeout(timeoutRef.current);
  //     }
  //   };
  // }, []);

  return (
    <div className="w-full">
      <div className="relative w-full overflow-hidden">
        <div
          ref={scrollContainerRef}
          className="flex gap-4 overflow-x-auto  pb-4"
        >
          {statsData.map((stat, index) => (
            <div key={index} className="flex-shrink-0 w-[50vw] sm:w-fit">
              <StatsCard
                icon={stat.icon}
                title={stat.title}
                subtitle={stat.subtitle}
              />
            </div>
          ))}
        </div>
      </div>

      <style jsx global>{`
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }

        /* @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        } */
      `}</style>
    </div>
  );
}
