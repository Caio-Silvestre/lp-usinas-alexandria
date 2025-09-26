interface SectionTitleProps {
  children: React.ReactNode;
  className?: string;
}

export default function SectionTitle({
  children,
  className = "",
}: SectionTitleProps) {
  return (
    <span
      className={`mb-[12px] inline-flex w-max items-center rounded-full border p-[12px] text-xs text-[#333333] border-[#333333] ${className}`}
    >
      {children}
    </span>
  );
}
