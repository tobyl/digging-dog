'use client'

import { useState } from 'react'
import useForm from '@/utils/useForm'
import Form from '@/components/Form'
import Dialog from '@/components/Dialog'
import { FormContext } from '@/utils/context'

const Calculator = () => {

  const [dialogOpen, setDialogOpen] = useState(false)

  const { data, errors, warnings, setValue, results, calculate, reset, setFieldError, clearFieldError, unit, changeUnit } = useForm()

  const handleSubmit = e => {
    e.preventDefault()
    let error = false 
    Object.keys(data).forEach(d => {
      if (data[d] === '') {
        setFieldError(d, 'This field is required!')
        error = true
      }
    })
    if (!error) {
      calculate()
      setDialogOpen(true)
    }
  }

  return (
    <FormContext.Provider value={{ data, errors, warnings, setValue, clearFieldError, unit, changeUnit }}>
      <div className="flex justify-center">
        <Form onSubmit={handleSubmit} reset={reset} unit={unit} changeUnit={changeUnit} />
      </div>
      <Dialog
        dialogOpen={dialogOpen}
        setDialogOpen={setDialogOpen}
        results={results}
      />
    </FormContext.Provider>
  )
}

export default Calculator