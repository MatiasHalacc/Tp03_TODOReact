import React, { useState } from 'react'
import BarraAgregar from './BarraAgregar.jsx'
import './BarraAgregar.css'
import BotonTR from './BotonTR.jsx'

import "./BotonTR.css"
import Listado from './Listado'
import BotonBorrarTodo from './BotonBorrarTodo.jsx'
export default function Body() {
    const [lista, setLista] = useState([]);
    let [tareaRapida, setTareaRapida] = useState(null);

  return (
    <>
    <div>
        <BarraAgregar lista={lista} setLista={setLista} tareaRapida={tareaRapida} setTareaRapida={setTareaRapida} />
    </div>
    <div>
        <BotonTR lista={lista} tareaRapida={tareaRapida} setTareaRapida={setTareaRapida} />
        <BotonBorrarTodo setLista={setLista} setTareaRapida={setTareaRapida}/>
    </div>
        <Listado listado={lista} setlistado={setLista} setTareaRapida={setTareaRapida}/>
    </>
  )
}
