import React from 'react'
import Tarea from './Tarea'

export default function Listado({listado}) {
  return (
    <ul>
        {listado.map(item=>(
            <Tarea item={item} />
        ))}
    </ul>
  )
}
