import './App.css';
import ListaDeTareas from './componentes/ListaDeTareas';

function App() {
  return (
    <div className='app-tareas'>
      <div className='contenedor-titulo'>
        <h1>Administrador de tareas Rosmery Rosario</h1>
      </div>
      <div className='tareas-lista-principal'>
        <h2>Mis Tareas</h2>
        <ListaDeTareas />
      </div>
    </div>
  );
}

export default App;
