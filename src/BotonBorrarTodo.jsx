import React, { useEffect } from 'react'

export default function BotonBorrarTodo({setLista,setTareaRapida}) {  
  return (
    <>
        <button onClick={() => {setLista([]); setTareaRapida(null);}}>Borrar todas las tareas</button>
    </>
  )
}
