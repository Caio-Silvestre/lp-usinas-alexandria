import Image from "next/image";
import { CheckCircleIcon, ClockIcon } from "@phosphor-icons/react";
import { Button } from "./Button";

interface SuccessMessageProps {
  title?: string;
  message?: string;
  userEmail?: string;
  userPhone?: string;
  className?: string;
  onClose?: () => void;
}

export function SuccessMessage({
  title = "Usina cadastrada com sucesso",
  message = "Recebemos suas informações! Você já integra a Comunidade Lex Energy, e nossa equipe segue com a análise para a proposta de parceria.",
  userEmail,
  userPhone,
  className = "",
  onClose,
}: SuccessMessageProps) {
  return (
    <div className={`bg-white rounded-lg p-6 space-y-6 ${className}`}>
      {/* Header com ícone e título */}
      <div className="text-center space-y-4">
        <div className="flex justify-center">
          <Image
            src="/svgs/GradientIconCheck.svg"
            alt="Sucesso"
            width={77}
            height={76}
            className="w-[77px] h-[76px]"
          />
        </div>
        <h2 className="text-2xl font-bold text-[#1A1A1A]">{title}</h2>
        <p className="text-sm text-[#333333] leading-relaxed max-w-md mx-auto">
          {message}
        </p>
      </div>

      {/* Steps */}
      <div className="space-y-4 bg-gray-50 rounded-lg ">
        {/* Step 1: Confirmação de contato */}
        <div className="p-4">
          <div className="flex items-start gap-3">
            <CheckCircleIcon
              size={20}
              className="text-green-500 flex-shrink-0 mt-0.5"
              weight="fill"
            />
            <div className="space-y-1">
              <h3 className="text-sm font-semibold text-[#1A1A1A]">
                Confirmação de contato
              </h3>
              {userEmail && (
                <p className="text-xs text-[#333333]">E-mail: {userEmail}</p>
              )}
              {userPhone && (
                <p className="text-xs text-[#333333]">Telefone: {userPhone}</p>
              )}
            </div>
          </div>
        </div>

        {/* Step 2: Contato WhatsApp */}
        <div className="p-4">
          <div className="flex items-start gap-3">
            <CheckCircleIcon
              size={20}
              className="text-green-500 flex-shrink-0 mt-0.5"
              weight="fill"
            />
            <div className="space-y-1">
              <h3 className="text-sm font-semibold text-[#1A1A1A]">
                Contato via WhatsApp em até 48 horas
              </h3>
              <p className="text-xs text-[#333333] leading-relaxed">
                Nossa equipe entrará em contato em breve por WhatsApp. Caso não
                consigamos contato, verifique sua caixa de e-mail (incluindo a
                pasta de spam).
              </p>
            </div>
          </div>
        </div>

        {/* Step 3: Integração Lex Energy Alliance */}
        <div className="p-4">
          <div className="flex items-start gap-3">
            <ClockIcon
              size={20}
              className="text-[#333333] flex-shrink-0 mt-0.5"
              weight="regular"
            />
            <div className="space-y-1">
              <h3 className="text-sm font-semibold text-[#1A1A1A]">
                Integração na Lex Energy Alliance
              </h3>
              <p className="text-xs text-[#333333] leading-relaxed">
                Se a usina atender aos critérios da Alexandria, nossa equipe
                entrará em contato para iniciar a negociação e integrar
                oficialmente a usina à Lex Energy Alliance.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Button */}
      <div className="pt-2 w-full flex justify-center items-center">
        <Button
          variant="secondary"
          className={`
              border-1 border-border-alexandria-primary bg-alexandria-primary flex w-full max-w-[320px] rounded-[8px] p-[2px] justify-center items-center gap-2`}
          onClick={onClose}
        >
          <span
            className={`hover:bg-white/80 flex justify-center items-center w-full h-[-webkit-fill-available] rounded-[8px] bg-white text-[#383838]
               `}
          >
            Fechar
          </span>
        </Button>
      </div>
    </div>
  );
}
