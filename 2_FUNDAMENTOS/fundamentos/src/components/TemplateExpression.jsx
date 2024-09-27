// Aula 4 - Template Expression

const TemplateExpression = () => {
  const name = "Rafael";

  const data = {
    age: 30,
    job: "Programador"
  }

  return (
    <div>
      <p>A soma é {2 + 2}</p>
      <h3>Bem-Vindo {name}</h3>
      <p>Sua idade é: {data.age} anos, e você é '{data.job}'</p>
    </div>
  )
}

export default TemplateExpression;