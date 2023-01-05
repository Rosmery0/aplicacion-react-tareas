import React from 'react';
import '../hojas-de-estilos/Tarea.css';
import { RiDeleteBack2Line } from "react-icons/ri";

function Tarea({ id, texto, completada, completarTarea, eliminarTarea }) {
  return (
    <div className={completada ? 'tarea-contenedor completada' : 'tarea-contenedor'}>
      <div 
        className='tarea-texto'
        onClick={() => completarTarea(id)}>
        {texto}
      </div>
      <div 
        className='tarea-contenedor-iconos'
        onClick={() => eliminarTarea(id)}>
        <RiDeleteBack2Line className='tarea-icono' />
      </div>
    </div>
  );
}

export default Tarea;