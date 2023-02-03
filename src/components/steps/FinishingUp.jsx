import React, { useEffect, useState } from "react";
import { useUIStore } from "../../store/uiStore";
import plans from "../../utils/plans";
import AddonsList from "../ui/AddonsList";
import FinishResume from "../ui/FinishResume";

export default function FinishingUp() {
  const [plan, setPlan] = useState({});

  const { planSelect, typePlan, setStepToChangePlan } = useUIStore();

  useEffect(() => {
    const planInfo = plans.find((p) => p.id === planSelect);

    setPlan(planInfo);
  }, []);

  return (
    <div className="finish-container fade-in">
      <div className="finish-card">
        <div className="finish-card-header">
          <div className="finish-card-details">
            <p className="finish-card-title">
              {plan?.name} {typePlan === "monthly" ? "(Monthly)" : "(Yearly)"}
            </p>
            <button
              className="finish-card-btn-change"
              onClick={setStepToChangePlan}
            >
              Change
            </button>
          </div>
          <p className="finish-card-price">
            {typePlan === "monthly"
              ? `$${plan?.priceMonth ?? 0}/mo`
              : `$${plan?.priceYear ?? 0}/yr`}
          </p>
        </div>

        <AddonsList />
      </div>

      <FinishResume plan={plan} />
    </div>
  );
}
