//Este componente deberia recibir por props y mostrar en pantalla la informacion
//que envia el usuario

function Card(pelicula, setEnviar) {
    return (
      <div >
        <h3>{pelicula.nombre}</h3>
        <h4>{pelicula.peliculaFavorita}</h4>
        <button onClick={() => setEnviar(true)}>Enviar</button>
    </div>
    );
  }
  
  export default Card;
  