import { STEP_LIST } from '../../features/constants/shipping-info'

const noteInfo = {
  header: '',
  body: '',
}

const notesAppInfo = {
  list: [],
  note: {...noteInfo},
  activeNote: {...noteInfo},
  searchContent: '',
  completed: 0,
  currentStep: STEP_LIST
}

export {
  notesAppInfo as notesInitialState,
  noteInfo as noteInitialState,
}
