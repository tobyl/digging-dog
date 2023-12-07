'use client'

import classNames from 'classnames'
import useForm from '@/utils/useForm'
import Form from '@/components/Form'
import { FormContext } from '@/utils/context'

const Calculator = () => {

  const { data, errors, setValue, results, calculate, reset, setFieldError, clearFieldError } = useForm()

  const handleSubmit = e => {
    e.preventDefault()
    Object.keys(data).forEach(d => {
      if (data[d] === '') {
        setFieldError(d, 'This field is required!')
        return
      }
    })
    if (Object.keys(errors).length < 1) {
      calculate()
    }
  }

  const resultsCls = classNames({
    'opacity-0': !results.total,
    'opacity-100': results.total,
  })

  return (
    <FormContext.Provider value={{ data, errors, setValue, clearFieldError }}>
      <Form onSubmit={handleSubmit} reset={reset} />
      <div className={resultsCls}>
        <h3 className="font-medium mb-4">Results</h3>
        <div>
          <ul className="text-sm">
            <li className="grid grid-cols-2 gap-4 border-b border-slate-300 py-2">
              <span className="text-right font-medium">Cure #1 weight:</span> <span>{results.cure} <small className="text-slate-500">grams</small></span>
            </li>
            <li className="grid grid-cols-2 gap-4 border-b border-slate-300 py-2">
            <span className="text-right font-medium">Salt weight:</span> <span>{results.salt} <small className="text-slate-500">grams</small></span>
            </li>
            <li className="grid grid-cols-2 gap-4 border-b border-slate-300 py-2">
              <span className="text-right font-medium">Sugar weight:</span> <span>{results.sugar} <small className="text-slate-500">grams</small></span>
            </li>
            <li className="grid grid-cols-2 gap-4 py-2">
            <span className="text-right font-medium">Total:</span> <span>{results.total} <small className="text-slate-500">grams</small></span>
            </li>
          </ul>
        </div>
      </div>
    </FormContext.Provider>
  )
}

export default Calculator