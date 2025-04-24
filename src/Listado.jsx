import React from 'react'
import Tarea from './Tarea'
import './Tarea.css'
export default function Listado({listado, setlistado}) {
  if(listado.length == 0){
    return (
      <ul></ul>
    )
  }

  return (
    <ul>
        {listado.map((_, i)=>(
            <Tarea key={i} listado={listado} i={i} setlistado={setlistado}/>
        ))}
    </ul>
  )
}
