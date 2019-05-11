import * as ACTIONS from '../../features/constants/actions/shippingActionTypes'
import { notesInitialState, noteInitialState } from '../initial-states/shipping-info'

const shippingReducer = (state, action) => {
  switch (action.type) {
    case ACTIONS.PROCESS_LOADED: {
      return { ...notesInitialState, ...action.savedShippingInfo }
    }
    case ACTIONS.VALIDATE_DATA: {
      const isNoteHeaderValid =
        state.note.header.length === 0 || state.note.header.length >= 5
      const isNoteBodyValid =
        state.note.body.length === 0 || state.note.body.length >= 50

      const isSearchValid = state.searchContent.length === 0 || state.searchContent.length >= 3

      const isNoteValid =
        state.note.header.length >= 5 &&
        state.note.body.length >= 50

      return {
        ...state,
        note: {
          ...state.note,
          isHeaderValid: isNoteHeaderValid,
          isBodyValid: isNoteBodyValid,
        },
        isNoteValid,
        isSearchValid
      }
    }
    case ACTIONS.RESET_PROCESS: {
      return { ...notesInitialState }
    }
    case ACTIONS.RESET_NOTE: {
      return { ...state, note: {...noteInitialState}, completed: 0 }
    }
    case ACTIONS.SET_ACTIVE_NOTE: {
      const activeHeader = action.value

      const filtered = state.list.filter(note => note.header === activeHeader)

      const activeNote = filtered.length ? filtered[0] : state.list[0]

      return { ...state, activeNote }
    }

    case ACTIONS.SET_CURRENT_STEP: {
      return { ...state, currentStep: action.value }
    }
    case ACTIONS.SET_NOTE_HEADER: {
      console.log('new header', action)
      return {
        ...state,
        note: { ...state.note, header: action.value }
      }
    }
    case ACTIONS.SET_NOTE_BODY: {
      return {
        ...state,
        note: { ...state.note, body: action.value }
      }
    }
    case ACTIONS.ADD_NOTE: {
      const newNote = { ...state.note }
      return {
        ...state,
        list: [ ...state.list, { ...state.note } ],
        activeNote: { ...newNote }
      }
    }
    case ACTIONS.SET_SEARCH_CONTENT: {
      return { ...state, searchContent: action.value }
    }

    default:
      return state
  }
}

export default shippingReducer
