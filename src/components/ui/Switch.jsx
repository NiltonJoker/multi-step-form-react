import React, { useState } from "react";
import { useUIStore } from "../../store/uiStore";

export default function Switch() {
  const { typePlan, setTypePlan } = useUIStore();

  const handleChange = () => {
    if (typePlan === "monthly") return setTypePlan("yearly");

    setTypePlan("monthly");
  };

  const setMonthly = () => {
    setTypePlan("monthly");
  };

  const setYearly = () => {
    setTypePlan("yearly");
  };

  return (
    <div className="switch-container">
      <button
        className={`switch-label ${typePlan !== "yearly" ? "active" : ""}`}
        onClick={setMonthly}
      >
        Monthly
      </button>
      <label htmlFor="switch">
        <div
          className={`switch-item ${
            typePlan === "yearly" ? "switch-active" : ""
          }`}
        >
          <input
            type="checkbox"
            id="switch"
            className="switch-checkbox"
            value={typePlan === "yearly"}
            onChange={handleChange}
          />
        </div>
      </label>
      <button
        className={`switch-label ${typePlan === "yearly" ? "active" : ""}`}
        onClick={setYearly}
      >
        Yearly
      </button>
    </div>
  );
}
