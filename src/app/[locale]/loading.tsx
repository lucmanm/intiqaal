export default function Loading() {
  return (
    <main>
       {/* header skeleton */}
       <div className="container p-2 flex justify-between items-center">
        <div className="flex  gap-4 items-center">
          <div className="size-6 md:size-10 animate-pulse bg-slate-400 rounded-sm" />
          <div className=" h-6 w-10 md:w-20 animate-pulse bg-slate-400 rounded-md" />
        </div>
        <div className="md:flex flex-wrap gap-4 items-center hidden">
          {Array.from({ length: 6 }).map((_, idx) => (
            <div
              key={idx}
              className="h-6 w-20 animate-pulse bg-slate-400 rounded-md"
            />
          ))}
        </div>
        <div className="flex gap-x-2">
          <div className="h-6 w-20 animate-pulse bg-slate-400 rounded-md" />
          <div className="size-6 md:hidden animate-pulse bg-slate-400 rounded-md" />
        </div>
      </div>
      {/* Hero Skeleton */}
      <section className="flex flex-col md:grid md:grid-cols-3 p-8 gap-y-4">
        <div className="col-span-2  flex flex-col gap-y-4">
          <div className="col-span-1 h-16 w-10/12 md:w-1/3 animate-pulse bg-slate-400 rounded-md" />
          <div className="col-span-1 h-8 w-9/12 md:w-1/6 animate-pulse bg-slate-400 rounded-md" />
          <div className="flex gap-x-2">
            <div className="col-span-1 h-8 w-8/12 md:w-1/3 animate-pulse bg-slate-400 rounded-md" />
            <div className="col-span-1 h-8 w-3/12 md:w-1/12 animate-pulse bg-slate-400 rounded-md" />
          </div>
          <div className="flex gap-x-2">
            <div className="col-span-1 h-8 w-1/3 md:w-1/6 animate-pulse bg-slate-400 rounded-md" />
            <div className="col-span-1 h-8 w-1/3 md:w-1/6 animate-pulse bg-slate-400 rounded-md" />
          </div>
        </div>
        <div className="col-span-1 h-60 md:h-80 animate-pulse bg-slate-400 rounded-md" />
        <div className="col-span-3 flex gap-4 justify-evenly py-8">
          {Array.from({ length: 7 }).map((_, idx) => (
            <div
              key={idx}
              className="size-12 md:size-20 animate-pulse bg-slate-400 rounded-md"
            />
          ))}
        </div>
      </section>
    </main>
  );
}
