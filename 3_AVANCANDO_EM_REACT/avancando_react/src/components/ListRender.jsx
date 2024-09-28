import { useState } from "react";

const ListRender = () => {
  const [list] = useState(["Rafael", "Jacqueline", "Bruna"]);

  const [users, setUsers] = useState([
    {id: 1, name: "Rafa", age: 30},
    {id: 2, name: "Jac", age: 24},
    {id: 3, name: "Bru", age: 29},
  ])
  
  const deleteRandom = () => {
    const randomNumber = Math.floor(Math.random() * 4);

    setUsers((prevUsers) => prevUsers.filter((user) => randomNumber !== user.id)
    );
  }

  return (
    <div>
      {/* 4 -  Render sem Key*/}
      <ul>
        {list.map((item) => (
          <li>{item}</li>
        ))}
      </ul>
      {/* 5 - Render com Key */}
      <ul>
        {users.map((user) => (
          <li key={user.id}>
            {user.name} - {user.age} anos
          </li>
        ))}
      </ul>

      {/* 6 - Previous State */}
      <button onClick={deleteRandom}>Delete Random User</button>
    </div>
  )
}

export default ListRender