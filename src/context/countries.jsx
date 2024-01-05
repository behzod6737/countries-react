import React, { createContext, useEffect, useState } from "react";
import { fetchAPI } from "../App";
export const countriesContext = createContext();

export const ContextProvider = ({ children }) => {
  const [search, setSearch] = useState("");

  const [countryData, setData] = useState([]);
  const [isWhite, setWhite] = useState(false);

  const [getLoading, setLoading] = useState(false);
  const [getError, setError] = useState(null);

  const [filter, setFilter] = useState('');
  const [fulldata, setFullData] = useState([]);

  const [regions, setRegions] = useState([]);

  //   fetching cards in main
  useEffect(() => {
    async function getData() {
      setLoading(true);
      const res = await fetchAPI(
        filter ? `region/${filter}` : search ? `name/${search}` : "all"
      );
      if (res.error) {
        setError(res.status);
        setLoading(false);
        setData([]);
        return;
      } else {
        setLoading(false);
        setError(null);
        setData(res.data);
        if (!regions.length) {
            let newArray = [];

            for (const country of res.data) {
              if (!newArray.includes(country.region)) {
                newArray.push(country.region);
              }
            }
            setRegions(newArray);
          }
        }
    }

    getData();
  }, [search, filter]);

  return (
    <countriesContext.Provider
      value={{
        search,
        setSearch,
        countryData,
        setData,
        isWhite,
        setWhite,
        getLoading,
        setLoading,
        getError,
        setError,
        filter,
        setFilter,
        fulldata,
        setFullData,
        regions,
        setRegions,
      }}
    >
      {children}
    </countriesContext.Provider>
  );
};
