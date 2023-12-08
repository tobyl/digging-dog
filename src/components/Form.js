import Text from '@/components/Text'
import Select from '@/components/Select'

const meatLabel = <p>Enter the weight of your meat here. Change the field above to enter in lbs.</p>
const nitriteLabel = <p>Check the nitrite % of your curing salt. Common values are 6.25% or 5%.</p>

const Form = ({ onSubmit, reset, unit, changeUnit }) => {
  return (
    <form onSubmit={onSubmit} className="mb-8 text-sm max-w-lg">
      <Select name="weights" label="Meat weight unit" onChange={changeUnit} unit={unit} />
      <Text name="meat_weight" label="Meat weight" fullLabel={meatLabel} postfix={unit === 'metric' ? 'g' : 'lbs'} />
      <Text name="cure_percentage" label="Cure #1 nitrite %" fullLabel={nitriteLabel} postfix="%" />
      <Text name="salt_percentage" label="Desired salt %" postfix="%" />
      <Text name="sugar_percentage" label="Desired sugar %" postfix="%" />
      <Text name="ppm_nitrite" label="Parts per million nitrite" postfix="ppm" />
      <div className="mt-8 flex justify-between">
        <button type="submit" className="py-2 px-4 rounded-md bg-emerald-500 text-emerald-50 font-light uppercase tracking-wide hover:bg-emerald-600 transition-colors focus:outline-none focus:bg-emerald-600">
          Calculate
        </button>
        <button type="button" onClick={reset} className="text-sm text-slate-400 py-2 px-4 rounded-md border border-slate-200 bg-slate-50 hover:text-slate-500 hover:border-slate-300 transition-colors focus:outline-none focus:border-slate-400">
          Reset
        </button>
      </div>
    </form>
  )
}

export default Form