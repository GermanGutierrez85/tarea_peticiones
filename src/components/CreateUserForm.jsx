import React, { useState } from "react";
import axios from "axios";

export default function CreateUserForm() {
  const [state, setState] = useState("");
  function handleSubmit(e) {
    e.preventDefault();
    let name = e.target.name.value;
    let job = e.target.job.value;
    const userForm = {
      name: name,
      job: job,
    };
    console.log(userForm);
    if (name == "" || job == "") {
      setState("Debe completar los espacios");
    } else {
      axios
        .post("https://reqres.in/api/users", userForm)
        .then((response) => {
          setState("Usuario creado con exito");
          console.log(response.status);
          response.status = "201"
            ? setState("Usuario creado con exito")
            : setState("Debes completar los datos requeridos");
        })

        .catch((error) => {
          setState("Error al crear usuario - Intente nuevamente");
          console.log(error);
        });
    }
  }
  function handleReset(e) {
    e.target.name.value = "";
    e.target.job.value = "";
    setState("");
  }

  return (
    <>
      <form onSubmit={handleSubmit} className="container">
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
        <input type="reset" value="Reset" onClick={() => handleReset} />
      </form>

      <p style={{ color: "white" }}>{state}</p>
    </>
  );
}
