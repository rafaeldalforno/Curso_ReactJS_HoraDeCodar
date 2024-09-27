import './App.css';

// Aula 2 - Importando componentes
import FirstComponent from './components/FirstComponent';
import TemplateExpression from './components/TemplateExpression';
import Events from './components/Events';
import EventsComFuncao from './components/EventsComFuncao';

function App() {
  // Aula 3 - Comentários
  return (
    <>
      {/* Aula 3 - comentário em JSX */}
      <h1>Fundamentos do React</h1>
      <FirstComponent />

      {/* Aula 4 - Template Expression */}
      <h2>Usando template Expression</h2>
      <TemplateExpression />

      {/* Aula 5 - Eventos em React */}
      <h2>Eventos</h2>
      <Events />

      <h2>Eventos com Função:</h2>
      <EventsComFuncao />
    </>
  )
}

export default App
