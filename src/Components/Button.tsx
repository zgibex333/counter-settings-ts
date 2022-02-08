import React from "react";

type ButtonPropsType = {
  clickHandler: () => void;
  textValue: string;
  disabled?: boolean;
};

export const Button: React.FC<ButtonPropsType> = ({
  clickHandler,
  textValue,
  disabled,
}) => {
  return (
    <button onClick={clickHandler} disabled={disabled}>
      {textValue}
    </button>
  );
};
