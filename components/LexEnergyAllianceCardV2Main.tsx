"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/Button";
import Image from "next/image";
import LexEnergyAllianceCardV2 from "./LexEnergyAllianceCardV2";

export default function LexEnergyAllianceCardV2Main() {
  const [isHovered, setIsHovered] = useState(false);
  const [showFlow, setShowFlow] = useState(false);
  const [expanded, setExpanded] = useState(false);

  const handleButtonClick = () => {
    setShowFlow(true);
  };

  useEffect(() => {
    if (showFlow) {
      const id = requestAnimationFrame(() => setExpanded(true));
      return () => cancelAnimationFrame(id);
    } else {
      setExpanded(false);
    }
  }, [showFlow]);

  if (showFlow) {
    return (
      <LexEnergyAllianceCardV2
        showFlow={showFlow}
        expanded={expanded}
        setShowFlow={setShowFlow}
        setIsHovered={setIsHovered}
      />
    );
  }

  return (
    <div
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className={`flex flex-col justify-center items-center p-6 w-full h-full ${
        isHovered || expanded
          ? "bg-[url('/images/full-background.png')] bg-cover bg-center"
          : "bg-[#FAFAFA] text-[#f5f5f5]"
      }`}
    >
      <div className="space-y-6 w-full">
        <div className="text-center">
          <div
            className={`w-12 h-12 mx-auto mb-4 rounded-lg flex items-center justify-center`}
          >
            {isHovered ? (
              <Image
                src="/svgs/lex_energy_alliance_vazada_branca_quadrada.svg"
                alt="Alexandria Energia"
                width={72}
                height={72}
                className="animate-scale-up"
              />
            ) : (
              <Image
                src="/svgs/lex_energy_alliance_azul_quadrada.svg"
                alt="Alexandria Energia"
                width={48}
                height={48}
              />
            )}
          </div>
          <h2
            className={`text-2xl font-normal mb-4 font-normal  ${
              isHovered ? "text-white" : "text-[#1A1A1A]"
            }`}
          >
            Lex Energy
            <br />
            <span className="font-bold" style={{ fontFamily: "Work Sans" }}>
              Alliance
            </span>
          </h2>
        </div>

        <div className="text-center">
          <p
            className={`text-sm mb-2 ${
              isHovered ? "text-white/80" : "text-[#333333]"
            }`}
          >
            Transformamos o mercado de energia com tecnologia inovadora e
            parcerias estratégicas.
          </p>
          <p
            className={`text-sm ${
              isHovered ? "text-white/80" : "text-[#333333]"
            }`}
          >
            Nossa plataforma conecta usinas, clientes e investidores em um
            ecossistema integrado que maximiza a eficiência energética.
          </p>
        </div>

        <div className="flex justify-center items-center">
          <Button
            variant="secondary"
            className={`
                border-1 border-border-alexandria-primary
                bg-alexandria-primary flex w-[320px] rounded-[8px] p-[1.5px] justify-center items-center gap-2
                   
                   `}
            onClick={handleButtonClick}
          >
            <span
              className={`flex justify-center items-center w-full h-[-webkit-fill-available] rounded-[8px]
                ${
                  isHovered
                    ? "bg-[#383838] hover:bg-[#383838]/80 text-white"
                    : "bg-[#fafafa] hover:bg-white/80 text-[#1A1A1A]"
                } `}
            >
              Ver soluções
            </span>
          </Button>
        </div>
      </div>
    </div>
  );
}
