import Calculator from "@/components/Calculator"

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col">
      <header className="bg-slate-500 text-slate-100 py-4 px-2">
        <h1 className="text-lg font-medium">Dry cure calculator</h1>
      </header>
      <article className="flex grow justify-center items-center py-4 px-2 bg-slate-100">
        <div className="max-w-md">
          <Calculator />
        </div>
      </article>
      <footer className="bg-slate-500 text-slate-100 py-4 px-2">
        <small>Full credit to <a href="http://diggingdogfarm.com/page2.html" target="_blank">Digging Dog Farms</a></small>
      </footer>
    </main>
  )
}
