import { useState } from 'react'
import { calculateCure } from '@/utils/helpers'

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
  const [results, setResults] = useState({
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
  }
  
  const setFieldError = (name, error) => {
    setError(prevState => {
      const next = Object.assign({}, prevState)
      next[name] = error
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
      )
    )
  }

  const reset = () => {
    setData(initialData)
    setResults({
      cure: null,
      sugar: null,
      salt: null,
      total: null,
    })
  }

  return {
    data,
    errors,
    setValue,
    setFieldError,
    results,
    calculate,
    reset,
    clearFieldError,
  }
}

export default useForm