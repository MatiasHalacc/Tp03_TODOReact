import React from 'react'

export default function Tarea({listado, setlistado, i, setTareaRapida}) {
  const item = listado[i];

  const chequearTarea = () => {
    setTareaRapida(null);
    let aux = [...listado];
    aux[i].Resuelto = !item.Resuelto;
    aux[i].FechaTachado = aux[i].Resuelto ? new Date() : null;
    aux[i].FechaTachadoS = aux[i].FechaTachado != null ? aux[i].FechaTachado.toLocaleString() : null;
    aux[i].TimestampTachado = aux[i].FechaTachado != null ? aux[i].FechaTachado - aux[i].FechaCreacion : null;
    setlistado(aux);
  }

  return (
    <div className="item"><input type="checkbox"
    onChange={chequearTarea}
    checked={listado[i].Resuelto}
    />
    <p className={listado[i].Resuelto ? "Tachar" : ""}>{item.Nombre}</p></div>
  )
}
