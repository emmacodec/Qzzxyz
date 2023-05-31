import { CLEAR_LIST, REMOVE_ITEM, RESET_LIST } from './action';
import { data, people } from '../../../data';
// the empty function reducer controls our entire state
const reducer = (state, action) => {
    if(action.type === CLEAR_LIST) {
      return {...state, people: [] };
    }
    if(action.type === RESET_LIST) {
      return {...state, people: data};
    }
    if(action.type === REMOVE_ITEM) {
      let newPeople = state.people.filter((person) => person.id !== action.payload.id);
  
      return {...state, people: newPeople};
    }
    throw new Error('No matching' `${action.type}`);
  };

  export default reducer;