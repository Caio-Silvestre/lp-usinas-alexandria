"use client";

import { useEffect } from "react";
import { Button } from "@/components/ui/Button";
import Image from "next/image";
import { PartnerFormModal } from "./PartnerFormModal";
import DropDownsLexEnergyAlliance from "./DropDownsLexEnergyAlliance";

interface LexEnergyAllianceCardV2Props {
  showFlow: boolean;
  expanded: boolean;
  setShowFlow: (value: boolean) => void;
  setIsHovered: (value: boolean) => void;
}

export default function LexEnergyAllianceCardV2({
  showFlow,
  expanded,
  setShowFlow,
  setIsHovered,
}: LexEnergyAllianceCardV2Props) {
  // Controlar scroll da página
  useEffect(() => {
    if (showFlow && expanded) {
      // Desativar scroll da página
      document.body.style.overflow = "hidden";
    } else {
      // Reativar scroll da página
      document.body.style.overflow = "unset";
    }

    // Cleanup: sempre reativar scroll quando componente desmontar
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [showFlow, expanded]);

  return (
    <div
      className={`fixed inset-0 z-80 overflow-y-auto transition-all duration-400 ease-out ${
        showFlow && expanded ? "opacity-100" : "opacity-0 pointer-events-none"
      } bg-[url('/images/full-background.png')] bg-cover bg-center`}
    >
      <div className="relative min-h-full w-full px-6 md:px-12 py-8 md:py-12">
        <Image
          src="/svgs/lex_energy_alliance_vazada_branca_retangular.svg"
          alt="Lex Energy Alliance"
          width={60}
          height={60}
          className="hidden md:absolute right-12 top-0"
        />

        <div className="mt-8 grid grid-cols-1 gap-20 md:gap-32 md:mt-12 md:grid-cols-2">
          <div className="order-2 md:order-1 flex flex-col items-center justify-center gap-6 text-white sm:h-[60vh] md:h-[80vh]">
            <div className="w-14 h-14 flex items-center justify-center">
              <Image
                src="/svgs/lex_energy_alliance_vazada_branca_quadrada.svg"
                alt="Lex Energy Alliance"
                width={100}
                height={100}
                className="scale-150"
              />
            </div>
            <div className="flex flex-col justify-center items-center">
              <h1
                className="text-4xl font-normal text-center"
                style={{ fontFamily: "Work Sans" }}
              >
                Lex Energy
              </h1>
              <h2
                className="text-4xl font-bold tracking-wide text-center"
                style={{ fontFamily: "Work Sans" }}
              >
                Alliance
              </h2>
            </div>
            <p className="max-w-xl text-sm text-white/80 text-center">
              Resolvemos o maior desafio da sua usina:{" "}
              <span className="font-semibold text-white">
                manter ela cheia, rentável e segura.
              </span>
              .
            </p>
            <p className="max-w-xl text-sm text-white/80 text-center">
              Enquanto assumimos toda a operação crítica, você participa de uma
              comunidade colaborativa, com informações estratégicas do setor de
              energia e fortalece sua reputação de forma gratuita.
            </p>
            <div className="flex justify-center items-center w-full gap-3">
              <Button
                variant="secondary"
                className={`
              border-1 border-border-alexandria-primary
              bg-alexandria-primary flex w-1/4 rounded-[8px] p-[2px] justify-center items-center gap-2
                 
                 `}
                onClick={() => {
                  setShowFlow(false);
                  setIsHovered(false);
                }}
              >
                <span
                  className={`flex justify-center items-center w-full h-[43px] rounded-[8px] bg-[#383838] hover:bg-[#383838]/80  text-white`}
                >
                  Voltar
                </span>
              </Button>
              <div className="block">
                <PartnerFormModal triggerClassName="w-full" />
              </div>
            </div>
          </div>

          <div className="order-1 md:order-2 flex flex-col gap-6 text-white">
            <div>
              <span className="inline-flex rounded-full border border-white/20 px-3 py-1 text-xs text-white/70">
                Benefícios
              </span>
              <h3 className="mt-4 text-xl font-semibold leading-snug">
                Revolucionamos o setor energético com tecnologia de ponta e
                parcerias estratégicas.
              </h3>
            </div>

            <DropDownsLexEnergyAlliance />
          </div>
        </div>
      </div>
    </div>
  );
}
