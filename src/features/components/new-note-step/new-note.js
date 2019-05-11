import React, { Fragment, useContext } from 'react'
import PropTypes from 'prop-types'
import {
  SET_CURRENT_STEP,
  SET_NOTE_HEADER,
  SET_NOTE_BODY,
  ADD_NOTE,
  RESET_NOTE,
  RESET_PROCESS
} from '../../../features/constants/actions/shippingActionTypes'

import { STEP_SAVE_NEW } from '../../../features/constants/shipping-info'

import ActionButton from '../action-button'
import ActionInput from '../action-input'

NewNote.propTypes = {
  wizardContext: PropTypes.object.isRequired,
  wizardInfo: PropTypes.object.isRequired
}

export default function NewNote({ wizardContext, wizardInfo }) {
  const dispatch = useContext(wizardContext)

  const addNewNote = () => {
    dispatch({ type: ADD_NOTE })
    dispatch({ type: RESET_NOTE })
  }

  return (
    <Fragment>
      <wizardContext.Provider value={dispatch}>
        <div className="container">
          <div className="tile is-ancestor">
            <div className="tile is-parent is-vertical box">
              <div className="tile is-child  has-text-centered">
                <h1 className="title">Create a new note</h1>
              </div>
              <div className="tile is-child notification ">
                <ActionInput
                  wizardContext={wizardContext}
                  name="note_header"
                  actionType={SET_NOTE_HEADER}
                  valueIt={wizardInfo.note.header}
                  label={'Header:'}
                  validWhen={wizardInfo.note.isHeaderValid}
                  errorMessage={'content must be at least 5 characters long'}
                />
              </div>
              <div className="tile is-child notification">
                <ActionInput
                  wizardContext={wizardContext}
                  name="note_body"
                  actionType={SET_NOTE_BODY}
                  valueIt={wizardInfo.note.body}
                  label={'Body:'}
                  validWhen={wizardInfo.note.isBodyValid}
                  errorMessage={'content must be at least 50 characters long'}
                />
              </div>
              <div className="tile is-parent">
                <div className="tile is-child">
                  <div className="has-text-centered">
                    <ActionButton
                      wizardContext={wizardContext}
                      actionType={RESET_PROCESS}
                      label={'Cancel'}
                    />
                  </div>
                </div>
                <div className="tile is-child">
                  <div className="has-text-centered">
                    <ActionButton
                      wizardContext={wizardContext}
                      actionType={SET_CURRENT_STEP}
                      actionValue={STEP_SAVE_NEW}
                      label={'Save'}
                      disabled={!wizardInfo.isNoteValid}
                      callback={addNewNote}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </wizardContext.Provider>
    </Fragment>
  )
}
