"use client";

import Image from "next/image";

const logos = [
  "/images/logo-cliente-1.png",
  "/images/logo-cliente-2.png",
  "/images/logo-cliente-3.png",
  "/images/logo-cliente-4.png",
  "/images/logo-cliente-5.png",
  "/images/logo-cliente-6.png",
  "/images/logo-cliente-7.png",
];

export default function PartnersCarousel() {
  const items = [...logos, ...logos];
  return (
    <div className="w-full">
      <div className="mx-auto max-w-7xl px-4 md:px-6">
        <p className="mb-4 text-center text-xs text-[#666666]">
          Parceiros que fazem parte da nossa energia
        </p>
      </div>
      <div className="relative w-full overflow-hidden">
        <div className="flex w-max animate-[scroll_30s_linear_infinite] gap-8 pr-8 max-w-none">
          {items.map((src, i) => (
            <div key={i} className="shrink-0">
              <Image
                src={src}
                alt={`logo-${i}`}
                width={176}
                height={100}
                className="h-full w-[100px] md:w-[176px] object-contain"
              />
            </div>
          ))}
        </div>
        <div className="pointer-events-none absolute inset-y-0 left-0 w-16 bg-gradient-to-r from-white to-transparent" />
        <div className="pointer-events-none absolute inset-y-0 right-0 w-16 bg-gradient-to-l from-white to-transparent" />
      </div>

      <style jsx global>{`
        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
      `}</style>
    </div>
  );
}
