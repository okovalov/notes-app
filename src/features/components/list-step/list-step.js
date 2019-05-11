import React, { Fragment, useContext } from 'react'
import PropTypes from 'prop-types'
import { SET_SEARCH_CONTENT, SET_CURRENT_STEP } from '../../../features/constants/actions/shippingActionTypes'
import { STEP_NEW_FORM } from '../../../features/constants/shipping-info'

import ActionButton from '../action-button'
import NoteListBlock from '../notes-list-block'
import NoteContentBlock from '../note-content-block'
import ActionInput from '../action-input'

ListOfNotes.propTypes = {
  wizardContext: PropTypes.object.isRequired,
  wizardInfo: PropTypes.object.isRequired
}

export default function ListOfNotes({ wizardContext, wizardInfo }) {
  const dispatch = useContext(wizardContext)

  return (
    <Fragment>
      <wizardContext.Provider value={dispatch}>
        <div className="container">
          <div className="tile is-ancestor">
            <div className="tile is-parent is-vertical ">

              <div className="tile is-parent box">
                <article className="tile is-parent is-vertical   ">
                  <div className="tile is-child  box">
                    <ActionInput
                      wizardContext={wizardContext}
                      name="sender_name"
                      actionType={SET_SEARCH_CONTENT}
                      valueIt={wizardInfo.searchContent}
                      label={'Search:'}
                      validWhen={wizardInfo.isSearchValid}
                    />
                  </div>
                  <div className="tile is-child  ">
                    <div className="content">
                      <NoteListBlock
                        searchContent={wizardInfo.searchContent}
                        wizardContext={wizardContext}
                        notes={wizardInfo.list}
                      />
                    </div>
                  </div>
                </article>

                <article className="tile is-child  box ">
                  <div className="content">
                    <NoteContentBlock
                      note={wizardInfo.activeNote}
                    />

                  </div>
                </article>
              </div>

              <div className="tile is-parent box">
                <div className="tile is-child">
                  <div className="has-text-centered">
                    <ActionButton
                      wizardContext={wizardContext}
                      actionType={SET_CURRENT_STEP}
                      actionValue={STEP_NEW_FORM}

                      label={'Add a note'}
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
