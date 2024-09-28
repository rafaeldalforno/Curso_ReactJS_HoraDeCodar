import './App.css';

// 2- imagem em Assets
import night from "./assets/night.jpg";

// 3 - useState
import Data from "./components/Data";

// 4 - Renderização de Lista
import ListRender from './components/ListRender';

// 7 - Condicional Render
import CondicionalRender from './components/CondicionalRender';

// 8 - Props
import ShowUserName from './components/ShowUserName';

// 9 - Desestruturando Props
import CarDetails from './components/CarDetails';

{/* 11 - Renderização de Listas com componentes */}
const cars = [
  {id: 1, brand: "Ferrari", color: "Amarelo", km: 0 },
  {id: 2, brand: "Mercedes", color: "preto", km: 200 },
  {id: 3, brand: "Audi", color: "Vermelho", km: 500 },
]

// 13 - Children
import Container from './components/Container';

// 14 - Função em Prop
import ExecuteFunction from './components/ExecuteFunction';

//  15 - State Lift
import { useState } from 'react';
import Message from './components/Message';
import ChangeMessage from './components/ChangeMessage';


function App() {
  // 14 - Função em Prop
  function showMessage() {
    console.log("Evento do componente Pai")
  }

  // 15 - State Lift
  const [message, setMessage] = useState("");

  const handleMessage = (msg) => {
    setMessage(msg);
  }

  return (
    <div className="App" style={{paddingBottom: "500px" }}>
      <h1>Avançando em React!</h1>
      {/* 1 - Imagem em Public */}
      <img src="./img.jpg" alt="Alguma Imagem" />
      
      {/* 2 - Imagem em Assets */}
      <img src={night} alt="outra imagem" />

      {/* 3 - Usando o Hook useState */}
      <Data />

      {/* 4 - Render List */}
      <ListRender />

      {/* 7 - Render Condicional */}
      <CondicionalRender />

      {/* 8 - Props */}
      <ShowUserName name="Rafa"/>

      {/* 9 - Desestruturando Props */}
      <CarDetails brand="Nissan" km= {500} color="Vermelho"/>

      {/* 10 - Reaproveitando um componente */}
      <CarDetails brand="Volkswagen" km= {1500} color="Verde"/>
      <CarDetails brand="Fiat" km= {300} color="Branco"/>

      {/* 11 - Renderização de Listas com componentes */}
      {cars.map((car) => (
        <CarDetails 
          key={car.id}
          brand={car.brand}
          color={car.color}
          km={car.km}
        />
      ))}

      {/* 13 - Children */}
      <Container>
        <div>
          <h3>Teste</h3>
          <p>Meu container</p>
        </div>
      </Container>

      {/* 14 - Função em Prop */}
      <ExecuteFunction myFunction={showMessage} />

      {/* 15 - State Lift */}
      <Message msg={message}/>
      <ChangeMessage handleMessage={handleMessage} />
    </div>
  )
}

export default App;
