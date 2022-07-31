import styles from "./header.module.scss";
import Moon from "../../assets/moon-icon.svg";
import Button from "../Button";

export default function Header() {
  return (
    <header className={styles.container}>
      <div className={styles.title__container}>
        <h1>Where in the world?</h1>
      </div>
      <Button
        text="Dark Mode"
        onClick={() => console.log("Potasio")}
        icon={<Moon />}
        type="primary"
      />
    </header>
  );
}
