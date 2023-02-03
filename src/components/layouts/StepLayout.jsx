import React from "react";

import { useUIStore } from "../../store/uiStore";

import StepButtons from "../ui/StepButtons";

export default function StepLayout({ children }) {

  const { stepInfo } = useUIStore()

  return (
    <div className="main__container">
      <div className="main__form">
        <h1 className="main__form-title">{ stepInfo.title }</h1>
        <p className="main__form-subtitle">
          {stepInfo.description}
        </p>
          
        {children}
      </div>
      <StepButtons/>
    </div>
  );
}
