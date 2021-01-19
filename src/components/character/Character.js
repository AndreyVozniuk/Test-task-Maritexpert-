import {useDispatch} from 'react-redux'
import {removeCharacter, changeCharacterName} from '../../store/actions/charactersAction'
import Button from './../button/Button'
import './Character.css'

export default function Character({name, id, race}) {
  const dispatch = useDispatch()

  function changeName(){
    const name = prompt('Введите новое имя персонажа')

    if(name !== null){
      if(name.replaceAll(' ', '')){
        dispatch(changeCharacterName(race, id, name))
      }
    }
  }

  return <div className='character'>
    <div className='character-name'>
      Имя персонажа - <span style={{fontStyle: 'italic', color:'salmon', fontSize: '16px'}}>{name}</span>
    </div>
    <div style={{width: '100%'}}>
      <Button style={{marginRight:'10px', marginBottom: '5px', padding: '8px'}} onClick={changeName}>
        Изменить имя
      </Button>
      <Button style={{padding: '8px'}} onClick={() => dispatch(removeCharacter(race, id))}>
        Удалить
      </Button>
    </div>
  </div>
}