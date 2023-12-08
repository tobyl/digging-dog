import { useState } from 'react'
import classNames from 'classnames'

const Select = ({ name, label, onChange }) => {

  const [focus, setFocus] = useState(false)

  const cls = classNames('w-[45%] appearance-none border border-emerald-400 bg-slate-50 rounded-md text-sm leading-6 py-1 px-2 focus:outline-none transition-colors dark:text-slate-100 dark:bg-slate-500', {
    'border-emerald-600': focus,
  })

  const widgetCls = classNames('absolute top-2 right-1 h-5 w-5 text-emerald-400', {
    'text-emerald-700': focus,
  })

  return (
    <div id={`${name}-field`} className="relative mb-4 border-b border-emerald-200 pb-4">
      <div className="flex justify-between items-center gap-2 text-sm">
        <label htmlFor={name} className="w-[9rem] font-medium text-sm">
          {label}
        </label>
        <select onChange={onChange} name={name} className={cls} onFocus={() => setFocus(true)} onBlur={() => setFocus(false)}>
          <option value="metric">Metric (grams)</option>
          <option value="imperial">Imperial (lbs)</option>
        </select>
        <svg className={widgetCls} viewBox="0 0 20 20" fill="currentColor">
          <path fillRule="evenodd" d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z" clipRule="evenodd" />
        </svg>
      </div>
    </div>
  )
}

export default Select