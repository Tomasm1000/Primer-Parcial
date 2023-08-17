import { useState } from 'react'
import './App.css'
import Card from './Components/Card'
import Form from './Components/Form'

function App() {
  //Aqui deberias agregar los estados y los handlers para los inputs
  const [enviar, setEnviar] = useState(false)
  return (
    <div className="App">
      <h1>Elige una pelicula</h1>
      <card><Card/></card>
      <form>{/* aqui deberias escribir tu codigo */
      <Form/>
      
      }</form>
    </div>
  );
}

export default App;