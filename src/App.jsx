import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [orden , setOrden] =  useState(null);
  const [cancelar , setCancelar] = useState(false);

  useEffect(() => {
    const tiempo = setTimeout(() => {
      setOrden("Tu pedido de Pizza esta listo")
    }, 2000);
  
    return () => {
if (cancelar){
    console.log("Su pedido fue cancelado");
  }
      clearTimeout(tiempo)
    }
  }, [cancelar])

  useEffect(() => {
    if(orden){
      console.log("El componente fue actualizado")
    }
  }, [orden])
  const cancelarOrden = () =>{
    setOrden(null);
    setCancelar(true);
    console.log("tu pedido fue cancelado.")
  }

  return (
    <>
      <h1>Su pedido: </h1>
      {orden ? <p> - {orden}</p> : <p>Cargando pedido...</p>}
      <button onClick={cancelarOrden}> Cancelar pedido</button>
    </>
  )
}

export default App
