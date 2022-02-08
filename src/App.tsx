import React, { ChangeEvent, useEffect, useState } from "react";
import "./App.css";
import { Counter } from "./Components/Counter";
import { CounterSettings } from "./Components/CounterSettings";

function App() {
  const [counterValue, setCounterValue] = useState<number>(0);
  const [startValue, setStartValue] = useState<string>("0");
  const [maxValue, setmaxValue] = useState<string>("5");
  const [defaulSettings, setDefaultSettings] = useState<boolean>(true);
  const [showSettings, setShowSettings] = useState<boolean>(false);

  useEffect(() => {
    if (localStorage.getItem("counter")) {
      setCounterValue(Number(localStorage.getItem("counter")));
    }
    if (localStorage.getItem("start")) {
      const start = localStorage.getItem("start");
      if (start) {
        setStartValue(JSON.parse(start));
      }
    }
    if (localStorage.getItem("max")) {
      const max = localStorage.getItem("max");
      if (max) {
        setmaxValue(JSON.parse(max));
      }
    }
    if (localStorage.getItem("settings")) {
      const settings = localStorage.getItem("settings");
      if (settings) {
        setDefaultSettings(JSON.parse(settings));
      }
    }
    const visible = localStorage.getItem("visible");
    if (visible) {
      setShowSettings(JSON.parse(visible));
    }
  });

  const increaseValue = () => {
    setCounterValue((prevState) => {
      localStorage.setItem("counter", JSON.stringify(prevState + 1));
      return prevState + 1;
    });
  };

  const resetCounter = () => {
    setCounterValue(() => Number.parseInt(startValue));
    localStorage.setItem(
      "counter",
      JSON.stringify(Number.parseInt(startValue))
    );
  };

  const changeStart = (e: ChangeEvent<HTMLInputElement>) => {
    setCounterValue(0);
    setDefaultSettings(false);
    setStartValue(e.currentTarget.value);
    localStorage.setItem("start", JSON.stringify(e.currentTarget.value));
    localStorage.setItem("counter", JSON.stringify(0));
    localStorage.setItem("settings", JSON.stringify(false));
  };

  const changeMax = (e: ChangeEvent<HTMLInputElement>) => {
    setCounterValue(0);
    setDefaultSettings(false);
    setmaxValue(e.currentTarget.value);
    localStorage.setItem("max", JSON.stringify(e.currentTarget.value));
    localStorage.setItem("counter", JSON.stringify(0));
    localStorage.setItem("settings", JSON.stringify(false));
  };

  const setSettings = () => {
    setDefaultSettings(true);
    setCounterValue(Number.parseInt(startValue));
    localStorage.setItem(
      "counter",
      JSON.stringify(Number.parseInt(startValue))
    );
    localStorage.setItem("settings", JSON.stringify(true));
  };

  const incorrectValues =
    Number(maxValue) <= Number(startValue) || Number(startValue) < 0;

  return (
    <div className="App">
      <Counter
        counterValue={counterValue}
        changeCounter={increaseValue}
        resetCounter={resetCounter}
        isError={Number(maxValue) === counterValue}
        incorrectValues={incorrectValues}
        defaultSettings={defaulSettings}
        showSettingsHandler={setShowSettings}
        showSettings={showSettings}
      />
      <CounterSettings
        startValue={startValue}
        maxValue={maxValue}
        changeStartValue={changeStart}
        changeMaxValue={changeMax}
        setSettings={setSettings}
        disabled={defaulSettings}
        incorrectValues={incorrectValues}
        showSettings={showSettings}
      />
    </div>
  );
}

export default App;
