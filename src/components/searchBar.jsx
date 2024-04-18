import { useState } from "react"

function SearchBar({onSubmit}){
    const [term, setTerm]= useState('')


    const handleFormSubmit=(event)=>{
        event.preventDefault()
        console.log('Necesito decirle al componente apá sobre los datos')
        onSubmit(term)
    }


    const handlechange=(event)=>{
        console.log(event.target.value)
        setTerm(event.target.value)
    }


    const handleClick=(event)=>{
        onSubmit(term)
    }


    return(
        <div>
            <h1>Search Bar:</h1>
            <form onSubmit={handleFormSubmit}>
            confirma tu busqueda: {term}
            <input onChange={handlechange} value={term}/>
            </form>
            <button onClick={handleClick}>Clik me!</button>
        </div>
    )
}
