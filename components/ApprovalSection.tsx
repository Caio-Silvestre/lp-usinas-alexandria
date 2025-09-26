import ApprovalFlowSection from "./ApprovalFlowSection";
import LexEnergyAllianceCardV2Main from "./LexEnergyAllianceCardV2Main";

export default function ApprovalSection() {
  return (
    <section className="w-full">
      <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
        {/* Coluna 1: Fluxo de Aprovação */}
        <div>
          <ApprovalFlowSection />
        </div>

        {/* Coluna 2: Lex Energy Alliance Card */}
        <div>
          <LexEnergyAllianceCardV2Main />
        </div>
      </div>
    </section>
  );
}
