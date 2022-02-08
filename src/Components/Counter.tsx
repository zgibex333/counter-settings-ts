import React from "react";
import { Button } from "./Button";
import { CounterScreen } from "./CounterScreen";
import { IoSettingsSharp, IoCloseSharp } from "react-icons/io5";

type CounterPropsType = {
  counterValue: number;
  changeCounter: () => void;
  resetCounter: () => void;
  defaultSettings: boolean;
  isError: boolean;
  incorrectValues: boolean;
  showSettings: boolean;
  showSettingsHandler: (value: boolean) => void;
};

export const Counter: React.FC<CounterPropsType> = ({
  counterValue,
  changeCounter,
  resetCounter,
  isError,
  defaultSettings,
  incorrectValues,
  showSettings,
  showSettingsHandler,
}) => {
  const changeVisibility = () => {
    showSettingsHandler(!showSettings);
    localStorage.setItem("visible", JSON.stringify(!showSettings));
  };
  return (
    <div className="counter" id="counter">
      <button className="settings-btn" onClick={changeVisibility}>
        {!showSettings ? <IoSettingsSharp /> : <IoCloseSharp />}
      </button>
      <CounterScreen
        error={isError && !incorrectValues}
        defaultSettings={defaultSettings}
        screenContent={counterValue}
        incorrectValues={incorrectValues}
      />
      <div className="controls">
        <Button
          clickHandler={changeCounter}
          disabled={isError || incorrectValues || !defaultSettings}
          textValue={"inc"}
        />
        <Button
          clickHandler={resetCounter}
          disabled={incorrectValues || !defaultSettings}
          textValue={"reset"}
        />
      </div>
    </div>
  );
};
