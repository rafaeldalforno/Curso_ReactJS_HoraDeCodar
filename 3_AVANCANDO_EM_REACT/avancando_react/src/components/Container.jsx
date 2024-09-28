const Container = ({children}) => {
  return (
    <div>
      <h2>Conteúdo do componente Pai</h2>
      {children}
    </div>
  )
}

export default Container;