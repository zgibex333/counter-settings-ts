import { Input } from "./Input";
import { Button } from "./Button";
import React, { ChangeEvent } from "react";
import { motion, AnimatePresence } from "framer-motion";

type CounterSettingsPropsType = {
  startValue: string;
  maxValue: string;
  changeStartValue: (e: ChangeEvent<HTMLInputElement>) => void;
  changeMaxValue: (e: ChangeEvent<HTMLInputElement>) => void;
  setSettings: () => void;
  disabled: boolean;
  incorrectValues: boolean;
  showSettings: boolean;
};

export const CounterSettings: React.FC<CounterSettingsPropsType> = ({
  startValue,
  maxValue,
  changeStartValue,
  changeMaxValue,
  setSettings,
  disabled,
  incorrectValues,
  showSettings,
}) => {
  return (
    <div>
      <AnimatePresence>
        {showSettings && (
          <motion.div
            key="modal"
            initial={{ opacity: 0, y: -100 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -100 }}
            className="counter counter-settings"
          >
            <motion.div
              key="modal"
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="counter-screen counter-settings-container"
            >
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
            </motion.div>
            <div className="controls">
              <Button
                textValue={"set"}
                disabled={disabled || incorrectValues}
                clickHandler={setSettings}
              />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};
