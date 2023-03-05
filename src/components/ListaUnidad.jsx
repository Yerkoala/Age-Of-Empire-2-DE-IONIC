import React from 'react'
import Unidad from './Unidad'
import "../pages/Home.css"
import { useState } from 'react'


const ListaUnidad = ({nombre, civilizacion,unidadCompleta}) => {
        //Abrir el componente de unidad como ventana
        const [abierto, setAbierto] = useState(false)

        const abrirComponente = () => {
            setAbierto(true);
            console.log(unidadCompleta)
        }
        const cerrarComponente = () => {
            setAbierto(false);
        }
    return (
        <div>
            <div className='card-unidad' onClick={abrirComponente} >
                <h3>{nombre}</h3>
                <p>{civilizacion}</p>
            </div>
            <Unidad
                isOpen={abierto}
                cerrarComponente={cerrarComponente}
                nombreUnidad={nombre}
                unidadCompletaCompleta={unidadCompleta}
            />
        </div>

    )
}

export default ListaUnidad