import React, { Fragment } from 'react'
import PropTypes from 'prop-types'

NoteBlock.propTypes = {
  header: PropTypes.string,
}

NoteBlock.defaultProps = {
  header: undefined,
}

export default function NoteBlock({
  header,
}) {
  return (
    <Fragment>
      <p className="subtitle">
        <strong>{header}:</strong>
      </p>
    </Fragment>
  )
}
