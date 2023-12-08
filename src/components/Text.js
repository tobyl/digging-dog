import { useContext, useState } from 'react'
import classNames from 'classnames'
import { FormContext } from '@/utils/context'

const Text = ({ name, label, fullLabel, postfix, disabled = false }) => {

  const [focus, setFocus] = useState(false)

  const { data, errors, warnings, setValue, clearFieldError } = useContext(FormContext)

  const change = e => {
    clearFieldError(name)
    setValue(name, e.target.value)
  }

  const hasError = errors[name]

  const labelCls = classNames('block font-medium mb-2 pb-1', {})

  const inlineLabelCls = classNames('block font-medium py-1 leading-6', {})
  
  const inputCls = classNames('w-16 bg-slate-50 border border-emerald-400 py-1 px-2 rounded-l-md leading-6 focus:outline-none dark:text-slate-100 dark:bg-slate-500 transition-colors', {
    'border-emerald-600': focus,
    'border-red-500': hasError,
  }) 
  
  const postfixCls = classNames('inline-block w-12 bg-emerald-400 text-emerald-50 py-1 px-2 leading-6 border border-emerald-400 rounded-r-md text-left text-xs transition-colors font-medium', {
    'bg-emerald-600 border-emerald-600': focus,
    'bg-red-500 border-red-500': hasError,
  })

  return (
    <div id={`${name}-field`} className="mb-4 border-b border-emerald-200 pb-4">
      {fullLabel && (
        <label htmlFor={name} className={labelCls}>
          {label}
        </label>
      )}
      <div className="flex gap-6 justify-between sm:gap-20">
        {fullLabel ? (
          <div className="text-xs text-slate-500 dark:text-slate-200">
            {fullLabel}
          </div>
        ) : (
          <label htmlFor={name} className={inlineLabelCls}>
            {label}
          </label>
        )}
        <div className="flex justify-end items-center">
          <input
            id={name}
            name={name}
            onChange={change}
            value={data[name] || ''}
            type="text"
            onFocus={() => setFocus(true)}
            onBlur={() => setFocus(false)}
            className={inputCls}
            disabled={disabled}
          />
          {postfix && <span className={postfixCls}>{postfix}</span>}
        </div>
      </div>
      {warnings[name] && (
        <div className="flex gap-2 items-center bg-amber-100 text-amber-600 text-xs mt-4 py-2 px-2 border border-amber-400 rounded-md">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126zM12 15.75h.007v.008H12v-.008z" />
          </svg>
          {warnings[name]}
        </div>
      )}
    </div>
  )
} 

export default Text