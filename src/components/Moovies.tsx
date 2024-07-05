import { useQuery } from "@tanstack/react-query";
import Moovie from "remote_library/MoovieItem";
import { fetchMoovies } from "../util/http";

export default function Moovies() {
  const { isPending, isError, data, error } = useQuery({
    queryKey: ["moovies"],
    queryFn: fetchMoovies,
  });

  let content;
  if (isPending) {
    content = <p>Loading data ...</p>;
  }

  if (isError) {
    content = <p>{error.message}</p>;
  }
  if (data) {
    content = (
      <div className="mt-16 grid grid-cols-4 gap-2 max-lg:grid-cols-3">
        {data.results.map((moovies) => (
          <Moovie
            key={moovies.id}
            image={moovies.poster_path}
            title={moovies.original_title}
            date={moovies.release_date}
            age={12}
          />
        ))}
      </div>
    );
  }

  return (
    <section className="mx-32 text-white">
      <div className="flex justify-between mt-8">
        <p className="text-3xl font-bold">Currently playing</p>
        <a className="font-thin" href="#">
          See more
        </a>
      </div>
      {content}
    </section>
  );
}
