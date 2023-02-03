import React from "react";
import { useUIStore } from "../../store/uiStore";

export default function StepButtons() {
  const { activeStep, goToNextStep, goToBackStep, setFinishForm } = useUIStore();

  return (
    <div className="main__btn">
      <button
        className={`main__btn-continue fade-in ${
          activeStep === 4 ? "btn-hidden" : ""
        } `}
        onClick={goToNextStep}
      >
        Next Step
      </button>
      <button
        className={`main__btn-confirm fade-in ${
          activeStep !== 4 ? "btn-hidden" : ""
        } `}
        onClick={setFinishForm}
      >
        Confirm
      </button>
      <button
        className={`main__btn-back fade-in ${
          activeStep === 1 ? "btn-hidden" : ""
        }`}
        onClick={goToBackStep}
      >
        Go Back
      </button>
    </div>
  );
}
