import { atom, useAtom } from "jotai";

const moviesAtom = atom([]);

const useMovies = () => useAtom(moviesAtom);

export default useMovies;
