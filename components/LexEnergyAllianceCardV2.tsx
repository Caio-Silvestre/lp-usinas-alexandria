"use client";

import { Button } from "@/components/ui/Button";
import Image from "next/image";
import { PartnerFormModal } from "./PartnerFormModal";
import DropDownsLexEnergyAlliance from "./DropDownsLexEnergyAlliance";

interface LexEnergyAllianceCardV2Props {
  showFlow: boolean;
  expanded: boolean;
  setShowFlow: (value: boolean) => void;
}

export default function LexEnergyAllianceCardV2({
  showFlow,
  expanded,
  setShowFlow,
}: LexEnergyAllianceCardV2Props) {
  return (
    <div
      className={`fixed inset-0 z-80 overflow-hidden transition-all duration-1000 ease-out ${
        showFlow && expanded ? "opacity-100" : "opacity-0 pointer-events-none"
      } bg-[url('/images/full-background.png')] bg-cover bg-center`}
    >
      <div className="relative h-full w-full px-6 md:px-12 py-8 md:py-12">
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
              <h1 className="text-4xl font-semibold leading-tight">
                Alexandria
              </h1>
              <h2 className="text-4xl font-extrabold tracking-wide">Energia</h2>
            </div>
            <p className="max-w-xl text-sm text-white/80 text-center">
              Transformamos o mercado de energia com{" "}
              <span className="font-semibold text-white">
                tecnologia inovadora e parcerias estratégicas
              </span>
              .
            </p>
            <p className="max-w-xl text-sm text-white/80 text-center">
              Nossa plataforma conecta usinas, clientes e investidores em um
              ecossistema integrado que maximiza a eficiência energética e
              garante retornos sustentáveis para todos os participantes.
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
                Soluções
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
