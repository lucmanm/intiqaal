import Header from "../components/header";
import Hero from "../components/hero";

export default function Home() {
  return (
    <main>
      <div className="container p-4">
        <div className="flex flex-wrap gap-4">
          {Array.from({ length: 6 }).map((_, idx) => (
            <div
              key={idx}
              className="h-6 w-20 animate-pulse bg-slate-400 rounded-md"
            />
          ))}
        </div>
      </div>
      {/* <Header />
      <Hero/> */}
    </main>
  );
}
