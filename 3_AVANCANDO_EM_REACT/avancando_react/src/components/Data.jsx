import { useState } from "react";

const Data = () => {
  const [ anotherNumber, setAnotherNumber] = useState(15);

  return (
    <div>
      <div>
        <p>valor: {anotherNumber}</p>
        <button onClick={() => setAnotherNumber(20)}>Atualiza Valor</button>
      </div>
    </div>
  )
}

export default Data;