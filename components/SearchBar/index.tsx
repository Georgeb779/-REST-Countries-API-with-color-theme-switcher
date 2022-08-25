import React from "react";
import { GetCountries } from "../../services/getCountries";
import styles from "./search-bar.module.scss";

export function SearchBar({
  placeholder,
  icon,
  SetCountries,
  value,
  setLoading,
}: {
  value?: string;
  placeholder?: string;
  icon?: React.ReactNode;
  SetCountries: (countries: any) => void;
  setLoading: (loading: boolean) => void;
}) {
  // const [searchValue, setSearchValue] = React.useState("");

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    let searchValue = event.target.value;
    const country = new GetCountries();

    if (searchValue === "") {
      country.getCountries().then((res) => {
        setTimeout(() => {
          SetCountries(res);
          setLoading(false);
        }, 600);
      });
    } else {
      // wait for the user to stop typing
      setTimeout(() => {
        setLoading(true);
        country.getCountriesByName(searchValue).then((res) => {
          setTimeout(() => {
            SetCountries(res);
            setLoading(false);
          }, 600);
        });
      }, 1000);
    }
  };

  return (
    <div className={styles.container}>
      {icon && <button type="submit">{icon}</button>}
      <input
        type="text"
        placeholder={placeholder}
        name={placeholder}
        onChange={(event) => {
          handleChange(event);
        }}
      />
    </div>
  );
}
