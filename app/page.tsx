import Background from "@/components/Background";

export default function Home() {
  return (
    <div className="relative min-h-screen overflow-hidden">
      <Background />
      <div className="relative z-10 grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
        <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
          <h1 className="text-3xl font-bold">sushi unicorn</h1>
        </main>
        <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center">
          <p>footer placeholder</p>
        </footer>
      </div>
    </div>
  );
}
