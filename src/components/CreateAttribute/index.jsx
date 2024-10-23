import { Steps } from "antd";
import ConnectDataSource from "./ConnectDataSource";
import SQLFormat from "./SQLFormat";
import styles from "./styles.module.css";
import useAttributeStore from "../../stores/attributeStore";
import useBeforeUnload from "../../utils/useBeforeUnload";

const DESCRIPTIONS = [
  "Connect to a datasource",
  "Write SQL query",
  "Define Attribute",
  "Select Schedule Frequency",
  "Alerts",
];

function CreateAttribute() {
  useBeforeUnload(); //* gives a propmt on reload

  const { currentStep, setCurrentStep } = useAttributeStore((state) => state);

  const onChangeStep = (value) => {
    setCurrentStep(value);
  };

  const items = [...Array(5).keys()].map((item) => ({
    title: `Step ${item + 1}`,
    description: DESCRIPTIONS[item],
    disabled: currentStep <= item,
  }));

  const ComponentMapping = {
    "Step 1": ConnectDataSource,
    "Step 2": SQLFormat,
    "Step 3": ConnectDataSource,
    "Step 4": ConnectDataSource,
    "Step 5": ConnectDataSource,
  };

  const CurrentElement = ComponentMapping?.[items[currentStep].title];

  return (
    <div>
      <Steps
        current={currentStep}
        onChange={onChangeStep}
        items={items}
        className={`${styles.steps} px-4`}
      />

      {/*//*  Current Element */}
      <div className="mt-6">
        {CurrentElement ? <CurrentElement onChangeStep={onChangeStep} /> : null}
      </div>
    </div>
  );
}

export default CreateAttribute;
