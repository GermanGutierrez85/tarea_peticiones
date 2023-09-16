import React, { useState } from "react";
import axios from "axios";

export default function CreateUserForm() {
  const [state, setState] = useState("");
  function handleSubmit(e) {
    const userForm = {
      name: e.target.name.value,
      job: e.target.job.value,
    };
    console.log(userForm);

    axios
      .post("https://reqres.in/api/users", userForm)
      .then((response) => {
        setState("Usuario creado con exito");
        console.log(response.status);
        response.status = OK
          ? setState("Usuario creado con exito")
          : setState("Debes completar los datos requeridos");
      })

      .catch((error) => console.log(setState(error)));
  }
  function handleReset(e) {
    e.target.name.value = "";
    e.target.job.value = "";
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
        <label>
          Name:
          <input type="text" name="name" />
        </label>
        <br />
        <label>
          Job:
          <input type="text" name="job" />
        </label>
        <input type="submit" value="Crear usuario" />
      </form>
      {/* <input type="reset" value="Reset" onClick={() => handleReset} /> */}
      <p style={{ color: "black" }}>{state}</p>
    </>
  );
}
