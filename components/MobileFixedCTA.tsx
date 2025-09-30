"use client";

import { PartnerFormModal } from "./PartnerFormModal";

export default function MobileFixedCTA() {
  return (
    <div className="md:hidden fixed inset-x-0 bottom-0 z-50  p-3 animate-fade-left">
      <div className="mx-auto max-w-7xl px-4 flex justify-center">
        <PartnerFormModal triggerClassName="w-full" />
      </div>
    </div>
  );
}
