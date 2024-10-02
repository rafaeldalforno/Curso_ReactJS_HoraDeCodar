import { useState } from "react";

import "./MyForm.css";

const MyForm = ({ userName, userEmail }) => {
  // 3 - Gerenciamento de Dados
  const [ name, setName ] = useState(userName);
  const [ email, setEmail ] = useState(userEmail);
  
  // 8 - textarea
  const [ bio, setBio ] = useState("");

  // 9 - Form Select
  const [ role, setRole ] = useState("");

  const handleName = (e) => {
    setName(e.target.value);
  }

  // 5 - Envio de Form
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(name, email, bio, role);

    // validação
    // envio

    // 7 - Limpar form
    setName("");
    setEmail("");
    setBio("");
    setRole("");
  }
  
  return (
    <div>
      {/* 1 - Criação do Formulário */}
      {/* 5 - Envio de Formulário */}
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">Nome:</label>
          <input 
            type="text" 
            name="name" 
            placeholder="Digite o seu Nome" 
            onChange={handleName}
            // 6 - Controlled input
            value={name || ""}
          />
        </div>

        {/* 2 - Label envolvendo o input */}
        <label>
          <span>E-mail</span>
          <input 
            type="email" 
            name="email" 
            placeholder="Digite seu email"
            // 4 - Simplificando manipulação
            onChange={(e) => setEmail(e.target.value)}
            // 6 - Controlled input
            value={email || ""}
          />
        </label>

        {/* 8 - Text Area */}
        <label>
          <span>Bio:</span>
          <textarea 
            name="bio" 
            placeholder="Descrição do Usuário"
            onChange={(e) => setBio(e.target.value)}
            value={bio}
            ></textarea>
        </label>

        {/* 9 - Form Select */}
        <label>
          <span>Função no Sistema</span>
          <select 
            name="role" 
            onChange={(e) => setRole(e.target.value)} value={role}
          >
            <option value="user">Usuário</option>
            <option value="programador">Programador</option>
            <option value="admin">Admin</option>
          </select>
        </label>

        <input type="submit" value="Enviar" />
      </form>
    </div>
  )
}

export default MyForm