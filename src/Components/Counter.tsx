import React from "react";
import { Button } from "./Button";
import { CounterScreen } from "./CounterScreen";

type CounterPropsType = {
  counterValue: number;
  changeCounter: () => void;
  resetCounter: () => void;
  defaultSettings: boolean;
  isError: boolean;
  incorrectValues: boolean;
};

export const Counter: React.FC<CounterPropsType> = ({
  counterValue,
  changeCounter,
  resetCounter,
  isError,
  defaultSettings,
  incorrectValues,
}) => {
  return (
    <div className="counter">
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
