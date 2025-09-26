"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/Button";
import Image from "next/image";
import { PartnerFormModal } from "./PartnerFormModal";
import DropDownsLexEnergyAlliance from "./DropDownsLexEnergyAlliance";

export default function LexEnergyAllianceCard() {
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
      <div
        className={`absolute  z-80 overflow-hidden transition-all duration-500 ease-out ${
          expanded ? "left-0 w-screen" : "w-0"
        } bg-[url('/images/full-background.png')] bg-cover bg-center`}
      >
        <div className=" relative h-full w-full px-6 md:px-12 py-8 md:py-12">
          <Image
            src="/svgs/lex_energy_alliance_vazada_branca_retangular.svg"
            alt="Lex Energy Alliance"
            width={60}
            height={60}
            className="hidden md:absolute right-12 top-0"
          />

          <div className="mt-8 grid grid-cols-1 gap-10 md:mt-12 md:grid-cols-2">
            <div className="flex flex-col items-center justify-center gap-6 text-white">
              <div className="w-14 h-14 flex items-center justify-center">
                <Image
                  src="/svgs/lex_energy_alliance_vazada_branca_quadrada.svg"
                  alt="Lex Energy Alliance"
                  width={100}
                  height={100}
                  className="scale-150"
                />
              </div>
              <div>
                <h1
                  className="text-4xl font-normal"
                  style={{ fontFamily: "Work Sans" }}
                >
                  Lex Energy
                </h1>
                <h2
                  className="text-4xl font-bold tracking-wide"
                  style={{ fontFamily: "Work Sans" }}
                >
                  Alliance
                </h2>
              </div>
              <p className="max-w-xl text-sm text-white/80 text-center">
                Resolvemos o maior desafio da sua usina:{" "}
                <span className="font-semibold text-white">
                  manter ela cheia, rentável e segura
                </span>
                .
              </p>
              <p className="max-w-xl text-sm text-white/80 text-center">
                Enquanto assumimos toda a operação crítica, você participa de
                uma comunidade colaborativa, com informações estratégicas do
                setor de energia e fortalece sua reputação de forma gratuita.
              </p>
              <div className="flex justify-center items-center w-full gap-3">
                <Button
                  variant="secondary"
                  className={`
              border-1 border-border-alexandria-primary
              bg-alexandria-primary flex w-1/4 rounded-[8px] p-[2px] justify-center items-center gap-2
                 
                 `}
                  onClick={() => setShowFlow(false)}
                >
                  <span
                    className={`flex justify-center items-center w-full h-full rounded-[8px] bg-[#383838] hover:bg-[#383838]/80  text-white`}
                  >
                    Voltar
                  </span>
                </Button>
                <div className="hidden md:block">
                  <PartnerFormModal triggerClassName="w-full" />
                </div>
              </div>
            </div>

            <div className="flex flex-col gap-6 text-white">
              <div>
                <span className="inline-flex rounded-full border border-white/20 px-3 py-1 text-xs text-white/70">
                  Benefícios
                </span>
                <h3 className="mt-4 text-xl font-semibold leading-snug">
                  Resolvemos o maior desafio da sua usina: manter ela cheia,
                  rentável e segura.
                </h3>
              </div>

              <DropDownsLexEnergyAlliance />
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className={`flex flex-col justify-center items-center p-6  w-full h-full ${
        isHovered || expanded
          ? "bg-[url('/images/full-background.png')] bg-cover bg-center"
          : "bg-[#FAFAFA] text-[#f5f5f5]"
      }`}
    >
      <div className="space-y-6 ">
        <div className="text-center">
          <div
            className={`w-12 h-12 mx-auto mb-4 rounded-lg flex items-center justify-center`}
          >
            {isHovered ? (
              <Image
                src="/svgs/lex_energy_alliance_vazada_branca_quadrada.svg"
                alt="Lex Energy Alliance"
                width={72}
                height={72}
                className="animate-scale-up"
              />
            ) : (
              <Image
                src="/svgs/lex_energy_alliance_azul_quadrada.svg"
                alt="Lex Energy Alliance"
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
              isHovered ? "text-white/80" : "text-[#666666]"
            }`}
          >
            Resolvemos o maior desafio da sua usina: manter ela cheia, rentável
            e segura.
          </p>
          <p
            className={`text-sm ${
              isHovered ? "text-white/80" : "text-[#666666]"
            }`}
          >
            Enquanto assumimos toda a operação crítica, você participa de uma
            comunidade colaborativa, com informações estratégicas do setor de
            energia e fortalece sua reputação de forma gratuita.
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
              className={`flex justify-center items-center w-full h-full rounded-[8px]
              ${
                isHovered
                  ? "bg-[#383838] hover:bg-[#383838]/80 text-white"
                  : "bg-[#fafafa] hover:bg-white/80 text-[#1A1A1A]"
              } `}
            >
              Ver benefícios
            </span>
          </Button>
        </div>
      </div>
    </div>
  );
}
