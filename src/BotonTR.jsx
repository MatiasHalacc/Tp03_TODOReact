import React, { useState } from 'react'

export default function BotonTR({lista}) {
  let tiempoMasRapido = Number.MAX_VALUE;
  const [tareaRapida, setTareaRapida] = useState(null);
  const CalcTareaRapida = () => {
    for (let i = 0; i < lista.length; i++) {
        if (lista[i].TimestampTachado === null) { continue; }
        let tiempoTachado = lista[i].TimestampTachado;
        if (tiempoTachado < tiempoMasRapido) {
            tiempoMasRapido =tiempoTachado;
            setTareaRapida(lista[i]);
        }
    }
  }

  return tareaRapida != null && lista.length != 0 ? (
    
    <>
        <button onClick={CalcTareaRapida}>Tarea hecha mas rapida</button>
        <div>
            <p><strong>Tarea más rápida en ser tachada:</strong></p>
            <p>Nombre:{tareaRapida.Nombre}</p>
            <p>Fecha de creación: {tareaRapida.FechaCreacionS}</p>
            <p>Fecha de tachado: {tareaRapida.FechaTachadoS}</p>
        </div>
    </>
  ) : (
    <>
      <button onClick={CalcTareaRapida}>Tarea hecha mas rapida</button>
    </>
  )
}
