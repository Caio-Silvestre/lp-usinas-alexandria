import { Card, CardContent } from "@/components/ui/Card";
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
          ? "md:h-[53vh] bg-[#1A1A1A]/90 text-white bg-[url('/images/dark-background.png')] bg-cover bg-center rounded-[8px]"
          : "md:h-[53vh] bg-white/80 text-[#1A1A1A] bg-[url('/images/ligth-background.png')] bg-cover bg-center rounded-[8px]"
      }
    >
      <CardContent className="flex flex-col justify-between space-y-[8px] p-6 h-full">
        <h3
          className="text-base font-semibold"
          style={{ fontFamily: "Work Sans" }}
        >
          {title}
        </h3>
        <p
          className={
            isDark
              ? "whitespace-pre-line text-sm leading-relaxed text-white/80 md:text-[13px]  m-0 md:leading-6"
              : "whitespace-pre-line text-sm leading-relaxed text-[#666666] md:text-[13px] m-0  md:leading-6"
          }
        >
          {body}
        </p>
        <div className="w-full flex justify-center items-center">
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
                  ? "bg-[#303030] flex flex-row justify-center items-center w-full h-full rounded-[8px]"
                  : "bg-[#f3f3f3] flex flex-row justify-center items-center w-full h-full rounded-[8px]"
              }
            >
              {cta} <ArrowsClockwiseIcon size={18} className="ml-5" />
            </span>
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}
