import React, { useContext } from 'react'
import PropTypes from 'prop-types'
import { VALIDATE_DATA } from '../../constants/actions/shippingActionTypes'
ActionInput.propTypes = {
  wizardContext: PropTypes.object.isRequired,
  actionType: PropTypes.string.isRequired,
  actionValue: PropTypes.number,
  valueIt: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  callback: PropTypes.func,
  type: PropTypes.string,
  label: PropTypes.string,
  notValid: PropTypes.bool,
  errorMessage: PropTypes.string
}

ActionInput.defaultProps = {
  valueIt: undefined,
  callback: undefined,
  type: 'text',
  label: '',
  validWhen: undefined,
  errorMessage: 'The value must be at least 3 characters long'
}

export default function ActionInput({
  wizardContext,
  actionType,
  name,
  valueIt,
  callback,
  type,
  label,
  errorMessage,
  validWhen
}) {
  const dispatch = useContext(wizardContext)

  let notValid = !validWhen

  if (validWhen === undefined) {
    notValid = valueIt.length > 0 && valueIt.length < 3
  }

  const handleChange = e => {
    dispatch({ type: actionType, value: e.currentTarget.value })
    dispatch({ type: VALIDATE_DATA })

    if (callback) callback()
  }

  return (
    <wizardContext.Provider value={dispatch}>
      <div className="field is-horizontal">
        <div className="field-label is-normal has-text-left">
          <label className="label">{label}</label>
        </div>
        <div className="field-body">
          <div className="field">
            <p className="control has-icons-right">
              <input
                className={`input is-primary is-rounded ${
                  notValid ? `is-danger` : ``
                }`}
                type={type}
                name={name}
                onChange={handleChange}
                value={valueIt}
                placeholder="Text input"
              />
              {notValid && (
                <span className="icon is-small is-right">
                  <i className="fas fa-exclamation-triangle" />
                </span>
              )}
            </p>
            {notValid && <p className="help is-danger">{errorMessage}</p>}
          </div>
        </div>
      </div>
    </wizardContext.Provider>
  )
}
