import Saludo from './Saludo';
import './App.css';

function App() {
  const nombres = [
    { nombre: 'Andres', id: 1 },
    { nombre: 'Edgar', id: 2 },
    { nombre: 'David', id: 3 }
  ];

  return (
    <>
      {nombres.map((persona) => (
        <Saludo nombre={persona.nombre} id={persona.id} />
      ))}
    </>
  );
}

export default App;
