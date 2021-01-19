import {createStore, combineReducers} from 'redux'
import {charactersReducer} from './reducers/charactersReducer'

const rootReducer = combineReducers({
  charactersStore: charactersReducer
})

export const store = createStore(rootReducer)