import { Card } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import { ArrowsClockwiseIcon } from "@phosphor-icons/react/dist/ssr";

interface ImpactInfoCardProps {
  variant: "light" | "dark";
  title: string;
  body: string;
  cta: string;
  onToggle?: () => void;
}

export function ImpactInfoCard({
  variant,
  title,
  body,
  cta,
  onToggle,
}: ImpactInfoCardProps) {
  const isDark = variant === "dark";
  return (
    <Card
      className={
        isDark
          ? "min-h-[35dvh] h-auto bg-[#1A1A1A]/90 text-white bg-[url('/images/dark-background.png')] bg-cover bg-center rounded-[8px]"
          : "min-h-[35dvh] h-auto bg-white/80 text-[#1A1A1A] bg-[url('/images/ligth-background.png')] bg-cover bg-center rounded-[8px]"
      }
    >
      <div className="flex flex-col justify-between gap-[8px] p-6 min-h-[35dvh] ">
        <h3
          className="text-base font-semibold"
          style={{ fontFamily: "Work Sans" }}
        >
          {title}
        </h3>
        <p
          className={
            isDark
              ? "whitespace-pre-line text-sm leading-relaxed text-[white/80] md:text-[13px]  m-0 md:leading-6"
              : "whitespace-pre-line text-sm leading-relaxed text-[#333333] md:text-[13px] m-0  md:leading-6"
          }
        >
          {body}
        </p>
        <div className="w-full flex justify-center items-end">
          <Button
            variant="secondary"
            className={
              isDark
                ? "border-1 border-border-alexandria-secondary-gradient bg-white/80 hover:bg-alexandria-secondary-gradient rounded-[8px] p-[1.5px] w-full max-w-[320px] justify-between text-white"
                : "border-1 border-border-alexandria-secondary-gradient bg-[#B3B3B3] hover:bg-alexandria-secondary-gradient rounded-[8px] p-[1.5px] w-full max-w-[320px] justify-between text-[#1A1A1A]"
            }
            onClick={onToggle}
          >
            <span
              className={
                isDark
                  ? "sm:text-[8px] md:text-[14px] h-[-webkit-fill-available] bg-[#303030] flex flex-row justify-center items-center w-full  rounded-[8px]"
                  : "sm:text-[8px] md:text-[14px] h-[-webkit-fill-available] bg-[#f3f3f3] flex flex-row justify-center items-center w-full  rounded-[8px]"
              }
            >
              {cta} <ArrowsClockwiseIcon className="hidden md:block ml-2" />
            </span>
          </Button>
        </div>
      </div>
    </Card>
  );
}
