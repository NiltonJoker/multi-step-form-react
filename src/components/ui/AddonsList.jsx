import React from "react";
import { useUIStore } from "../../store/uiStore";
import AddonSelected from "./AddonSelected";

export default function AddonsList() {

  const { addonsSelected } = useUIStore()
  return (
    <div className="finish-card-body">
      {addonsSelected.map((addon) => (
        <AddonSelected key={addon.id} addon={addon} />
      ))}
    </div>
  );
}
