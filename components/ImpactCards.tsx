"use client";

import { ImpactInfoCard } from "@/components/ui/ImpactInfoCard";
import { PartnerFormModal } from "@/components/PartnerFormModal";
import SectionTitle from "@/components/ui/SectionTitle";
import * as React from "react";

type Tab = "reputacional" | "operacional";

const content: Record<Tab, { title: string; body: string; cta: string }> = {
  reputacional: {
    title: "Reputacional",
    body: 'Uma usina pode entregar energia todos os dias, mas, sem confiança do mercado, continua invisível. O Selo Lex Energy Alliance é a marca que muda essa percepção: ele diz que a sua usina faz parte de uma rede nacional reconhecida, confiável e respeitada.\nCom ele, sua usina deixa de ser "apenas mais uma" e passa a ser vista como referência sólida, conectada e protagonista no setor de energia.',
    cta: "Conhecer o impacto operacional ",
  },
  operacional: {
    title: "Operacional",
    body: "Ao operar sozinho, sua usina corre o risco de possuir vagas em aberto, inadimplência crescente e uma equipe sobrecarregada com burocracias que tiram o foco do crescimento. Mas com o selo da Lex Energy Alliance, esse cenário muda. No lugar da incerteza, entra a previsibilidade. No lugar do risco, entra a governança.\nCom a gente, sua usina pode, enfim, gerar energia sem carregar o peso da operação.",
    cta: "Conhecer o impacto reputacional ",
  },
};

export default function ImpactCards() {
  const [active, setActive] = React.useState<Tab>("reputacional");

  return (
    <div
      className="flex flex-col items-start  
      w-full  min-h-[400px]"
    >
      <SectionTitle>Serviços</SectionTitle>
      <div
        className="flex flex-col md:flex-row items-start justify-between 
      w-full gap-5 md:gap-16 "
      >
        <div className="w-full md:w-1/2 mb-5 md:mb-16 md:mb-0">
          <h2
            className="text-3xl font-semibold text-[#1A1A1A] md:text-4xl"
            style={{ fontFamily: "Work Sans" }}
          >
            Sua usina não pode parar na geração. Precisa gerar resultado.
          </h2>
          <p className="mt-4 max-w-md text-sm text-[#333333]">
            Sozinhas, as usinas produzem energia. Mas também enfrentam riscos:
            ausência de clientes, inadimplência, e uma taxa de previsibilidade
            financeira.
          </p>
          <p className="mt-4 max-w-2xl text-sm text-[#333333]">
            Com a nossa gestão completa, sua operação ganha estabilidade e
            escala.
          </p>
          <div className="hidden md:block mt-6 max-w-sm">
            <PartnerFormModal />
          </div>
        </div>
        <div className="animate-fade-right w-full md:w-1/3 ">
          <div className="relative aspect-[4/4] md:aspect-[8/4]">
            <div
              className={`flip-3d absolute inset-0 ${
                active === "operacional" ? "is-flipped" : ""
              }`}
            >
              <div className="flip-3d-inner h-full">
                <div className="flip-3d-front backface-hidden absolute inset-0">
                  <ImpactInfoCard
                    variant="light"
                    title={content.reputacional.title}
                    body={content.reputacional.body}
                    cta={content.reputacional.cta}
                    onToggle={() =>
                      setActive(
                        active === "reputacional"
                          ? "operacional"
                          : "reputacional"
                      )
                    }
                  />
                </div>
                <div className="flip-3d-back backface-hidden absolute inset-0">
                  <ImpactInfoCard
                    variant="dark"
                    title={content.operacional.title}
                    body={content.operacional.body}
                    cta={content.operacional.cta}
                    onToggle={() =>
                      setActive(
                        active === "reputacional"
                          ? "operacional"
                          : "reputacional"
                      )
                    }
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
