import { useEffect, useRef } from 'react'

const Dialog = ({ dialogOpen, setDialogOpen, results }) => {

  const dialog = useRef()

  useEffect(() => {
    if (dialogOpen) {
      dialog.current?.showModal()
    } else {
      dialog.current?.close()
    }
  }, [dialogOpen])

  return (
    <dialog className="fixed backdrop:bg-slate-400 backdrop:bg-opacity-75 open:animate-fade-in shadow-xl text-slate-600 shadow-slate-400 bg-slate-50 rounded-md p-4 dark:bg-slate-600 dark:text-slate-100" ref={dialog} onCancel={() => setDialogOpen(false)} onClick={() => setDialogOpen(false)}>
      <h2 className="border-b border-emerald-500 font-semibold text-emerald-700 text-center mb-4 pb-2 dark:text-emerald-200">
        <span className="mr-4">🥓</span> Results <span className="ml-4">🥓</span>
      </h2>
      <div className="mb-4">
        <ul className="text-sm">
          <li className="grid grid-cols-2 gap-4 border-b border-slate-300 py-2">
            <span className="text-right font-medium dark:text-slate-300">Meat weight:</span> <span>{results.meat_weight} <small className="text-slate-500 dark:text-slate-300">grams</small></span>
          </li>
          <li className="grid grid-cols-2 gap-4 border-b border-slate-300 py-2">
            <span className="text-right font-medium dark:text-slate-300">Cure #1 weight:</span> <span>{results.cure} <small className="text-slate-500 dark:text-slate-300">grams</small></span>
          </li>
          <li className="grid grid-cols-2 gap-4 border-b border-slate-300 py-2">
          <span className="text-right font-medium dark:text-slate-300">Salt weight:</span> <span>{results.salt} <small className="text-slate-500 dark:text-slate-300">grams</small></span>
          </li>
          <li className="grid grid-cols-2 gap-4 border-b border-slate-300 py-2">
            <span className="text-right font-medium dark:text-slate-300">Sugar weight:</span> <span>{results.sugar} <small className="text-slate-500 dark:text-slate-300">grams</small></span>
          </li>
          <li className="grid grid-cols-2 gap-4 py-2">
          <span className="text-right font-medium dark:text-slate-300">Total:</span> <span>{results.total} <small className="text-slate-500 dark:text-slate-300">grams</small></span>
          </li>
        </ul>
      </div>
      <button onClick={() => setDialogOpen(false)} className="w-full py-2 px-4 rounded-md bg-emerald-500 text-emerald-50 font-light uppercase tracking-wide hover:bg-emerald-600 transition-colors focus:outline-none focus:bg-emerald-600">
        Done
      </button>
    </dialog>
  )
}

export default Dialog