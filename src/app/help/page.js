import Link from "next/link"

const Help = () => {
  return (
    <main className="flex min-h-screen flex-col text-slate-600 bg-slate-100 dark:text-slate-100 dark:bg-slate-600">
      <header className="flex items-center gap-4 bg-slate-500 text-emerald-200 py-4 px-2">
        <Link href="/" className="flex items-center gap-2">
          <svg className="w-8" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 15"><path d="m15.81 9-2.5-5H14a.5.5 0 0 0 0-1h-.79a6.04 6.04 0 0 0-4.198-1.95L9 1a1 1 0 0 0-2 0v.05a6.168 6.168 0 0 0-4.247 1.947L2 3a.5.5 0 0 0 0 1h.69L.19 9H0c0 1.1 1.34 2 3 2s3-.9 3-2h-.19L3.26 3.91a.525.525 0 0 0 .159-.148A4.842 4.842 0 0 1 6.994 2.06L7 13H6v1H4v1h8v-1h-2v-1H9V2.06a4.71 4.71 0 0 1 3.524 1.693.519.519 0 0 0 .193.186L10.19 9H10c0 1.1 1.34 2 3 2s3-.9 3-2h-.19ZM5 9H1l2-3.94L5 9Zm6 0 2-3.94L15 9h-4Z" fill="currentColor" /></svg>
          <h1 className="text-lg font-medium text-slate-100">Dry cure calculator</h1>
        </Link>
      </header>
      <article className="pt-6 px-3 grow">
        <Link href="/" className="inline-flex items-center gap-2 text-xs text-slate-500 py-2 px-4 rounded-md border border-slate-200 bg-slate-50 hover:text-slate-600 hover:border-slate-300 transition-colors focus:outline-none focus:border-slate-600">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-4 h-4">
            <path strokeLinecap="round" strokeLinejoin="round" d="M9 15L3 9m0 0l6-6M3 9h12a6 6 0 010 12h-3" />
          </svg>
          Go Back
        </Link>
        <div className="flex gap-2 items-center bg-amber-100 text-amber-600 text-xs mt-4 py-2 px-2 border border-amber-400 rounded-md mb-8">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8">
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126zM12 15.75h.007v.008H12v-.008z" />
          </svg>
          <p>Curing salt, also known as pink salt or prague powder is toxic in large quantities! Please use with care, and double check your measurements!</p>
        </div>
        <h3 className="text-md text-emerald-700 font-medium border-b border-emerald-300 mb-4">About the calculator</h3>
        <p className="text-sm mb-2 leading-5">This calculator is built to help calculate the amount of curing salt, salt and sugar required to make cured meats, specifically bacon.</p>
        <p className="text-sm mb-8 leading-5">There are many calculators out there, but this one is specifically designed to be simple and to work well on mobile devices.</p>
        <h3 className="text-md text-emerald-700 font-medium border-b border-emerald-300 mb-4">FAQs</h3>
        <p className="text-sm">Coming soon.</p>
      </article>
      <footer className="bg-slate-500 text-slate-100 py-4 px-2">
        <small>Full credit to <a href="http://diggingdogfarm.com/page2.html" target="_blank">Digging Dog Farms</a></small>
      </footer>
    </main>
  )
}

export default Help