import React, { Fragment } from 'react'
import PropTypes from 'prop-types'

NoteContentBlock.propTypes = {
  note: PropTypes.object.isRequired,
}

export default function NoteContentBlock({
  note
}) {
  return (
    <Fragment>
      <p className="subtitle">
        <strong>{note.header}:</strong>
      </p>
      <p>
        <span>{note.body}</span>
      </p>
    </Fragment>
  )
}
