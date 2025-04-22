import React, { useState } from 'react'
import BarraAgregar from './BarraAgregar.jsx'
import './BarraAgregar.css'
import BotonTR from './BotonTR.jsx'

import "./BotonTR.css"
import Listado from './Listado'
export default function Body() {
    const [lista, setLista] = useState([]);

  return (
    <>
        <BarraAgregar lista={lista} setLista={setLista} />
        <BotonTR lista={lista}/>
        <Listado listado={lista} setlistado={setLista} />
    </>
  )
}
