import {SET_CHARACTERS, ADD_CHARACTER, REMOVE_CHARACTER, CHANGE_CHARACTER_NAME} from '../types'

export function setCharacters(characters) {
  return {
    type: SET_CHARACTERS,
    payload: characters
  }
}

export function addCharacter(character) {
  return {
    type: ADD_CHARACTER,
    payload: character
  }
}

export function removeCharacter(race, id) {
  return {
    type: REMOVE_CHARACTER,
    payload: {race, id}
  }
}

export function changeCharacterName(race, id, name){
  return {
    type: CHANGE_CHARACTER_NAME,
    payload: {race, id, name} 
  }
}
