import { ADD } from '../action_type'
import { AnyAction } from 'redux'

// 定义参数接口
export interface AddState {
  number: number
}

// 初始化state
let initialState: AddState = {
  number: 1
}

// 返回一个reducer
const addReducer = (state: AddState = initialState, action: AnyAction) => {
  switch (action.type) {
    case ADD:
      return { number: state.number + action.payload }
    default:
      return state
  }
}
export default addReducer