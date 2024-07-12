import React from "react";
import { useEffect } from "react";
import { movieAtom } from "../store/atoms";
import { useAtomValue, useSetAtom } from "jotai/react";

export function useFetch(fetchFn: () => Promise<Moovies>) {
  const [isPending, setIsPending] = React.useState<boolean>(false);
  const [data, setData] = React.useState<Moovies>();
  const [error, setError] = React.useState<Error>();

  useEffect(() => {
    async function fetchData() {
      setIsPending(true);
      try {
        const data: Moovies = await fetchFn();
        setData(data);
        const setMovie = useSetAtom(movieAtom);
        setMovie(data);
      } catch (error: any) {
        setError(error.message || "Failed to fetch data");
      }

      setIsPending(false);
    }
    fetchData();
  }, [fetchFn]);
  return {
    isPending,
    error,
    data,
  };
}
