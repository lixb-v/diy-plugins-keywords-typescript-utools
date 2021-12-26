import { combineReducers, ReducersMapObject, AnyAction, Reducer } from 'redux'
import addReducer, { AddState } from './addReducer'

// 合并reducers 模块化
export interface CombinedState {
  addReducer: AddState
}

const reducers: ReducersMapObject<CombinedState, AnyAction> = {
  addReducer
}
const reducer: Reducer<CombinedState, AnyAction> = combineReducers(reducers)

export default reducer