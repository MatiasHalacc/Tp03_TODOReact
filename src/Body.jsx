import React, { useState } from 'react'
import BarraAgregar from './BarraAgregar'
import './BarraAgregar.css'
import BotonTR from './BotonTR'
import "./BotonTR.css"
import Listado from './Listado'
export default function Body() {
    const [lista, setLista] = useState([{id:1,nombre:'martin'}]);

  return (
    <>
        <BarraAgregar lista={lista} setLista={setLista} />
        <BotonTR />
        <Listado listado={lista} />
    </>
  )
}
