import {
  ChartLineDownIcon,
  HandCoinsIcon,
  UsersIcon,
} from "@phosphor-icons/react/dist/ssr";
import { PartnerFormModal } from "@/components/PartnerFormModal";
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
      <div
        className="relative 
        grid grid-cols-3 gap-x-4
        z-10 mx-auto min-h-[75vh] md:min-h-[88vh] items-center
        px-8 md:px-24 px-8 
        text-left text-white gap-x-4 flex-col md:flex-row"
      >
        <div className="animate-fade-in  w-full max-w-[550px] md:w-100 mt-2 md:mt-12 gap-4 col-span-3 md:col-span-2">
          <h1 className="text-balance text-3xl font-semibold leading-tight md:text-5xl">
            Usinas com mais clientes, menos riscos e com retorno previsível.
          </h1>
          <p className="mt-4  text-pretty text-base text-gray-200 md:text-lg">
            Com a Alexandria e a Lex Energy Alliance, sua operação ganha
            clientes recorrentes, faturamento garantido e segurança operacional.
          </p>
          <div className="mt-8 hidden md:block ">
            <PartnerFormModal />
          </div>
        </div>
        <div
          className="animate-fade-in md:ml-10 mt-2 md:mt-12 w-full gap-4 col-span-3 md:col-span-1 flex md:flex-col justify-between
        p-[24px] gap-[8px]"
        >
          <div className=" text-white bg-transparent flex flex-col items-start justify-start ">
            <div className="rounded-full aspect-square bg-white/10 backdrop-blur p-4">
              <UsersIcon size={32} weight="fill" />
            </div>
            <div className="text-left w-max-content ">
              <p className="text-[20px] pt-[12px] font-semibold">
                65 mil clientes
              </p>
              <p className="text-[16px] pt-[4px] text-gray-200">
                em apenas 8 meses
              </p>
            </div>
          </div>
          <div className=" text-white bg-transparent flex flex-col items-start justify-start">
            <div className="rounded-full aspect-square bg-white/10 backdrop-blur p-4">
              <HandCoinsIcon size={32} weight="fill" />
            </div>
            <div className="text-left w-max-content">
              <p className="text-[20px] pt-[12px] font-semibold">
                R$ 46 milhões
              </p>
              <p className="text-[16px] pt-[4px] text-gray-200">
                faturado por mês
              </p>
            </div>
          </div>
          <div className=" text-white bg-transparent flex flex-col items-start justify-start ">
            <div className="rounded-full aspect-square bg-white/10 backdrop-blur p-4">
              <ChartLineDownIcon size={32} weight="fill" />
            </div>
            <div className="text-left w-max-content">
              <p className="text-[20px] pt-[12px] font-semibold">1.06%</p>
              <p className="text-[16px] pt-[4px] text-gray-200">
                de inadimplência
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
