import React from "react";
import addOns from "../../utils/add-ons";
import AddonCard from "../ui/AddonCard";

export default function PickAddons() {
  return (
    <div className="addons-container fade-in">
      {addOns.map((addon) => (
        <AddonCard key={addon.id} addon={addon} />
      ))}
    </div>
  );
}
