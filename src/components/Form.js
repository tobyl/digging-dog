import Text from '@/components/Text'

const Form = ({ onSubmit, reset }) => {

  return (
    <form onSubmit={onSubmit} className="mb-8">
      <Text name="meat_weight" label="Meat weight" postfix="g" />
      <Text name="cure_percentage" label="Cure #1 % nitrite" postfix="%" />
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