import Head from 'next/head'
import Link from 'next/link'
import Calculator from "@/components/Calculator"

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col text-slate-600 bg-slate-100 dark:text-slate-100 dark:bg-slate-600">
      <Head>
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="manifest" href="/site.webmanifest" />
        <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#5bbad5" />
        <meta name="msapplication-TileColor" content="#da532c" />
        <meta name="theme-color" content="#ffffff" />
      </Head>
      <header className="bg-slate-500 text-emerald-200 py-4 px-2">
        <div className="flex justify-center gap-4 mx-auto max-w-lg">
          <Link href="/" className="flex items-center gap-2">
            <svg className="w-8" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 15"><path d="m15.81 9-2.5-5H14a.5.5 0 0 0 0-1h-.79a6.04 6.04 0 0 0-4.198-1.95L9 1a1 1 0 0 0-2 0v.05a6.168 6.168 0 0 0-4.247 1.947L2 3a.5.5 0 0 0 0 1h.69L.19 9H0c0 1.1 1.34 2 3 2s3-.9 3-2h-.19L3.26 3.91a.525.525 0 0 0 .159-.148A4.842 4.842 0 0 1 6.994 2.06L7 13H6v1H4v1h8v-1h-2v-1H9V2.06a4.71 4.71 0 0 1 3.524 1.693.519.519 0 0 0 .193.186L10.19 9H10c0 1.1 1.34 2 3 2s3-.9 3-2h-.19ZM5 9H1l2-3.94L5 9Zm6 0 2-3.94L15 9h-4Z" fill="currentColor" /></svg>
            <h1 className="text-lg font-medium text-slate-100">Dry cure calculator</h1>
          </Link>
          <Link href="/help" className="ml-auto">
            <svg className="h-8 w-8 text-slate-400" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round"><path stroke="none" d="M0 0h24v24H0z"/><circle cx="12" cy="12" r="9" />  <line x1="12" y1="17" x2="12" y2="17.01" />  <path d="M12 13.5a1.5 1.5 0 0 1 1 -1.5a2.6 2.6 0 1 0 -3 -4" /></svg>
          </Link>
        </div>
      </header>
      <article className="pt-6 px-3 grow">
        <Calculator />
      </article>
      <footer className="bg-slate-500 text-slate-100 py-4 px-2">
        <div className="flex justify-center gap-4 mx-auto max-w-lg">
          <small>Full credit to <a href="http://diggingdogfarm.com/page2.html" target="_blank">Digging Dog Farms</a></small>
        </div>
      </footer>
    </main>
  )
}
