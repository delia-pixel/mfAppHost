import Header from "remote_library/Header";
import heroImage from "../assets/cover-image.png";

export default function Home() {
  return (
    <section
      className="w-full h-screen"
      style={{
        backgroundImage: `url(${heroImage})`,
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        backgroundSize: "cover",
      }}
    >
      <Header />
      <div className="text-white text-center absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
        <p className="text-4xl my-10">Moovie center</p>
        <button
          type="button"
          className="w-28 h-10 bg-red-600 border-2 border-red-500 rounded-sm text-2xl text-center"
        >
          Explore
        </button>
      </div>
    </section>
  );
}
