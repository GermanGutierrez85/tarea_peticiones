import React, { useState } from "react";
import axios from "axios";

export const newUser = {
  name: "German",
  job: "Developer",
};
export default function CreateUser() {
  const [create, setCreate] = useState(null);
  function handleCreateUser() {
    axios
      .post("https://reqres.in/api/users", newUser)
      .then((resp) => {
        console.log(resp.data);
        setCreate("Usuario creado con exito!");
      })
      .catch((error) => {
        alert(`Error al ejecutar la peticion: ${error.resp.status}`);
      });
  }
  return (
    <div>
      <button onClick={() => handleCreateUser()}>Crear Usuario</button>
      <p>{create}</p>
    </div>
  );
}
