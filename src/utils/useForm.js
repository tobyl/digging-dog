import { useState } from 'react'
import { calculateCure } from '@/utils/helpers'
import Link from 'next/link'

const initialData = {
  meat_weight: '',
  cure_percentage: 6.25,
  salt_percentage: 2,
  sugar_percentage: 1,
  ppm_nitrite: 156,
}

const useForm = () => {
  const [data, setData] = useState(initialData)
  const [errors, setError] = useState({})
  const [warnings, setWarning] = useState({})
  const [unit, setUnit] = useState('metric')
  const [results, setResults] = useState({
    meat_weight: null,
    cure: null,
    salt: null,
    sugar: null,
    total: null,
  })
  
  const setValue = (name, value) => {
    setData(prevState => {
      const next = Object.assign({}, prevState)
      next[name] = value
      return next
    })
    if (name === 'cure_percentage') {
      if (value !== '6.25') {
        setFieldWarning('cure_percentage', <span>You probably don't want to change this! <Link href="/help" className="inline-block font-semibold text-amber-700">Read more</Link></span>)
      } else {
        setWarning(prevState => {
          const next = Object.assign({}, prevState)
          delete next.cure_percentage
          return next
        })
      }
    }
  }
  
  const setFieldError = (name, error) => {
    setError(prevState => {
      const next = Object.assign({}, prevState)
      next[name] = error
      return next
    })
  }
  
  const setFieldWarning = (name, warning) => {
    setWarning(prevState => {
      const next = Object.assign({}, prevState)
      next[name] = warning
      return next
    })
  }
  
  const clearFieldError = (name) => {
    setError(prevState => {
      const next = Object.assign({}, prevState)
      delete next[name]
      return next
    })
  }

  const calculate = () => {
    setResults(
      calculateCure(
        data.meat_weight,
        data.cure_percentage,
        data.salt_percentage,
        data.sugar_percentage,
        data.ppm_nitrite,
        unit,
      )
    )
  }

  const reset = () => {
    setData(initialData)
    setResults({
      meat_weight: null,
      cure: null,
      sugar: null,
      salt: null,
      total: null,
    })
  }

  const changeUnit = e => {
    setUnit(e.target.value)
    setValue('meat_weight', '')
  }

  return {
    data,
    errors,
    warnings,
    setValue,
    setFieldError,
    setFieldWarning,
    results,
    calculate,
    reset,
    clearFieldError,
    unit,
    changeUnit,
  }
}

export default useForm