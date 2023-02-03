import React, { useMemo } from "react";
import { useUIStore } from "../../store/uiStore";

export default function FinishResume({ plan }) {
  const { addonsSelected, typePlan } = useUIStore();

  const totalPrice = useMemo(() => {
    if (!plan) return 0;

    const addonsTotalPrice = addonsSelected.reduce((total, addon) => {
      if (typePlan === "monthly") return total + addon.priceMonth;

      return total + addon.priceYear;
    }, 0);

    if (typePlan === "monthly") return addonsTotalPrice + plan?.priceMonth;

    return addonsTotalPrice + plan?.priceYear;
  }, [plan, addonsSelected, typePlan]);

  return (
    <div className="finish-resume">
      <p className="finish-resume-info">Total {typePlan === "monthly" ? "(per month)" : "(per year)"}</p>
      <p className="finish-resume-total">
        {typePlan === "monthly" ? `+$${totalPrice}/mo` : `$${totalPrice}/yr`}
      </p>
    </div>
  );
}
