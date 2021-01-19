import {ADD_CHARACTER, SET_CHARACTERS, REMOVE_CHARACTER, CHANGE_CHARACTER_NAME} from './../types'

const initialState = {
  characters: null
}

export const charactersReducer = (state = initialState, action) =>  {
  switch (action.type) {
    case SET_CHARACTERS: 
      return {...state, characters: action.payload}
    case ADD_CHARACTER:
      const decreaseCharacters = {...state.characters}
      decreaseCharacters[action.payload.race] = [...decreaseCharacters[action.payload.race], action.payload.character]
      return {...state, characters: decreaseCharacters}
    case REMOVE_CHARACTER:
      const increaseCharacters = {...state.characters}
      increaseCharacters[action.payload.race] = increaseCharacters[action.payload.race].filter(el => el.id !== action.payload.id)
      return {...state, characters: increaseCharacters}
    case CHANGE_CHARACTER_NAME:
      const charactersWithNewName = {...state.characters}
      const characterIndex = charactersWithNewName[action.payload.race].findIndex(el => el.id === action.payload.id)
      charactersWithNewName[action.payload.race][characterIndex].name = action.payload.name       
      return {...state, characters: charactersWithNewName}
    default:
      return state
  }
}