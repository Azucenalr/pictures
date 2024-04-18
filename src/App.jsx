import {useState} from 'react'
import SearchBar from './components/SearchBar'
import ImageList from './components/ImageList'
import ImageShow from './components/ImageShow'
import './App.css'
import searchImage from './api'


function App() {
  const [images, setImages] =useState([])
  const handleSubmit=async(term)=>{
  console.log('uste está buscando con:', term)
  const result = await searchImage(term)
  
  setImages (result)
  }



  return (
    <div>
      <h1>App</h1>
      <SearchBar onSubmit={handleSubmit}/>
      <ImageList images={images}/>
    </div>
  )
}


export default App
