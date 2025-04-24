import React, { useEffect } from 'react'

export default function BarraAgregar({lista,setLista,setTareaRapida}) {    
  useEffect(
    () => {setTareaRapida(null);}, []
  )

  function AgregarTarea(){
      let NombreTarea = document.getElementById("IngresarTODO").value;
      if(!NombreTarea) return;
      let tarea = {
          id : lista.length,
          Nombre : NombreTarea,
          Resuelto : false,
          FechaCreacionS: new Date().toLocaleString(), 
          FechaCreacion: new Date(), 
          FechaTachado: null,
          TimestampTachado: null
      }      
      setLista([...lista,tarea]);      
  }
  return (
    <>
      <button onClick={AgregarTarea}>Agregar</button>
      <input type="text" id="IngresarTODO" placeholder="Agregar Tarea"></input>      
    </>
  )
}
