import React, { useState } from 'react'
import BarraAgregar from './BarraAgregar.jsx'
import './BarraAgregar.css'
import BotonTR from './BotonTR.jsx'

import "./BotonTR.css"
import Listado from './Listado'
import BotonBorrarTodo from './BotonBorrarTodo.jsx'
export default function Body() {
    const [lista, setLista] = useState([]);

  return (
    <>
    <div>
        <BarraAgregar lista={lista} setLista={setLista} />
    </div>
    <div>
        <BotonTR lista={lista}/>
        <BotonBorrarTodo setLista={setLista}/>
    </div>
        <Listado listado={lista} setlistado={setLista} />
    </>
  )
}
