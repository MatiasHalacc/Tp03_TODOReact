import React from 'react'

export default function Tarea({listado, setlistado, i}) {
  const item = listado[i];

  const chequearTarea = () => {
    let aux = [...listado];
    aux[i].Resuelto = !item.Resuelto;
    aux[i].FechaTachado = aux[i].Resuelto ? new Date() : null;
    setlistado(aux);
  }

  return (
    <div class="item"><input type="checkbox"
    onChange={chequearTarea}
    checked={listado[i].Resuelto}
    />
    <p className={listado[i].Resuelto ? "Tachar" : ""}>{item.Nombre}</p></div>
  )
}
