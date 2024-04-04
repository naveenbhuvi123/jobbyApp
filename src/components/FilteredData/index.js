import './index.css'

const FilteredData = props => {
  const {employmentTypesList, salaryRangesList} = props

  const employmentDetails = employmentTypesList.map(eachItem => (
    <li key={eachItem.employmentTypeId}>
      <input
        type="checkbox"
        className="input-item"
        id={eachItem.employmentTypeId}
      />
      <label className="list-item" htmlFor={eachItem.employmentTypeId}>
        {eachItem.label}
      </label>
    </li>
  ))

  const salaryRangeDetails = salaryRangesList.map(eachItem => (
    <li key={eachItem.salaryRangeId}>
      <input
        type="checkbox"
        className="input-item"
        id={eachItem.salaryRangeId}
      />
      <label className="list-item" htmlFor={eachItem.salaryRangeId}>
        {eachItem.label}: {eachItem.value}
      </label>
    </li>
  ))

  return (
    <div>
      <ul className="list">
        <h1 className="list-heading">Type of Employment</h1>
        {employmentDetails}
      </ul>
      <hr className="line" /> {/* Horizontal line after employment types */}
      <ul className="list">
        <h1 className="list-heading">Salary Range</h1>
        {salaryRangeDetails}
      </ul>
    </div>
  )
}

export default FilteredData
