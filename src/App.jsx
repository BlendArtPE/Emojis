import { useEffect, useState } from 'react'
import axios from 'axios'
import './App.css'
import EmojiList from './componentes/EmojiList'

function App() {

  const [listEmojis, setListEmojis] = useState([])
  const [emoji, setEmoji] = useState('')
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState('')

  useEffect(() => {
    axios.get('https://emoji-api.com/emojis?access_key=52b09bb5ef64862bf2a7bbe8aaedb15758042b61')
    .then(res => {
      setLoading(false)
      setListEmojis(res.data)
      setError('')
    })
    .catch(err => {
      setLoading(false)
      setListEmojis([])
      setError('Something went wrong.')
    })
  },[])
  return (
    <>
    <div className='text-black'>
      <h1 className='mb-3'><b>EMOJIS</b></h1>
      <input placeholder='Search...' className='input-search' type='text' onChange={e => setEmoji(e.target.value)}/>
      <br />
      {loading ? 'Loading...' : <EmojiList emojis={listEmojis} search={emoji}/>}
      {error ? error : null}
    </div>
      
    </>
  )
}

export default App
