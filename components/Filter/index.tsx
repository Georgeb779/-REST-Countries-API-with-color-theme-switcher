import React from "react";
import styles from "./filter.module.scss";

export default function Filter({
  type,
  value,
}: {
  type: string;
  value: string[];
}) {
  return (
    <>
      <select className={styles.container} name={type} id={type}>
        <option className="first-element" value="">
          Select a {type}
        </option>
        {value.map((item) => (
          <option key={item} value={item}>
            {item}
          </option>
        ))}
      </select>
    </>
  );
}
