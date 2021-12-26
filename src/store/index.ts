import { createStore, Store } from 'redux'
import reducers from './reducers/index'

const store: Store<any> = createStore(reducers)
export default store