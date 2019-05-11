import React, { useContext } from 'react'
import PropTypes from 'prop-types'

ActionRadio.propTypes = {
  wizardContext: PropTypes.object.isRequired,
  selectedValue: PropTypes.number.isRequired,
  actionType: PropTypes.string.isRequired,
  actionValue: PropTypes.number,
  title: PropTypes.string.isRequired,
  value: PropTypes.number,
  callback: PropTypes.func
}

ActionRadio.defaultProps = {
  value: undefined,
  callback: undefined
}

export default function ActionRadio({
  wizardContext,
  selectedValue,
  actionType,
  name,
  title,
  value,
  callback
}) {
  const dispatch = useContext(wizardContext)

  const handleClick = prop => {
    const selectedValue = parseInt(prop.currentTarget.value)

    dispatch({ type: actionType, value: selectedValue })
    if (callback) callback()
  }

  return (
    <wizardContext.Provider value={dispatch}>
      <div className="tile is-child" style={{ textAlign: '-webkit-center' }}>
        <input
          className="tile is-child is-centered"
          type="radio"
          onClick={handleClick}
          name={name}
          value={value}
          defaultChecked={selectedValue === value}
        />
        <p className="title is-child">{title}</p>
      </div>
    </wizardContext.Provider>
  )
}
