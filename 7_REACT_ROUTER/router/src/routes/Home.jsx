import React from 'react';

// 6 - carregando os Dados
import { useFetch } from '../hooks/useFetch';

// 7 - Rota Dinâmica
import { Link } from 'react-router-dom';

const url = "http://localhost:3000/products";

const Home = () => {
  const { data: items } = useFetch(url);

  return (
    <div>
      <h1>Esta é a Home!</h1>
      {/* 6 - Carregando os Dados */}
      <ul className='products'>
        {items && items.map((item) => (
          <li key={item.id}>
            <h2>{item.name}</h2>
            <p>R${item.price}</p>
            {/* 7 - Rota dinâmica */}
            <Link to={`/products/${item.id}`}>Detalhes</Link>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default Home