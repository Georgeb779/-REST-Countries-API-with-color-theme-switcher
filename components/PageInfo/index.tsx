import Link from "next/link";
import React from "react";
import { numberWithCommas } from "../../utils/numberWithCommas";
import Button from "../Button";
import style from "./page-info.module.scss";

export default function PageInfo({
  name,
  flag,
  nativeLanguage,
  population,
  region,
  capital,
  subRegion,
  topLevelDomain,
  currencies,
  languages,
  borderCountries,
}: {
  name: string;
  flag: string;
  nativeLanguage: string;
  population: number;
  region: string;
  capital: string;
  subRegion: string;
  topLevelDomain: string;
  currencies: { name: string }[];
  languages: string[];
  borderCountries: string[];
}) {
  console.log(languages);

  return (
    <div className={style.container}>
      <Link href="/" passHref>
        <Button
          text={"Back"}
          type={"secondary"}
          onClick={() => {
            console.log("Back");
          }}
        />
      </Link>

      <div className={style.first_block}>
        <div
          style={{ backgroundImage: `url(${flag})` }}
          className={style.flag}
        ></div>

        <h1>{name}</h1>
        <p>
          <span>Native Language: </span>
          {nativeLanguage}
        </p>
        <p>
          <span>Population: </span>
          {numberWithCommas(population)}
        </p>
        <p>
          <span>Region: </span>
          {region}
        </p>
        <p>
          <span>Sub Region: </span>
          {subRegion}
        </p>
        <p>
          <span>Capital: </span>
          {capital}
        </p>
      </div>
      <div className={style.second_block}>
        <p>
          <span>Top Level Domain: </span>
          {topLevelDomain}
        </p>
        <p>
          <span>Currencies: </span>
          <ul>
            {currencies &&
              currencies.map((currency, index) => (
                <>
                  {currencies.length >= 0 && index < currencies.length - 1 ? (
                    <>
                      <li key={Math.floor(Math.random() * 100)}>
                        {currency.name},
                      </li>
                    </>
                  ) : (
                    <li key={Math.floor(Math.random() * 100)}>
                      {currency.name}
                    </li>
                  )}
                </>
              ))}
          </ul>
        </p>
        <ul>
          <span>Languages: </span>
          {languages &&
            languages.map((language, index) => (
              <>
                {languages.length > 0 && index < languages.length - 1 ? (
                  <>
                    <li key={Math.floor(Math.random() * 100)}>{language},</li>
                  </>
                ) : (
                  <li key={Math.floor(Math.random() * 100)}>{language}</li>
                )}
              </>
            ))}
        </ul>
      </div>
      <div className={style.third_block}>
        <span>Border Countries: </span>

        <div className={style.boundary_container}>
          {borderCountries &&
            borderCountries.map((borderCountry) => (
              <Button
                type="secondary"
                text={borderCountry}
                onClick={() => console.log(borderCountry)}
              />
            ))}
        </div>
      </div>
    </div>
  );
}
