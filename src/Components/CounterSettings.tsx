import { Input } from "./Input";
import { Button } from "./Button";
import React, { ChangeEvent } from "react";

type CounterSettingsPropsType = {
  startValue: string;
  maxValue: string;
  changeStartValue: (e: ChangeEvent<HTMLInputElement>) => void;
  changeMaxValue: (e: ChangeEvent<HTMLInputElement>) => void;
  setSettings: () => void;
  disabled: boolean;
  incorrectValues: boolean;
};

export const CounterSettings: React.FC<CounterSettingsPropsType> = ({
  startValue,
  maxValue,
  changeStartValue,
  changeMaxValue,
  setSettings,
  disabled,
  incorrectValues,
}) => {
  return (
    <div className="counter counter-settings">
      <div className="counter-screen counter-settings-container">
        <Input
          label={"max value:"}
          value={maxValue}
          onChangeHandler={changeMaxValue}
          incorrectValues={incorrectValues}
        />
        <Input
          label={"start value:"}
          value={startValue}
          onChangeHandler={changeStartValue}
          incorrectValues={incorrectValues}
        />
      </div>
      <div className="controls">
        <Button
          textValue={"set"}
          disabled={disabled || incorrectValues}
          clickHandler={setSettings}
        />
      </div>
    </div>
  );
};
