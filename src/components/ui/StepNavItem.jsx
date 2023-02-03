import React from "react";
import { useUIStore } from "../../store/uiStore";

export default function StepNavItem({ step }) {

  const { activeStep } = useUIStore()

  return (
    <li className="sidebar__nav-item">
      <div className={`nav-item--icon ${step.id === activeStep ? "active" : ""}`}>
        {step.id}
      </div>
      <div className="nav-item--text">
        <span>Step {step.id}</span>
        <p>{step.name}</p>
      </div>
    </li>
  );
}
