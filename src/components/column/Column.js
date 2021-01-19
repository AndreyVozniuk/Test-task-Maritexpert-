import {useDispatch} from 'react-redux'
import {addCharacter} from '../../store/actions/charactersAction'
import Button from './../button/Button'
import './Column.css'

export default function Column({children, title}) {
  const dispatch = useDispatch()
  
  function buttonHandler() {
    const name = prompt('Введите имя нового персонажа')

    const newCharacter = {
      character: {id:Date.now(), name}, 
      race: title
    }

    if(name !== null){
      if(name.replaceAll(' ', '')){
        dispatch(addCharacter(newCharacter))
      }
    }
  }

  return <div className='column'>
    <div className='column-title' >
      Раса - {title}
      <Button onClick={buttonHandler} style={{marginLeft: '25px'}}>Добавить</Button>
    </div>

    {children}
  </div>
}