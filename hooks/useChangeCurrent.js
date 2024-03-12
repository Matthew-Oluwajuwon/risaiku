import { useDispatch, useSelector } from 'react-redux'
import { setAllAppKeys } from '../store'

const useChangeCurrent = () => {
    const dispatch = useDispatch()
  const state = useSelector(state => {
    return state.app
  })

  const onChangeCurrentStep = (current) => {
    dispatch(setAllAppKeys({
      ...state,
      current
    }))
  }
  return onChangeCurrentStep
}

export default useChangeCurrent