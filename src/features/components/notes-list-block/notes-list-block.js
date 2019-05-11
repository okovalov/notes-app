import React, { useContext } from 'react'
import PropTypes from 'prop-types'
import { SET_ACTIVE_NOTE } from '../../constants/actions/shippingActionTypes'

import NoteBlock from '../note-block'

NotesListBlock.propTypes = {
  notes: PropTypes.string,
  wizardContext: PropTypes.object.isRequired,
  searchContent: PropTypes.string
}

NotesListBlock.defaultProps = {
  notes: undefined,
  searchContent: undefined,
}

export default function NotesListBlock({
  wizardContext,
  searchContent,
  notes
}) {

  const dispatch = useContext(wizardContext)

  const selectNote = header => {
    console.log('set active, header', header)
    dispatch({ type: SET_ACTIVE_NOTE, value: header })
  }

  const filtered = notes.filter(note => {
    if (!searchContent) return note
    if (note.header.indexOf(searchContent) !== -1) return note
  })

  return (
    filtered.map(note => {
      return (
        <p onClick={() => selectNote(note.header)}>
          <NoteBlock
            header={note.header}
          />
        </p>
      )
    })
  )
}
