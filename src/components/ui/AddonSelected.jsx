import React from "react";
import { useUIStore } from "../../store/uiStore";

export default function AddonSelected({ addon }) {
  const { typePlan } = useUIStore();

  return (
    <div className="addon-item">
      <p className="addon-title">{addon.title}</p>

      <p className="addon-price">
        {
          typePlan === "monthly"
            ? `+$${addon.priceMonth}/mo`
            : `+$${addon.priceYear}/yr`
        }
      </p>
    </div>
  );
}
