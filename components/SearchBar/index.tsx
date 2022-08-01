import React from "react";
import styles from "./search-bar.module.scss";

export default function SearchBar({
  placeholder,
  icon,
  onChange,
  value,
}: {
  value?: string;
  placeholder?: string;
  icon?: React.ReactNode;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}) {
  console.log(styles);
  return (
    <div className={styles.container}>
      {icon && <button type="submit">{icon}</button>}
      <input type="text" placeholder={placeholder} name={placeholder} />
    </div>
  );
}
