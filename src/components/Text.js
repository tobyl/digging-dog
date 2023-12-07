import { useContext, useState } from 'react'
import classNames from 'classnames'
import { FormContext } from '@/utils/context'

const Text = ({ name, label, defaultValue, postfix }) => {

  const [focus, setFocus] = useState(false)

  const { data, errors, setValue, clearFieldError } = useContext(FormContext)

  const change = e => {
    clearFieldError(name)
    setValue(name, e.target.value)
  }

  const labelCls = classNames('w-[60%] font-medium text-sm py-1 px-2 transition-colors', {
    'text-red-500': errors[name],
  }) 
  
  const inputCls = classNames('w-[5rem] leading-6 border rounded-0 rounded-l-md py-1 px-2 text-center text-sm focus:outline-none transition-colors', {
    'border-emerald-400': !focus && !errors[name],
    'border-red-500': errors[name],
    'border-emerald-500': focus && !errors[name],
  }) 
  
  const postfixCls = classNames('w-[4rem] leading-6 text-emerald-50 py-1 px-2 rounded-r-md border transition-colors', {
    'bg-emerald-400': !focus && !errors[name],
    'border-emerald-400': !focus && !errors[name],
    'border-red-500': errors[name],
    'bg-red-500': errors[name],
    'bg-emerald-500 border-emerald-500': focus && !errors[name],
  }) 

  return (
    <div id={`${name}-field`} className="flex justify-between items-center gap-2 mb-4">
      <label htmlFor={name} className={labelCls}>
        {label}
      </label>
      <div className="w-[40%] flex justify-center items-center">
        <input
          id={name}
          name={name}
          onChange={change}
          value={data[name] || ''}
          type="text"
          onFocus={() => setFocus(true)}
          onBlur={() => setFocus(false)}
          className={inputCls}
        />
        {postfix && (
          <small className={postfixCls}>{postfix}</small>
        )}
      </div>
    </div>
  )
} 

export default Text