import React, { useState, useReducer, useEffect, Fragment } from 'react'
import Storage from '../../utils/storage'
import { notesInitialState } from '../../store/initial-states/shipping-info'
import {
  PROCESS_LOADED,
  VALIDATE_DATA
} from '../../features/constants/actions/shippingActionTypes'
import {
  STEP_LIST,
  STEP_NEW_FORM,
  SHIPPING_STORAGE_NAME
} from '../../features/constants/shipping-info'
import shippingReducer from '../../store/reducers/shipping'
import Wizard from '../../core/componetns/wizard'
import NewNoteStep from '../components/new-note-step'
import ListStep from '../components/list-step'

const ShippingContext = React.createContext(null)

export default function ShippingLabelMaker(props) {
  const [shippingInfo, dispatch] = useReducer(
    shippingReducer,
    notesInitialState
  )

  const [isLoaded, changeLoadedStatus] = useState(() => false)
  const [currentStepComponent, setCurrentStep] = useState(
    () => ListStep
  )

  useEffect(() => {
    if (!isLoaded) {
      const shippingInfo = Storage.get(SHIPPING_STORAGE_NAME)

      const savedShippingInfo =
        shippingInfo !== 'undefined'
          ? JSON.parse(shippingInfo)
          : notesInitialState

      changeLoadedStatus(true)

      dispatch({ type: PROCESS_LOADED, savedShippingInfo })
      dispatch({ type: VALIDATE_DATA })
    }
  }, [isLoaded, changeLoadedStatus, notesInitialState])

  useEffect(() => {
    console.log('shippingInfo', shippingInfo)
    Storage.set(SHIPPING_STORAGE_NAME, JSON.stringify(shippingInfo))
  }, [shippingInfo])

  useEffect(() => {
    switch (shippingInfo.currentStep) {
      case STEP_LIST:
        setCurrentStep(() => ListStep)
        break
      case STEP_NEW_FORM:
        setCurrentStep(() => NewNoteStep)
        break
      default:
        setCurrentStep(() => ListStep)
    }
  }, [shippingInfo, setCurrentStep])

  return (
    <Fragment>
      <ShippingContext.Provider value={dispatch}>
        <section className="hero is-primary is-bold">
          <div className="hero-body">
            <div className="container is-fluid">
              <h1 className="title">Notes Maker</h1>
            </div>
          </div>
        </section>
        <Wizard
          wizardInfo={shippingInfo}
          wizardContext={ShippingContext}
          CurrentComponent={currentStepComponent}
        />
      </ShippingContext.Provider>
    </Fragment>
  )
}
