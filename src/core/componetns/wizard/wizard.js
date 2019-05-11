import React, { useContext, Fragment } from 'react'
import PropTypes from 'prop-types'

Wizard.propTypes = {
  wizardContext: PropTypes.object.isRequired,
  wizardInfo: PropTypes.object.isRequired,
  CurrentComponent: PropTypes.func.isRequired
}

export default function Wizard({
  wizardContext,
  wizardInfo,
  CurrentComponent
}) {
  const dispatch = useContext(wizardContext)

  return (
    <Fragment>
      <wizardContext.Provider value={dispatch}>
        <section className="section">
          <CurrentComponent
            wizardContext={wizardContext}
            wizardInfo={wizardInfo}
          />
        </section>
      </wizardContext.Provider>
    </Fragment>
  )
}
