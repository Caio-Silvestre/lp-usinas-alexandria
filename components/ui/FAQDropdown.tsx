"use client";

import { cn } from "@/lib/utils";
import { ArrowDownIcon } from "@phosphor-icons/react";
import * as React from "react";

interface FAQItem {
  question: string;
  answer: string;
}

interface FAQDropdownProps {
  items: FAQItem[];
  className?: string;
}

export function FAQDropdown({ items, className }: FAQDropdownProps) {
  const [openIndex, setOpenIndex] = React.useState<number | null>(null);
  return (
    <div className={cn("divide-y rounded-lg border", className)}>
      {items.map((item, index) => {
        const isOpen = openIndex === index;
        return (
          <div key={index} className="">
            <button
              className="flex w-full items-center justify-between p-4 text-left hover:bg-muted/50"
              onClick={() => setOpenIndex(isOpen ? null : index)}
            >
              <span className="font-medium">{item.question}</span>
              <ArrowDownIcon weight="bold" />
            </button>
            {isOpen && (
              <div className="px-4 pb-4 text-muted-foreground">
                {item.answer}
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}
