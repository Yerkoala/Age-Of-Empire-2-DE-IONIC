import React from 'react'
import "./Unidad.css";


const Unidad = ({ isOpen, cerrarComponente,nombreUnidad,unidadCompletaCompleta }) => {

 //Función que hará que al hacer click dentro del modal no se ejecute la funcion
 //de afuera ya que los elementos padres toman los elementos hijos
  const handleModalDialogClick = (e) => {
    e.stopPropagation();
  }
  

  return (
    <div className={`unidad ${isOpen && 'unidad-open'}`} onClick={cerrarComponente}>
      <div className='modal__dialog' onClick={handleModalDialogClick} >
        <h1><strong>{nombreUnidad}</strong></h1>
        <h4>{unidadCompletaCompleta.civilizacion}</h4>
        <img src={unidadCompletaCompleta.url} alt={nombreUnidad} />
        <p>{unidadCompletaCompleta.detalle}</p>
        <button onClick={cerrarComponente}>Cerrar</button>
      </div>

    </div>
  )
}

export default Unidad