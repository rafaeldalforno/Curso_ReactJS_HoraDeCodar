import { FaUser, FaLock } from "react-icons/fa";

import { useState } from "react";

import "./Login.css";

const Login = () => {
  const [ username, setUsername ] = useState("");
  const [ password, setPassword ] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    alert(`Enviando os dados: ${username} - ${password}`);
  }

  return (
    <div className="container">
      <form onSubmit={handleSubmit}>
        <h1>Acesso o Sistema</h1>
        <div className="input-field">
          <input 
            type="email" 
            placeholder='Digite seu Email' 
            onChange={(e) => setUsername(e.target.value)}/>
          <FaUser className="icon" />
        </div>
        <div className="input-field">
          <input 
            type="password" 
            placeholder='Digite sua Senha' 
            onChange={(e) => setPassword(e.target.value)}
          />
          <FaLock className="icon" />
        </div>

        <div className="recall-forget">
          <label>
            <input type="checkbox" />
            Lembre de Mim
          </label>
          <a href="#">Esqueceu a Senha?</a>
        </div>

        <button>Entrar</button>

        <div className="signup-link">
          <p>
            Não tem conta? 
            <a href="#"> Registrar-se</a>
          </p>
        </div>
      </form>
    </div>
  )
}

export default Login