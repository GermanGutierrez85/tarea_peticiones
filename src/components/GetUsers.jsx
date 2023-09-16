import React, { useState, useEffect } from "react";
import axios from "axios";

export default function GetUsers() {
  const [user, setUser] = useState([]);
  useEffect(() => {
    axios
      .get("https://reqres.in/api/users")
      .then((resp) => {
        const dataObj = resp.data;
        const dataUser = dataObj.data;
        console.log(dataUser);
        setUser(dataUser);
      })
      .catch((error) => {
        alert(`Error al ejecutar la peticion: ${error.resp.status}`);
      });
  }, []);
  const users = user.map((userInfo) => (
    <div key={userInfo.id}>
      <div className="container">
        <img src={userInfo.avatar} />
        <div>
          <p>
            Nombre:{" "}
            <span style={{ color: "green", fontStyle: "italic" }}>
              {userInfo.first_name} {userInfo.last_name}
            </span>
          </p>

          <p>
            Correo:{" "}
            <span style={{ color: "green", fontStyle: "italic" }}>
              {userInfo.email}
            </span>
          </p>
        </div>
      </div>
    </div>
  ));

  return <div>{users}</div>;
}
