import React from "react";
import arcadeIcon from "../../assets/images/icon-arcade.svg";
import proIcon from "../../assets/images/icon-pro.svg";
import advancedIcon from "../../assets/images/icon-advanced.svg";
import { useUIStore } from "../../store/uiStore";

const images = {
  Pro: proIcon,
  Arcade: arcadeIcon,
  Advanced: advancedIcon,
};

export default function PlanCard({ plan }) {
  const { typePlan, planSelect, setSelectedPlan } = useUIStore();

  const planTypePrice =
    typePlan === "monthly" ? `$${plan.priceMonth}/mo` : `$${plan.priceYear}/yr`;

  const handleClick = () => {
    setSelectedPlan(plan.id);
  };

  return (
    <div
      className={`plan-card ${planSelect === plan.id ? "active" : ""}`}
      onClick={handleClick}
    >
      <div className="card-image">
        <img src={images[plan.name]} alt="Icon-Plan" />
      </div>
      <div className="card-body">
        <div className="card-title">{plan.name}</div>
        <div className="card-price">{planTypePrice}</div>
        {typePlan === "yearly" ? (
          <div className="card-promotion fade-in">{plan.promoText}</div>
        ) : (
          ""
        )}
      </div>
    </div>
  );
}
