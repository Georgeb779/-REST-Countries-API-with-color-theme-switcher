import React from "react";
import style from "./footer.module.scss";

export function Footer() {
  return (
    <footer className={style.container}>
      Challenge by
      <a
        target="_blank"
        rel="noopener noreferrer"
        href="https://www.frontendmentor.io/challenges/rest-countries-api-with-color-theme-switcher-5cacc469fec04111f7b848ca"
      >
        Frontend Mentor
      </a>
      Coded by
      <a
        target="_blank"
        rel="noopener noreferrer"
        href="https://github.com/Georgeb779"
      >
        Georgeb779
      </a>
      .
    </footer>
  );
}
