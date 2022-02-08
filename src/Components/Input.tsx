import React, { ChangeEvent } from "react";

type InputPropsType = {
  label: string;
  value: string;
  onChangeHandler: (e: ChangeEvent<HTMLInputElement>) => void;
  incorrectValues: boolean;
};

export const Input: React.FC<InputPropsType> = ({
  label,
  value,
  onChangeHandler,
  incorrectValues,
}) => {
  return (
    <div className="input-container">
      <label htmlFor="uuid">{label}</label>
      <input
        className={incorrectValues ? "error-input" : ""}
        id="uuid"
        type="number"
        value={value}
        onChange={onChangeHandler}
      />
    </div>
  );
};
