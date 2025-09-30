import Image from "next/image";
import { PartnerFormModal } from "@/components/PartnerFormModal";
import SectionTitle from "./ui/SectionTitle";

export default function ClosingSection() {
  return (
    <section className="w-full">
      <div className="flex flex-col items-start justify-between w-full ">
        <SectionTitle>Sobre</SectionTitle>

        <div className="mx-auto grid w-full grid-cols-2 gap-8">
          {/* Coluna esquerda - Texto + Imagem maior */}
          <div className="col-span-2 md:col-span-1 flex flex-col gap-4 h-full">
            <h2
              className="text-3xl md:text-4xl font-semibold text-[#1A1A1A]"
              style={{ fontFamily: "Work Sans" }}
            >
              Energia que move confiança
            </h2>
            <p className="text-sm leading-6 text-[#333333] md:text-[14px]">
              A Alexandria nasceu com o propósito de transformar a forma como o
              Brasil consome e compartilha energia. Acreditamos que energia não
              é apenas um recurso, é <strong>movimento</strong>, é{" "}
              <strong>impacto</strong> e é <strong>futuro</strong>.
            </p>
            <p className="text-sm leading-6 text-[#333333] md:text-[14px]">
              Construímos nossa reputação aliando tecnologia, governança e
              sustentabilidade. Criamos soluções que unem previsibilidade
              financeira, segurança regulatória e inovação,{" "}
              <strong>sempre com foco no cliente e no parceiro</strong> que
              confia a operação de sua usina em nossas mãos.
            </p>
            <div className="rounded-tl-[12px] rounded-tr-[32px] rounded-br-[12px] rounded-bl-[32px]">
              <div className="h-[200px]  overflow-hidden rounded-tl-[8px] rounded-tr-[24px] rounded-br-[8px] rounded-bl-[24px]">
                <Image
                  src="/images/escritorio-1.jpg"
                  alt="Ambiente de usina com áreas de convivência"
                  width={800}
                  height={500}
                  className="h-full w-full object-cover"
                />
              </div>
            </div>
          </div>

          {/* Coluna direita - Card com imagem + texto */}
          <div className="col-span-2 md:col-span-1">
            <div
              className="rounded-tl-[12px] rounded-tr-[32px] rounded-br-[12px] rounded-bl-[32px] p-4"
              style={{
                backgroundImage: "url('/images/ligth-background.png')",
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            >
              <div className="h-[180px] md:h-[220px] overflow-hidden rounded-tl-[8px] rounded-tr-[24px] rounded-br-[8px] rounded-bl-[24px]">
                <Image
                  src="/images/escritorio-2.jpeg"
                  alt="Equipe em operação e gestão de energia"
                  width={640}
                  height={360}
                  className="h-full w-full object-cover"
                  priority
                />
              </div>
              <div className="mt-4 space-y-4">
                <p className="text-sm leading-6 text-[#333333] md:text-[13px]">
                  Ao longo da nossa jornada, conquistamos credibilidade não
                  apenas pelos resultados, mas pelo jeito de fazer:
                  transparente, colaborativo e comprometido em reduzir riscos e
                  gerar valor contínuo. Hoje, somos reconhecidos como referência
                  em energia limpa e como um dos protagonistas da nova economia
                  de impacto.
                </p>
                <p className="text-sm leading-6 text-[#333333] md:text-[13px]">
                  Estar com a Alexandria é ter um aliado estratégico. É saber
                  que sua usina não está sozinha, mas conectada a uma rede que
                  garante solidez, reconhecimento e futuro.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
