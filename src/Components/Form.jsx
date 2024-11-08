import React, { useState } from "react";

const Form = ({onSubmit, error}) => {
  const [preferencias, setPreferencias] = useState({
    frutaFavorita: "",
    colorFavorito: "",
  });

  const handleSubmit = (event) => {
    event.preventDefault();
    onSubmit(preferencias);
    setPreferencias({ frutaFavorita: "", colorFavorito: "" });
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>Fruta favorita</label>
        <input
          type="text"
          value={preferencias.frutaFavorita}
          onChange={(event) =>
            setPreferencias({ ...preferencias, frutaFavorita: event.target.value })
          }
        />
        <label>Color favorito</label>
        <input
          type="text"
          value={preferencias.colorFavorito}
          onChange={(event) =>
            setPreferencias({ ...preferencias, colorFavorito: event.target.value })
          }
        />
        <button type="submit">Enviar</button>
        {error && (
          <h4 style={{color: "red"}}>
            Por favor chequea que la información sea correcta
          </h4>
        )}
      </form>
    </div>
  );
};

export default Form;
