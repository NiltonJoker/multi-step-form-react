import React, { useEffect, useMemo, useState } from "react";
import { useUIStore } from "../../store/uiStore";

export default function AddonCard({ addon }) {
  const [check, setCheck] = useState(false);
  const { typePlan, addonsSelected, setSelectedAddon, removeSelectedAddon } = useUIStore();

  const handleCheckAddon = () => {

    setCheck(!check)
    
    if(check) return removeSelectedAddon(addon)
    setSelectedAddon(addon)

  }

  useEffect(() => {

    const addonSelected = addonsSelected.find(add => add.id === addon.id)

    if(!addonSelected) return;

    setCheck(true)

  }, [])


  return (
    <div
      className={`addon-card ${check ? "active" : ""}`}
      onClick={handleCheckAddon}
    >
      <div className="addon-body">
        <input
          type="checkbox"
          className="addon-check"
          id={addon.id}
          checked={check}
          onChange={handleCheckAddon}
        />

        <div className="addon-details">
          <p className="addon-title">{addon.title}</p>
          <p className="addon-description">{addon.description}</p>
        </div>
      </div>

      <p className="addon-price">
        {typePlan === "monthly"
          ? `+$${addon.priceMonth}/mo`
          : `+$${addon.priceYear}/yr`}
      </p>
    </div>
  );
}
