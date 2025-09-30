import PartnersCarousel from "@/components/PartnersCarousel";
import ImpactCards from "@/components/ImpactCards";
import AllianceSection from "@/components/AllianceSection";
import ApprovalSection from "@/components/ApprovalSection";
import FAQSection from "@/components/FAQSection";
import MobileFixedCTA from "@/components/MobileFixedCTA";
import ClosingSection from "@/components/ClosingSection";
import { PartnerFormModal } from "@/components/PartnerFormModal";

export default function Home() {
  return (
    <div className="flex flex-col items-center">
      <section id="sobre" className="w-full py-4 md:py-10">
        <PartnersCarousel />
      </section>
      <div className="w-full flex-col items-center justify-center py-[51px] bg-[#FAFAFA]">
        <section
          id="impacto"
          className="animate-fade-left  mx-auto md:w-[70%] w-[86%] min-h-[60vh] h-auto h-80dvh-md"
        >
          <ImpactCards />
        </section>
      </div>

      <div className="w-full flex-col items-center justify-center py-[51px] ">
        <section
          id="alliance"
          className="animate-fade-right mx-auto md:w-[70%] w-[86%] min-h-[80vh] "
        >
          <AllianceSection />
        </section>
      </div>
      <div className="w-full flex-col items-center justify-center py-[51px] ">
        <section
          id="beneficios"
          className="flex items-center  mx-auto md:w-[70%] w-[86%] min-h-[90vh]"
        >
          <ApprovalSection />
        </section>
      </div>
      <div className="w-full flex-col items-center justify-center py-[51px] ">
        <section
          id="faq"
          className="animate-fade-right mx-auto md:w-[70%] w-[86%] min-h-[60vh] md:min-h-[80vh]"
        >
          <FAQSection />
        </section>
      </div>
      <div className="w-full py-[51px] flex-col items-center justify-center bg-[#FAFAFA]">
        <section
          id="contato"
          className="animate-fade-left  mx-auto md:w-[70%] w-[86%] min-h-[80vh]"
        >
          <ClosingSection />
        </section>
      </div>

      {/* CTA fixo no mobile */}
      <MobileFixedCTA />
      {/* <div className="md:hidden fixed inset-x-0 bottom-0 z-50  p-3 animate-fade-left">
        <div className="mx-auto max-w-7xl px-4 flex justify-center">
          <PartnerFormModal triggerClassName="w-full" />
        </div>
      </div> */}
    </div>
  );
}
