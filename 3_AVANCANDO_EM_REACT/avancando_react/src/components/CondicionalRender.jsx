import React from 'react'

const CondicionalRender = () => {
  const x = true;

  const name = "Rafael";

  return (
    <div>
      {/* 7 - Render Condicional */}
      <h3>Isso será Exibido?</h3>
      {x && <p>Se x for true: sim!</p>}

      {/* 8 - Else */}
      <h3>Render Ternário</h3>
      {name === "Rafael" ? (
          <div>
            <p>Olá Rafael!</p>
          </div>
        ) : (
          <div>
            <p>Nome não Encontrado!</p>
          </div>
      )}
    </div>
  )
}

export default CondicionalRender