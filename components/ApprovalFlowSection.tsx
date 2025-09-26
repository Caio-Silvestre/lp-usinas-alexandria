import { PartnerFormModal } from "@/components/PartnerFormModal";

const steps = [
  {
    number: 1,
    title: "Cadastro da usina",
    description:
      "Sua solicitação será analisada por nossa equipe para verificar se sua usina está em conformidade com os requisitos da Aliança.",
  },
  {
    number: 2,
    title: "Comunidade Lex Energy",
    description:
      "Após a aprovação, sua usina já faz parte da Comunidade, obtendo visibilidade e conexão com outros ativos.",
  },
  {
    number: 3,
    title: "Membro da Lex Energy Alliance",
    description:
      "Com a aprovação e assinatura do contrato, sua usina recebe o selo e integra oficialmente a Lex Energy Alliance.",
  },
];

export default function ApprovalFlowSection() {
  return (
    <div className="bg-white p-6 rounded-lg">
      <h2 className="text-2xl font-semibold text-[#1A1A1A] mb-6">
        Fluxo de aprovação
      </h2>

      <div className="space-y-6">
        {steps.map((step) => (
          <div key={step.number} className="flex gap-4">
            <div className="flex-shrink-0">
              <div className="w-8 h-8  flex items-center justify-center text-sm font-semibold">
                {step.number}
              </div>
            </div>
            <div className="flex-1">
              <h3 className="text-base font-semibold text-[#1A1A1A] mb-2">
                {step.title}
              </h3>
              <p className="text-sm text-[#666666] leading-6">
                {step.description}
              </p>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-8 hidden md:block">
        <PartnerFormModal />
      </div>
    </div>
  );
}
