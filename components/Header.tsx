import {
  ChartLineDownIcon,
  HandCoinsIcon,
  UsersIcon,
} from "@phosphor-icons/react/dist/ssr";
import { PartnerFormModal } from "@/components/PartnerFormModal";
import StatsCard from "./ui/StatsCard";
import StatsCarousel from "./StatsCarousel";
import Image from "next/image";

export default function Header() {
  return (
    <section className="relative isolate min-h-[100vh] w-full overflow-hidden bg-white">
      <video
        className="absolute inset-0 h-full w-full object-cover rounded-bl-[222px] "
        autoPlay
        loop
        muted
        playsInline
        src="/videos/hero-lp-usinas.mp4"
      />
      <div className="absolute inset-0 bg-black/60 rounded-bl-[222px]" />
      <div className="hidden md:block">
        <Image
          src="/svgs/lex_energy_alliance_vazada_branca_retangular.svg"
          alt="Lex Energy Alliance"
          width={60}
          height={60}
          className="absolute top-0 left-[90%] z-100"
        />
      </div>
      <div className=" md:hidden">
        <Image
          src="/svgs/lex_energy_alliance_vazada_branca_retangular.svg"
          alt="Lex Energy Alliance"
          width={60}
          height={60}
          className="absolute  left-[80%] z-100"
        />
      </div>
      {/* Versão Desktop - Layout em coluna */}
      <div
        className="
        relative 
        grid grid-cols-1 md:grid-cols-3 
        z-10 m-0 md:mx-auto min-h-[75vh] md:min-h-[88vh] md:w-[70%] w-full 
        animate-fade-left 
        px-8 pt-[80px] md:pt-0 md:px-0 md:gap-x-4
        text-left text-white 
        flex-col items-center md:flex-row "
      >
        <div className="animate-fade-in  w-full max-w-[550px] md:w-100 mt-2 md:mt-12 gap-4 col-span-3 md:col-span-2 ">
          <h1
            className="text-balance text-[20px] md:text-3xl font-semibold leading-tight md:text-5xl mb-[12px]"
            style={{ fontFamily: "Work Sans" }}
          >
            Usinas com mais clientes, menos riscos e com retorno previsível.
          </h1>
          <p className="mt-4  text-pretty text-base text-gray-200 md:text-lg">
            Com a Alexandria e a Lex Energy Alliance, sua operação ganha
            clientes recorrentes, faturamento garantido e segurança operacional.
          </p>
          <div className="mt-[32px] hidden md:block ">
            <PartnerFormModal />
          </div>
        </div>
        {/* Versão Desktop - Layout em coluna */}
        <div className="animate-fade-in md:ml-10 mt-50 md:mt-12 w-full gap-4 col-span-3 md:col-span-1 hidden md:flex flex-col justify-between p-[24px] gap-[8px]">
          <StatsCard
            icon={UsersIcon}
            title="65 mil clientes"
            subtitle="em apenas 8 meses"
          />
          <StatsCard
            icon={HandCoinsIcon}
            title="R$ 46 milhões"
            subtitle="faturado por mês"
          />
          <StatsCard
            icon={ChartLineDownIcon}
            title="1.06%"
            subtitle="de inadimplência"
          />
        </div>

        {/* Versão Mobile - Carrossel */}
        <div className="animate-fade-in mt-10 md:mt-12 w-full col-span-3 md:hidden py-[24px] rounded-[8px]">
          <StatsCarousel />
        </div>
      </div>
      {/* Versão Desktop - Layout em coluna */}

      {/* Versão Mobile - Layout em flex coluna */}

      {/* <div
        className="md:hidden relative z-10 animate-fade-left  
          h-[100vh] md:w-[70%] w-[86%] 
          mx-auto px-8 gap-x-4 
          text-left text-white 
          flex flex-col justify-around items-center"
      >
        <div className="animate-fade-in  w-full max-w-[550px] md:w-100 mt-2 md:mt-12 gap-4 col-span-3 md:col-span-2 pt-12">
          <h1 className="text-[32px]  ">
            Usinas com mais clientes, menos riscos e com retorno previsível.
          </h1>
          <p
            className="mt-4 text-pretty text-[20px] text-gray-200 "
            style={{
              fontSize: "20px",
              fontStyle: "normal",
              fontWeight: 400,
              lineHeight: "normal",
              letterSpacing: "0.6px",
            }}
          >
            Com a Alexandria e a Lex Energy Alliance, sua operação ganha
            clientes recorrentes, faturamento garantido e segurança operacional.
          </p>
          <div className="mt-8 hidden md:block ">
            <PartnerFormModal />
          </div>
        </div>
        <div className="animate-fade-in mt-2 md:mt-12 w-full col-span-3 md:hidden py-[24px] px-[10px]">
          <StatsCarousel />
        </div>
      </div> */}
    </section>
  );
}
