export default function BotonTR({lista, setTareaRapida, tareaRapida}) {
  let tiempoMasRapido = Number.MAX_VALUE;
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

  return tareaRapida != null ? (
    <>
        <button onClick={() => {tareaRapida = CalcTareaRapida()}}>Tarea hecha mas rapida</button>
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
