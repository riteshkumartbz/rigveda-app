import { createStore } from 'redux'
import appreducer from './reducer'
// creating redux state
const store  = createStore(appreducer);

export default store;