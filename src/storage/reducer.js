import * as types from './ActionTypes';
import Immutable from 'seamless-immutable';

let sampleState = Immutable({
  isAuthorized: false,
  id: undefined,
  photo: undefined,
  name: '',
  email:'',
  position: '',
  isOwner: '',
  cafes: [],
  staff: [],

})

function reducer(state= sampleState, action = {}){
  switch(action.type) {
    case types.AUTHORIZATION:
      console.log('auth ',action);
      return state.merge({
        isAuthorized: true,
        id: action.user.id,
        photo: action.user.photo,
        name: action.user.name,
        email: action.user.email,
        position: action.user.position,
        isOwner: action.user.isOwner,
      })
    case types.REGISTRATION: // Я не помню как у нас реализован ответ при реге/логине, мб отличается ответ от сервера
      console.log('reg ',action);
      return state.merge({
        isAuthorized: true,
        id: action.user.id,
        photo: action.user.photo,
        name: action.user.name,
        email: action.user.email,
        position: action.user.position,
        isOwner: action.user.isOwner,
      })

    case types.GET_CURRENT_USER:
      console.log('get current user ',action);
      return state.merge({
        isAuthorized: true,
        id: action.user.id,
        photo: action.user.photo,
        name: action.user.name,
        email: action.user.email,
        position: action.user.position,
        isOwner: action.user.isOwner,
      })

    case types.CHANGE_NAME:
      return state.merge({
        name: action.user.name,
      })
    case types.CHANGE_POSITION:
      return state.merge({
        position: action.user.position,
      })
    case types.CHANGE_PASSWORD:

      break;
    case types.GET_STAFF:
      console.log('reducer get_staff')
      return state.merge({
      staff: action.user.staff
      })

    default:
      return state;
  }
}

export default reducer;


export function isOwner(state) {
  return state.isOwner ;
}


