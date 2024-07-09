export async function fetchMoovies(): Promise<Moovies> {
  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI5ZmQ5ZmRjNjBlYjQ2ZmUxYjM0NWY5MWQxZDRjMDI5YiIsIm5iZiI6MTcyMDExMDgzNS42NTk5NzQsInN1YiI6IjY2NWYzNTA4YWE5NjlmNzNlYjFjMzU5OCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.e27jeCU2lqg6RheiY6wErOh9gnKVawmmHWKuamk1qkc",
    },
  };

  const response = await fetch(
    "https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc",
    options
  );

  if (!response.ok) {
    const error: Error = new Error(
      "An error occured while fetching moovies ..."
    );
    // error.code = response.status;
    error.message = await response.json();
    throw error;
  } else {
    const data = response.json();
    return data;
  }
}

export async function fetchMoovieDetail(movieId: number): Promise<MovieItem> {
  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI5ZmQ5ZmRjNjBlYjQ2ZmUxYjM0NWY5MWQxZDRjMDI5YiIsIm5iZiI6MTcyMDExMDgzNS42NTk5NzQsInN1YiI6IjY2NWYzNTA4YWE5NjlmNzNlYjFjMzU5OCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.e27jeCU2lqg6RheiY6wErOh9gnKVawmmHWKuamk1qkc",
    },
  };

  const response = await fetch(
    `https://api.themoviedb.org/3/movie/${movieId}`,
    options
  );

  if (!response.ok) {
    const error: Error = new Error(
      `An error occured while fetching the details of the movie with the id:${movieId} `
    );
    error.message = await response.json();
    throw error;
  } else {
    const { data } = await response.json();
    return data;
  }
}
