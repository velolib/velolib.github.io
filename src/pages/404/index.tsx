export const NotFound = () => {
  const randomDuration = (min: number, max: number) => {
    const minSec = Math.ceil(min);
    const maxSec = Math.floor(max);
    const duration = Math.floor(Math.random() * (maxSec - minSec + 1)) + minSec;
    return `${duration}s`;
  };
  return (
    <div className="p-2">
      {Array.from({ length: 100 }).map((_, idx) => (
        <a
          className="font-extrabold mr-4 text-4xl text-zinc-800 select-none break-all animate-pulse"
          style={{ animationDuration: randomDuration(1, 7) }}
          href="/"
          key={idx}
        >
          This isn&apos;t the page you&apos;re looking for.
        </a>
      ))}
    </div>
  );
};
