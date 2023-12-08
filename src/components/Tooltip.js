import classNames from 'classnames'

const Tooltip = ({ show }) => {

  const cls = classNames('absolute z-10 inline-block px-3 py-2 text-sm font-medium text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip dark:bg-gray-700', {
    'invisible': !show,
  })

  return (
    <div className={cls}>
      You almost certainly don't want to change this value!
    </div>
  )
}

export default Tooltip