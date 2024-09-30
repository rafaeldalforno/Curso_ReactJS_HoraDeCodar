import './App.css'

// 2 - CSS de Componente
import MyComponent from './components/MyComponent';

// 6 - CSS Module
import Title from './components/Title';

function App() {
  // 4 - CSS inline dinâmico
  const n = 15;

  // 5 - Classes Dinâmicas
  const redTitle = true;

  return (
    <div className='App'>
      {/* 1 - CSS Global */}
      <h1>CSS no React:</h1>

      {/* 2 - CSS de Componente */}
      <MyComponent />
      <p>pegou o css componente</p>

      {/* 3 - Inline Style */}
      <p style={{color: 'blue', padding: "25px", borderTop: "1px dotted blue"}}>Este elemento tem estilo em Linha</p>

      {/* 4 - Inline Style Dinâmico */}
      <h2 style={n > 10 ? {color: 'purple'} : {color: 'magenta'}}>
        CSS Inline Dinâmico
      </h2>
      <h2 style={n > 20 ? {color: 'purple'} : {color: 'magenta'}}>
        CSS Inline Dinâmico 2
      </h2>

      {/* 5 - Classes Dinâmicas */}
      <h2 className={redTitle ? "red-title" : "title" }>Este título vai ter uma classe</h2>

      {/* 6 - Classes por Módulos: */}
      <Title />
    </div>
  )
}

export default App
