"use client";

import Image from "next/image";
import { useState } from "react";
import {
  UsersThreeIcon,
  ShieldCheckIcon,
  ChartPieIcon,
  MedalIcon,
  type IconProps,
} from "@phosphor-icons/react";

interface DropdownItem {
  title: string;
  icon: React.ComponentType<IconProps>;
  content?: Record<string, string[]>;
}

const dropdownItems: DropdownItem[] = [
  {
    title: "Inteligência e Networking",
    icon: UsersThreeIcon,
    content: {
      "Para usinas da Lex Energy Alliance:": [
        "Relatórios estratégicos e análises exclusivas aplicadas diretamente à sua operação.",
        "Eventos exclusivos, reuniões estratégicas e networking qualificado.",
      ],
      "Para Membros da comunidade": [
        "Boletins, novidades e tendências do setor de energia.",
        "Interação com outras usinas parceiras.",
      ],
    },
  },
  {
    title: "Compliance e Governança Operacional",
    icon: ShieldCheckIcon,
    content: {
      "Para usinas da Lex Energy Alliance:": [
        "Integração regulatória completa, suporte em conformidade com normas da ANEEL/CCEE e governança operacional para reduzir riscos legais.",
        "Acompanhamento constante, relatórios de performance e suporte técnico-financeiro contínuo para garantir eficiência.",
      ],
    },
  },
  {
    title: "Finanças, ocupação e credibilidade",
    icon: ChartPieIcon,
    content: {
      "Para usinas da Lex Energy Alliance:": [
        "Gestão financeira da usina com billing automatizado, split bancário seguro e rateio mensal inteligente, eliminando erros e atrasos.",
        "Acompanhamento ativo de inadimplentes, vacância de cotas e churn, com estratégias de mitigação e recuperação para proteger a receita.",
        "Assumimos toda a parte burocrática e operacional de entrada de clientes: desde a adesão até a cobrança mensal, garantindo previsibilidade.",
        "Direcionamos clientes da sua base para ocupar cotas na usina, garantindo taxa de ocupação alta e estável.",
      ],
    },
  },
  {
    title: "Reconhecimento e Credibilidade",
    icon: MedalIcon,
    content: {
      "Para usinas da Lex Energy Alliance:": [
        "Direito de uso do Selo Lex Energy Alliance, validando a usina como parceira reconhecida nacionalmente.",
      ],
      "Para Membros da comunidade": [
        "Associação simbólica à Lex Energy, com menções em comunicações gerais.",
      ],
    },
  },
];

export default function DropDownsLexEnergyAlliance() {
  const [openDropdown, setOpenDropdown] = useState<number | null>(null);
  const [hoveredDropdown, setHoveredDropdown] = useState<number | null>(null);

  return (
    <div className="space-y-0">
      {dropdownItems.map((item, index) => (
        <div
          key={item.title}
          className="relative"
          onMouseEnter={() => setHoveredDropdown(index)}
          onMouseLeave={() => setHoveredDropdown(null)}
        >
          <button
            onClick={() =>
              setOpenDropdown(openDropdown === index ? null : index)
            }
            className={`w-full flex items-center justify-between py-4 px-0 text-left transition-all duration-200 `}
          >
            <div className="flex items-center gap-3 hover:font-bold">
              <item.icon
                size={20}
                weight={
                  openDropdown === index || hoveredDropdown === index
                    ? "fill"
                    : "regular"
                }
                className="text-white"
              />
              <span className="text-sm text-white/90">{item.title}</span>
            </div>
            <span
              className={`text-white/70 transition-transform duration-200 
                ${hoveredDropdown === index ? "scale-150" : "scale-100"}
                ${openDropdown === index ? "rotate-180" : "rotate-0"}
              `}
            >
              {openDropdown === index || hoveredDropdown === index ? (
                <Image
                  src="/svgs/ArrowDownDegrade.svg"
                  alt="arrow-down"
                  width={16}
                  height={16}
                />
              ) : (
                <Image
                  src="/svgs/ArrowDown.svg"
                  alt="arrow-down"
                  width={16}
                  height={16}
                />
              )}
            </span>
          </button>
          {openDropdown === index && item.content && (
            <div className="px-4 pb-4">
              <div className="space-y-4">
                {Object.entries(item.content).map(([sectionTitle, items]) => (
                  <div key={sectionTitle} className="space-y-2">
                    <h4 className="text-sm font-semibold text-white/90">
                      {sectionTitle}
                    </h4>
                    <ul className="space-y-1 pl-4">
                      {items.map((item, itemIndex) => (
                        <li
                          key={itemIndex}
                          className="text-xs text-white/70 leading-relaxed"
                        >
                          • {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          )}
          {index < dropdownItems.length - 1 && (
            <div className="border-t border-white/30" />
          )}
        </div>
      ))}
    </div>
  );
}
