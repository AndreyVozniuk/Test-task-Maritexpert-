import {useDispatch, useSelector} from 'react-redux'
import {useEffect} from 'react'
import {setCharacters} from '../../store/actions/charactersAction'
import Column from './../column/Column'
import Character from './../character/Character'
import './App.css'

const socket = new WebSocket('ws://testapi.marit.expert:3004')

function App() {
  const dispatch = useDispatch()
  const characters = useSelector(state => state.charactersStore.characters)

  useEffect(() => {
    socket.onopen = () => socket.send({cmd:'get_list'})

    socket.onmessage = ({data}) => {
      const charactersObj = {}

      JSON.parse(data).forEach(el => {
        const key = el.race

        if( Object.keys(charactersObj).includes(key) ){
          charactersObj[key] = [...charactersObj[key], {id:el.id, name: el.name}]
        }else{
          charactersObj[key] = [{id:el.id, name: el.name}]
        }
      })

      dispatch(setCharacters(charactersObj))
    }
  }, [])

  return <div className='app'>
    { 
      characters ? 
      Object.keys(characters).map((race, i) => {
        return <Column title={race} key={race + i}>
          {
            characters[race].length === 0 ? 
            <div style={{marginTop: '25px', textAlign:'center'}}>Вы удалили всех персонажей 😄</div> :
            characters[race].map(crct => <Character name={crct.name} key={crct + crct.id} id={crct.id} race={race}/>)
          }
        </Column>
      }) : null
    }
  </div>
}

export default App
