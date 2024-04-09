import { useEffect, useState } from "react";

export function useFetch(fetchFn,intialValue) {
    const [isFetching, setIsFetching] = useState();
    const [error, setError] = useState(false)
    const [fetchedData,setFetchedData]=useState(intialValue)
  useEffect(() => {
    async function fetchData() {
      setIsFetching(true);
      try {
        const data = await fetchFn();
        setUserPlaces(data);
      } catch (error) {
        setError({ message: error.message || 'Failed to fetch data.' });
      }

      setIsFetching(false);
    }

    fetchPlaces();
  }, [fetchFn]); 
    return {
        isFetching,
        error,
        fetchedData
    }
}