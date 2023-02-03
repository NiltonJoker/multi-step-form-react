import StepLayout from "./components/layouts/StepLayout";
import FinishingUp from "./components/steps/FinishingUp";
import PersonalInfo from "./components/steps/PersonalInfo";
import PickAddons from "./components/steps/PickAddons";
import SelectPlan from "./components/steps/SelectPlan";
import ThankView from "./components/steps/ThankView";
import Sidebar from "./components/ui/Sidebar";
import { useUIStore } from "./store/uiStore";

function App() {
  const { activeStep, finishForm } = useUIStore();

  const componentList = [
    <PersonalInfo />,
    <SelectPlan />,
    <PickAddons />,
    <FinishingUp />,
  ];

  return (
    <div className="wrapper">
      <Sidebar />

      <div className="main">
        {finishForm ? (
          <ThankView />
        ) : (
          <StepLayout>{componentList[activeStep - 1]}</StepLayout>
        )}
      </div>
    </div>
  );
}

export default App;
