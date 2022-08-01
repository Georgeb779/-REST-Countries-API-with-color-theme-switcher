import Head from "next/head";

import { useEffect } from "react";

import { switchMode } from "../utils/switchMode";

import SearchIcon from "../assets/search.svg";

import Header from "../components/Header";
import SearchBar from "../components/SearchBar";
import Filter from "../components/Filter";
import stylesFilter from "../styles/filter-section.module.scss";
import stylesCard from "../styles/card-section.module.scss";

export default function Home() {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by Mike van Peeren" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />

      <main>
        <div className={stylesFilter.container}>
          <SearchBar
            placeholder="Search for a country..."
            icon={<SearchIcon />}
          />
          <Filter
            type={"region"}
            value={["Africa", "America", "Asia", "Europe", "Oceania"]}
          />
        </div>
        {/* card container */}
        <div className={stylesCard.container}></div>
      </main>

      <footer>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          className="flex justify-center items-center"
          target="_blank"
          rel="noopener noreferrer"
        >
          Hello footer
        </a>
      </footer>
    </>
  );
}
