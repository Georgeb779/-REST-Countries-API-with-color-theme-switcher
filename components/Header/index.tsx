import styles from "./header.module.scss";
import Moon from "../../assets/moon-icon.svg";
import Sun from "../../assets/sun-icon.svg";

import { Button } from "../Button";
import { useState, useEffect } from "react";
import { switchMode } from "../../utils/switchMode";

export function Header() {
  const [darkMode, setDarkMode] = useState({ value: false, iteration: 0 });

  useEffect(() => {
    switchMode({ darkMode, setDarkMode });
  }, []);

  console.log(darkMode.value);

  return (
    <header className={styles.container}>
      <div className={styles.title__container}>
        <h1>Where in the world?</h1>
      </div>
      <Button
        text="Dark Mode"
        onClick={() => switchMode({ darkMode, setDarkMode })}
        icon={darkMode.value ? <Moon /> : <Sun />}
        type="primary"
      />
    </header>
  );
}
