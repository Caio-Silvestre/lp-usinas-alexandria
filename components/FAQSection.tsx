"use client";

import { useState } from "react";
import Image from "next/image";
import SectionTitle from "./ui/SectionTitle";
import {
  GearIcon,
  FoldersIcon,
  ScrollIcon,
  CurrencyCircleDollarIcon,
  type IconProps,
} from "@phosphor-icons/react";
import { PartnerFormModal } from "./PartnerFormModal";

interface FAQItem {
  question: string;
  answer: string;
}

interface FAQTheme {
  id: string;
  title: string;
  icon: React.ComponentType<IconProps>;
  questions: FAQItem[];
}

const faqThemes: FAQTheme[] = [
  // {
  //   id: "geral",
  //   title: "Geral",
  //   icon: FoldersIcon,
  //   questions: [
  //     {
  //       question: "Como funciona a parceria?",
  //       answer:
  //         "Firmamos contratos com clientes e repassamos a receita conforme performance e SLAs.",
  //     },
  //     {
  //       question: "Qual o prazo médio de aprovação?",
  //       answer: "De 7 a 15 dias corridos após o envio da documentação.",
  //     },
  //     {
  //       question: "Existe exclusividade?",
  //       answer:
  //         "Pode haver por região/produto, conforme negociação e capacidade.",
  //     },
  //   ],
  // },
  {
    id: "contrato-titularidade",
    title: "Contrato e Titularidade",
    icon: ScrollIcon,
    questions: [
      {
        question:
          "A parceria impacta na relação do proprietário com a distribuidora?",
        answer:
          "Sim. Durante o contrato, a relação formal com a distribuidora passa a ser da Associação da Alexandria, simplificando o processo para o proprietário, que mantém apenas a responsabilidade pela O&M.",
      },
      {
        question: "O que acontece ao término da parceria?",
        answer:
          "Ao fim do prazo, o dono pode:\n• Renovar a parceria;\n• Retomar a titularidade da usina;\n• Negociar novos termos comerciais.",
      },
      {
        question: "A quem fica vinculada a titularidade da usina?",
        answer:
          "Durante a vigência do contrato, a titularidade é transferida para a Associação da Alexandria, garantindo a gestão centralizada da energia e da relação com a distribuidora.",
      },
      {
        question: "Como funciona a parceria da minha usina?",
        answer:
          "A parceria é um contrato pelo qual você disponibiliza sua usina para a Associação da Alexandria, que assume a titularidade junto à distribuidora e a gestão comercial da energia gerada. Em contrapartida, você recebe uma remuneração mensal variável, proporcional à energia efetivamente gerada pela sua usina.",
      },
      {
        question: "Qual é o prazo mínimo da parceria?",
        answer:
          "O contrato inicial tem duração de 5 anos, sendo possível a rescisão imotivada mediante aviso prévio de 120 dias.",
      },
    ],
  },
  {
    id: "financeiro-beneficios",
    title: "Financeiro e Beneficios",
    icon: CurrencyCircleDollarIcon,
    questions: [
      {
        question: "Quais são as vantagens da parceria para o dono da usina?",
        answer:
          "Renda mensal variável proporcional à geração da usina;\n• Remuneração transparente com base na tarifa compensável, considerando percentual de deságio acordado;\n• Reajuste automático conforme atualização da tarifa da distribuidora;\n• Transferência da titularidade e simplificação da relação com a distribuidora;\n• Segurança contratual e previsibilidade de receita.",
      },
      {
        question: "Como funciona o reajuste da remuneração?",
        answer:
          "O valor pago ao proprietário acompanha o reajuste da tarifa da distribuidora. Sempre que a tarifa de energia for atualizada, o valor base da remuneração também será ajustado automaticamente.",
      },
      {
        question: "Como funciona o pagamento da parceria?",
        answer:
          "O pagamento é variável, calculado de acordo com o montante de energia gerada pela usina no mês. A remuneração considera a tarifa compensável definida pela distribuidora, sobre a qual é aplicado um percentual de deságio previamente acordado em contrato.",
      },
    ],
  },
  {
    id: "operacao-responsabilidade",
    title: "Operação e Responsabilidade",
    icon: GearIcon,
    questions: [
      {
        question: "O dono da usina pode utilizar parte da energia gerada?",
        answer:
          "Não. Toda a energia gerada é destinada integralmente à Associação da Alexandria durante a vigência da parceria.",
      },
      {
        question:
          "Quem é responsável pela operação e manutenção (O&M) da usina?",
        answer:
          "Toda a responsabilidade pela operação e manutenção preventiva e corretiva permanece com o proprietário da usina.",
      },
    ],
  },
];

export default function FAQSection() {
  const [selectedTheme, setSelectedTheme] = useState<string | null>(
    "contrato-titularidade"
  );
  const [hoveredTheme, setHoveredTheme] = useState<string | null>(
    "contrato-titularidade"
  );
  const [openQuestion, setOpenQuestion] = useState<number | null>(null);
  const [hoveredQuestion, setHoveredQuestion] = useState<number | null>(null);

  const currentTheme = faqThemes.find((theme) => theme.id === selectedTheme);

  return (
    <section className="w-full">
      <SectionTitle>F A Q</SectionTitle>

      <div className="grid grid-cols-3 gap-8">
        {/* Coluna Esquerda - Seleção de Temas */}
        <div className="space-y-4 col-span-3 md:col-span-1">
          <div className="h-fit">
            <h2 className="text-3xl font-semibold text-[#1A1A1A]">
              Perguntas frequentes
            </h2>
            <p className="text-[#666666] max-w-2xl">
              Reunimos aqui as principais dúvidas sobre a parceria com a
              Alexandria. Encontre respostas rápidas sobre contrato,
              responsabilidades e benefícios para o dono da usina.
            </p>
          </div>
          {faqThemes.map((theme) => (
            <button
              key={theme.id}
              onClick={() => setSelectedTheme(theme.id)}
              onMouseEnter={() => setHoveredTheme(theme.id)}
              onMouseLeave={() => setHoveredTheme(null)}
              className={`w-full flex items-center gap-3 p-4 rounded-lg text-left transition-all duration-200 ${
                selectedTheme === theme.id || hoveredTheme === theme.id
                  ? "bg-[#FAFAFA] text-[#1A1A1A]"
                  : "hover:bg-[#FAFAFA] text-[#666666]"
              }`}
            >
              <theme.icon
                size={20}
                weight={selectedTheme === theme.id ? "fill" : "regular"}
              />
              <span className="font-medium">{theme.title}</span>
            </button>
          ))}

          <div className="mt-8 hidden md:block">
            <PartnerFormModal />
          </div>
        </div>

        {/* Coluna Direita - Perguntas e Respostas */}
        <div className="space-y-0 w-full col-span-3 md:col-span-2">
          {currentTheme?.questions.map((faq, index) => (
            <div
              key={index}
              className="relative"
              onMouseEnter={() => setHoveredQuestion(index)}
              onMouseLeave={() => setHoveredQuestion(null)}
            >
              <button
                onClick={() =>
                  setOpenQuestion(openQuestion === index ? null : index)
                }
                className="w-full flex items-center justify-between py-4 px-0 text-left transition-all duration-200"
              >
                <div className="flex items-center gap-3 hover:font-bold">
                  <currentTheme.icon
                    size={20}
                    weight={
                      openQuestion === index || hoveredQuestion === index
                        ? "fill"
                        : "regular"
                    }
                    className="text-[#1A1A1A]"
                  />

                  <span className="text-sm text-[#1A1A1A] font-medium">
                    {faq.question}
                  </span>
                </div>
                <span
                  className={`text-[#666666] transition-transform duration-200 
                      ${hoveredQuestion === index ? "scale-150" : "scale-100"}
                      ${openQuestion === index ? "rotate-180" : "rotate-0"}
                    `}
                >
                  {openQuestion === index || hoveredQuestion === index ? (
                    <Image
                      src="/svgs/ArrowDownDegrade.svg"
                      alt="arrow-down"
                      width={16}
                      height={16}
                    />
                  ) : (
                    <Image
                      src="/svgs/ArrowDownDark.svg"
                      alt="arrow-down"
                      width={16}
                      height={16}
                    />
                  )}
                </span>
              </button>

              {openQuestion === index && (
                <div className="px-4 pb-4">
                  <p className="text-sm text-[#666666] leading-relaxed whitespace-pre-line">
                    {faq.answer}
                  </p>
                </div>
              )}
              {index < (currentTheme?.questions.length || 0) - 1 && (
                <div className="border-t border-[#E6E6E6]" />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
