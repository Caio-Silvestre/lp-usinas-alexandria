"use client";

import { useState, useEffect } from "react";
import { PartnerFormModal } from "./PartnerFormModal";

export default function MobileFixedCTA() {
  const [isVisible, setIsVisible] = useState(true);

  // useEffect(() => {
  //   const handleScroll = () => {
  //     const scrollTop = window.scrollY;
  //     const windowHeight = window.innerHeight;
  //     const documentHeight = document.documentElement.scrollHeight;

  //     // Mostra o botão quando o usuário rola mais de 100px do topo
  //     // e não está no final da página
  //     const shouldShow =
  //       scrollTop > 100 && scrollTop < documentHeight - windowHeight - 100;
  //     setIsVisible(shouldShow);
  //   };

  //   // Adiciona o listener de scroll
  //   window.addEventListener("scroll", handleScroll);

  //   // Verifica a posição inicial
  //   handleScroll();

  //   // Cleanup
  //   return () => window.removeEventListener("scroll", handleScroll);
  // }, []);

  // if (!isVisible) return null;

  return (
    <div className="md:hidden fixed inset-x-0 bottom-0 z-50  p-3 animate-fade-left">
      <div className="mx-auto max-w-7xl px-4 flex justify-center">
        <PartnerFormModal triggerClassName="w-full" />
      </div>
    </div>
  );
}
