import React from "react";

type CounterScreenPropsType = {
  screenContent: number;
  error: boolean;
  defaultSettings: boolean;
  incorrectValues: boolean;
};

export const CounterScreen: React.FC<CounterScreenPropsType> = ({
  screenContent,
  error,
  defaultSettings,
  incorrectValues,
}) => {
  const message = incorrectValues
    ? "Incorrect Value!"
    : "Enter values and press 'set'";
  return (
    <div className="counter-screen counter-value">
      <p
        className={
          error
            ? `${incorrectValues ? "danger-text error" : "error"}`
            : `${incorrectValues ? "danger-text" : ""}`
        }
      >
        {defaultSettings ? screenContent : message}
      </p>
    </div>
  );
};
