import React from 'react'

export default function BotonBorrarTodo({setLista}) {
  return (
    <>
        <button onClick={() => setLista([])}>Borrar todas las tareas</button>
    </>
  )
}
