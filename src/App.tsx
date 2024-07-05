import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import Home from "./components/Home";
import Moovies from "./components/Moovies";

function App() {
  const queryClient = new QueryClient();

  return (
    <QueryClientProvider client={queryClient}>
      <main className="bg-black">
        <Home />
        <Moovies />
      </main>
    </QueryClientProvider>
  );
}

export default App;
