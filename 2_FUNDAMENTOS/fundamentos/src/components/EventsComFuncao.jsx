const EventsComFuncao = () => {
  const handleClick = (e) => {
    console.log(e);
    console.log("Executou a Função fora do onclick!");
  }

  // Aula 8 - Função de Renderização
  const renderSomething = (x) => {
    if(x){
      return <h4>Renderizando alguma coisa</h4>
    } else {
      return <h4>Renderizando Nada</h4>
    }
  }

  return (
    <>
      <h3>Eventos com Função:</h3>
      <button onClick={ handleClick }>
        Clique Aqui!
      </button>

      {/* Aula 8 - Função Renderização */}
      {renderSomething(true)}
      {renderSomething(false)}
    </>
  )
}

export default EventsComFuncao;