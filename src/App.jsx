import {useState} from 'react'
import SearchBar from './components/searchBar'
import ImageList from './components/imageList'
import ImageShow from './components/imageShow' 
import './App.css'

function App() {
  const [images, setImages]= useState([])
  const handleSubmit = async(term)=>{
  console.log('uste esta buscando con:', term)
}

  return (
    <div>
      <h1>Hello There</h1>
    </div>
  )
}

export default App