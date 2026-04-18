import { useState, useEffect, useCallback } from "react";

const useFetch = (url) => {
  // store data from API
  const [data, setData] = useState([]);

  // track loading
  const [loading, setLoading] = useState(false);

  // track error
  const [error, setError] = useState(null);

  // function to fetch data
  const fetchData = useCallback(async () => {
    if (!url) return;

    setLoading(true);
    setError(null);

    try {
      const response = await fetch(url);

      if (!response.ok) {
        throw new Error("Error while fetching data");
      }

      const result = await response.json();
      setData(result);

    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  }, [url]);

  // run when component loads
  useEffect(() => {
    fetchData();
  }, [fetchData]);

  return { data, loading, error };
};

export default useFetch;

