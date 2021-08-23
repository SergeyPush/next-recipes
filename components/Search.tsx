import React, { SetStateAction, useState } from "react";
import styles from "../styles/Search.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { faTimes } from "@fortawesome/free-solid-svg-icons";
import { useRouter } from "next/router";

interface SearchProps {
  setSearchActive: SetStateAction<boolean>;
}

const Search = ({ setSearchActive }) => {
  const [searchTerm, setSearchTerm] = useState("");
  const router = useRouter();

  const handleSearch = (e) => {
    if (e.key === "Enter") {
      router.push(`/search?term=${searchTerm}`);
    }
  };

  return (
    <>
      <div className={styles.container}>
        <FontAwesomeIcon icon={faSearch} className={styles.iconSearch} />
        <input
          type="text"
          className={styles.input}
          value={searchTerm}
          onChange={(e) => {
            setSearchTerm(e.target.value);
          }}
          onKeyDown={handleSearch}
        />
        <FontAwesomeIcon
          icon={faTimes}
          className={styles.iconTimes}
          onClick={() => setSearchActive(false)}
        />
      </div>
    </>
  );
};

export default Search;
