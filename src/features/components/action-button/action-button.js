import React, { useContext } from 'react'
import PropTypes from 'prop-types'

ActionButton.propTypes = {
  wizardContext: PropTypes.object.isRequired,
  actionType: PropTypes.string.isRequired,
  actionValue: PropTypes.number,
  label: PropTypes.string.isRequired,
  callback: PropTypes.func,
  classNameIt: PropTypes.string,
  disabled: PropTypes.bool
}

ActionButton.defaultProps = {
  actionValue: undefined,
  callback: undefined,
  disabled: false,
  classNameIt: 'button is-large is-info is-rounded"'
}

export default function ActionButton({
  wizardContext,
  actionValue,
  actionType,
  label,
  callback,
  classNameIt,
  disabled
}) {
  const dispatch = useContext(wizardContext)

  const handleClick = () => {
    if (disabled) return

    dispatch({ type: actionType, value: actionValue })

    if (callback) callback()
  }

  return (
    <wizardContext.Provider value={dispatch}>
      <span disabled={disabled} className={classNameIt} onClick={handleClick}>
        {label}
      </span>
    </wizardContext.Provider>
  )
}
