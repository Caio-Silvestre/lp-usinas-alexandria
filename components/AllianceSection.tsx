import Image from "next/image";
import { PartnerFormModal } from "@/components/PartnerFormModal";
import SectionTitle from "./ui/SectionTitle";

export default function AllianceSection() {
  return (
    <section className="w-full">
      <div className="flex flex-col items-start justify-between w-full gap-5 ">
        <SectionTitle>Lex Energy Alliance</SectionTitle>

        <div className="mx-auto grid w-full grid-cols-2 gap-8">
          {/* Coluna esquerda */}
          <div className=" col-span-2 md:col-span-1 flex flex-col gap-4 h-full">
            <h2 className="text-3xl font-semibold text-[#1A1A1A]">
              Previsibilidade para a operação. Reputação para o mercado.
            </h2>

            <div className="bg-[url('/images/ligth-background.png')] bg-cover bg-center rounded-tl-[12px] rounded-tr-[32px] rounded-br-[12px] rounded-bl-[32px] border p-4">
              <div className="h-[258px] overflow-hidden rounded-tl-[8px] rounded-tr-[24px] rounded-br-[8px] rounded-bl-[24px]">
                <video
                  src="/videos/usinas-eolicas.mp4"
                  width={100}
                  height={100}
                  autoPlay
                  loop
                  muted
                  playsInline
                  className="h-full w-full object-cover"
                />
              </div>
              <div className="mt-4">
                <h3 className="text-sm font-semibold text-[#1A1A1A]">
                  O que é Lex Energy Alliance?
                </h3>
                <p className="mt-2 text-sm leading-6 text-[#666666] text-[14px]">
                  Uma comunidade estratégica que conecta usinas em todo o
                  Brasil, oferecendo inteligência de mercado, oportunidades de
                  networking e um selo de reconhecimento que garante
                  credibilidade no setor. Ao fazer parte, sua usina passa a ser
                  reconhecida como protagonista em um ecossistema sólido e
                  colaborativo. Você ganha reputação, acesso a novidades do
                  mercado e a chance de se conectar com players estratégicos.
                </p>
              </div>
            </div>
          </div>

          {/* Coluna direita */}
          <div className="col-span-2 md:col-span-1 flex flex-col items-stretch gap-4">
            <div className="flex flex-col gap-3">
              <h3 className="text-lg font-semibold text-[#1A1A1A] text-[24px]">
                Tenha um diferencial competitivo que garanta que sua usina nunca
                fique no risco da vacância.
              </h3>
              <p className="text-sm leading-6 text-[#666666] text-[14px]">
                Você adquire segurança regulatória com ANEEL/CEEE, automação
                financeira com billing e split bancário, além de ciclos de
                receita que trazem tranquilidade de orçamentação da usina. Não é
                só previsibilidade; isso responsabiliza-se de uma operação à
                testado em escala.
              </p>
              <div className="max-w-sm hidden md:block">
                <PartnerFormModal />
              </div>
            </div>
            <div className="hidden md:block max-h-[300px] h-full overflow-hidden rounded-tl-[12px] rounded-tr-[32px] rounded-br-[12px] rounded-bl-[32px]">
              <Image
                src="/images/img-paineis-solares.jpg"
                alt="Ilustração"
                width={387}
                height={258}
                className="h-full w-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
