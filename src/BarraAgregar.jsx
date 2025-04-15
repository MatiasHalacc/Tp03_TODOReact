import React, { useState } from 'react'

export default function BarraAgregar({lista,setLista}) {    

  function AgregarTarea(){      
      let NombreTarea = document.getElementById("IngresarTODO").value;
      let tarea = {
          id : lista.length,
          Nombre : NombreTarea,
          Resuelto : false,
          FechaCreacion: new Date().toLocaleString(), 
          FechaTachado: null,
          TimestampTachado: null
      }
            
      setLista(...lista,tarea);      
  }
  return (
    <>
      <button onClick={AgregarTarea}>Agregar</button>
      <input type="text" id="IngresarTODO" placeholder="Agregar Tarea"></input>      
    </>
  )
}
