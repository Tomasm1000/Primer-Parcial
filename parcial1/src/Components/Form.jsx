import { useState } from 'react'

const Form = () => {

    const [pelicula, setPelicula] = useState({
        nombre: '',
        peliculaFavorita: ''
    })
    const [show, setShow] = useState(false)
    const [error, setError] = useState(false) 

    const handleSubmit = () => {
        if(pelicula.nombre.length > 3 && pelicula.peliculaFavorita.length >= 6){
            setShow(true)
            setError(false)
        } else {
            setError(true)
        }
    }

    console.log(pelicula)
  return (
    <div>
        <label>Nombre del usuario</label>
        <input type="text" value={pelicula.nombre}
            onChange={(event) => setPelicula({...pelicula, nombre: event.target.value})}
        />
        <label>Pelicula favorita</label>
        <input type="text" value={pelicula.peliculaFavorita}
            onChange={(event) => setPelicula({...pelicula, peliculaFavorita: event.target.value})}
        />
        <button onClick={handleSubmit}>Enviar</button>
        {show && <h3>Su pelicula favorita es {peliculaFavorita} </h3>}
        {error && <h4 style={{color: 'red'}}>Por favor chequea que la información sea correcta</h4>}
    </div>
  )
}

export default Form